"use client"; 
import JournalForm from "@/components/journal-form";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { PlusSquare } from "lucide-react";
import { useState } from "react";

export default function NewJournalPage() {
  const [selectedMood, setSelectedMood] = useState("");

  const handleMoodSelect = (emoji: string): void => {
    setSelectedMood(emoji);
  };

  return (
    <div className="max-w-screen-xl mx-auto py-10">
      <Dialog>
        <DialogTrigger asChild>
          <Button>
            <PlusSquare className="mr-2" />
            New Journal
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle>New Journal Entry</DialogTitle>
          </DialogHeader>
          <JournalForm/>
        </DialogContent>
      </Dialog>
    </div>
  );
}
