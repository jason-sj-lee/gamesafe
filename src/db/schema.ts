import { pgTable, text, timestamp, date } from "drizzle-orm/pg-core";

export const userTable = pgTable("user", {
  id: text("id").primaryKey(),
  username: text("username").notNull().unique(),
  password_hash: text("password_hash").notNull(),
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
