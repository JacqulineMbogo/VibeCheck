"use server";
import { auth } from '@clerk/nextjs/server'
import { z } from "zod";
import { db } from "@/db";
import { journalsTable } from "@/db/schema";

const JournalSchema = z.object({
  mood: z.string().min(1, { message: "Please select a mood" }),
  content: z.string().min(2, "Message must be at least 2 characters"),
});

export const CreateJournal = async (data: {
  mood: string;
  content: string;
}) => {
    const { userId, redirectToSignIn } = await auth()
    console.log("user id",userId)
    if (!userId) return redirectToSignIn()

   


  const validationResult = JournalSchema.safeParse(data);

  if (!validationResult.success) {
    return {
      error: true,
      message: validationResult.error.errors.join(", "),
    };
  }

  // Insert journal with server-generated date
  const [journal] = await db
    .insert(journalsTable)
    .values({
      user_id: Number(userId), // Use userId directly from Clerk auth
      mood: data.mood,
      content: data.content,
      date: new Date().toISOString(),
    })
    .returning(); // Return the inserted journal

  return {
    id: journal.id,
  };
};
