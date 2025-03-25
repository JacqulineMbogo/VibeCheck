"use client"

import JournalForm, { formSchema } from "@/components/journal-form"
import { z } from "zod"
import { CreateJournal } from "@/app/dashboard/journals/actions"
import { toast } from "sonner"

export default function NewJournalForm() {
    const handleSubmit = async(data: z.infer<typeof formSchema>) => {
        const result = await CreateJournal({
            mood: data.mood,
            content: data.content
        })
        console.log(result)
        if (result.error) {
            console.log(result.message)
            toast("Error creating journal.please retry again")
        }else {
            toast("Journal has been created successfully.")
        }



    }
    return (
        <JournalForm onSubmit={handleSubmit}/>
    );
    }