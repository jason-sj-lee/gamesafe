import { pgTable, text, timestamp, date, pgEnum } from "drizzle-orm/pg-core";

export const accountTypeEnum = pgEnum("accountType", [
  "therapist",
  "organizer",
]);

export const userTable = pgTable("user", {
  id: text("id").primaryKey(),
  email: text("email").notNull(),
  password_hash: text("password_hash").notNull(),
  firstname: text("firstname").notNull(),
  lastname: text("lastname").notNull(),
  accountType: accountTypeEnum("accountType"),
  certification: text("certification"),
});

export const sessionTable = pgTable("session", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => userTable.id),
  expiresAt: timestamp("expires_at", {
    withTimezone: true,
    mode: "date",
  }).notNull(),
});

export const jobPostTable = pgTable("job_post", {
  id: text("id").primaryKey(),
  title: text("title"),
  eventType: text("eventType"),
  eventDate: date("eventDate"),
  location: text("location"),
  description: text("description"),
  compensation: text("compensation"),
  deadline: date("deadline"),
});
