import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  sex: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});

export const journalsTable = pgTable("journals", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  user_id: integer().notNull().references(() => usersTable.id),
  mood: varchar({ length: 255 }).notNull(),
  date: varchar({ length: 255 }).notNull(),
  content: varchar({ length: 255 }).notNull(),
});
