import { jobPostTable } from "@/db/schema";
import { generateIdFromEntropySize } from "lucia";
import { db } from "@/db";
import { InferInsertModel } from "drizzle-orm";

// Define the type for the insert operation based on the schema
type JobPostInsertType = InferInsertModel<typeof jobPostTable>;

export async function createJob(formData: FormData) {
  const jobId = generateIdFromEntropySize(10);
  const title = formData.get("jobTitle") as string | null;
  const eventType = formData.get("eventType") as string | null;
  const eventDate = formData.get("eventDate") as string | null; // ISO string
  const location = formData.get("location") as string | null;
  const description = formData.get("description") as string | null;
  const compensation = formData.get("compensation") as string | null;
  const deadline = formData.get("deadline") as string | null; // ISO string

  if (!title || typeof title !== "string") {
    return {
      error: "Invalid title",
    };
  }

  // Construct the data object according to your schema
  const jobData: JobPostInsertType = {
    id: jobId,
    title,
    eventType,
    location,
    description,
    compensation,
    eventDate,
    deadline,
  };

  // Insert the data into the database
  await db.insert(jobPostTable).values(jobData);
}
