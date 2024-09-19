"use server";

import { db } from "@/db";
import { hash } from "@node-rs/argon2";
import { cookies } from "next/headers";
import { lucia } from "@/lib/auth";
import { redirect } from "next/navigation";
import { generateIdFromEntropySize } from "lucia";
import { userTable, accountTypeEnum } from "@/db/schema";
import { InferInsertModel } from "drizzle-orm";

type UserInsertType = InferInsertModel<typeof userTable>;

export async function signup(formData: FormData) {
  const email = formData.get("email") as string;
  // username must be between 4 ~ 31 characters, and only consists of lowercase letters, 0-9, -, and _
  // keep in mind some database (e.g. mysql) are case insensitive
  const password = formData.get("password") as string | null;
  if (
    typeof password !== "string" ||
    password.length < 6 ||
    password.length > 255
  ) {
    return {
      error: "Invalid password",
    };
  }

  const passwordHash = (await hash(password, {
    // recommended minimum parameters
    memoryCost: 19456,
    timeCost: 2,
    outputLen: 32,
    parallelism: 1,
  })) as string;
  const userId = generateIdFromEntropySize(10); // 16 characters long
  const accountType = formData.get("accountType") as
    | "therapist"
    | "organizer"
    | null
    | undefined;
  const certification = formData.get("certification") as string | null;
  const firstname = formData.get("firstname") as string;
  const lastname = formData.get("lastname") as string;

  // TODO: check if username is already used
  const userData: UserInsertType = {
    id: userId,
    email,
    password_hash: passwordHash,
    firstname,
    lastname,
    accountType,
    certification,
  };

  await db.insert(userTable).values(userData);

  const session = await lucia.createSession(userId, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
  return redirect("/");
}
