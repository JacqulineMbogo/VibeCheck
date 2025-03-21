import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PlusSquare } from "lucide-react"
import { useState } from "react"

export default function NewJournalPage() {
  const [selectedMood, setSelectedMood] = useState("");

  const handleMoodSelect = (emoji) => {
    setSelectedMood(emoji);
  };
  return (
    <div className="max-w-screen-xl mx-auto py-10">  
    <Dialog>
      <DialogTrigger asChild>
        <Button> <PlusSquare /> New Journal</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Journals</DialogTitle>
          <DialogDescription>
                What's on your mind today?
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <div className="flex space-x-4 mt-3">
              {["😊", "😔", "😡", "😌"].map((emoji) => (
                <button
                  key={emoji}
                  onClick={() => handleMoodSelect(emoji)}
                  className={`text-4xl p-2 rounded-lg ${
                    selectedMood === emoji ? "bg-blue-100" : "bg-gray-100"
                  }`}
                >
                  {emoji}
                </button>
              ))}
            </div>
          <p className="text-sm text-gray-500 mt-2">
            Pick an emoji that matches your vibe.
          </p>
      </div>
            <Label htmlFor="mood" className="text-right">
              Mood
            </Label>
            <Input
              id="mood"
              defaultValue="Wht's your mood today?"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="content" className="text-right">
              Content
            </Label>
            <Input
              id="content"
              defaultValue="Tell me more about your thoughts"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </div>
  )
}
