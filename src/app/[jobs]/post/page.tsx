"use client";

import { Button } from "@/app/ui/button";
import { Input } from "@/app/ui/input";
import { Label } from "@/app/ui/label";
import { Textarea } from "@/app/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/ui/select";
import { DatePicker } from "@/app/ui/date-picker";
import Link from "next/link";
import Logo from "@/app/ui/gamesafe-logo";
import { useState } from "react";
import { createJob } from "./actions";

export default function Page() {
  const [eventDate, setEventDate] = useState<Date | undefined>(undefined);
  const [deadline, setDeadline] = useState<Date | undefined>(undefined);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    // Append eventDate and deadline to the form data
    if (eventDate) {
      formData.append("eventDate", eventDate.toISOString());
    }
    if (deadline) {
      formData.append("deadline", deadline.toISOString());
    }

    await createJob(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#006D77] to-[#83C5BE]">
      <header className="bg-[#006D77] p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Logo className="w-10 h-10 text-[#E29578]" />
            <span className="text-white text-2xl font-bold">Gamesafe</span>
          </Link>
          <nav>
            <Button variant="ghost" className="text-white hover:text-[#E29578]">
              Profile
            </Button>
            <Button variant="ghost" className="text-white hover:text-[#E29578]">
              Logout
            </Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-3xl font-bold text-[#006D77] mb-6">
            Create Job Posting
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="jobTitle" className="text-[#006D77]">
                Job Title
              </Label>
              <Input
                id="jobTitle"
                name="jobTitle"
                required
                className="border-[#83C5BE] focus:border-[#E29578] focus:ring-[#E29578]"
                placeholder="e.g., Sports Therapist for Marathon"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="eventType" className="text-[#006D77]">
                Event Type
              </Label>
              <Select name="eventType">
                <SelectTrigger className="border-[#83C5BE] focus:border-[#E29578] focus:ring-[#E29578]">
                  <SelectValue placeholder="Select event type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="marathon">Marathon</SelectItem>
                  <SelectItem value="football">Football</SelectItem>
                  <SelectItem value="swimming">Swimming</SelectItem>
                  <SelectItem value="cycling">Cycling</SelectItem>
                  <SelectItem value="tennis">Tennis</SelectItem>
                  <SelectItem value="basketball">Basketball</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="eventDate" className="text-[#006D77]">
                Event Date
              </Label>
              <DatePicker
                selected={eventDate}
                onSelect={setEventDate}
                className="border-[#83C5BE] focus:border-[#E29578] focus:ring-[#E29578]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location" className="text-[#006D77]">
                Location
              </Label>
              <Input
                id="location"
                name="location"
                required
                className="border-[#83C5BE] focus:border-[#E29578] focus:ring-[#E29578]"
                placeholder="e.g., Central Park, New York"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description" className="text-[#006D77]">
                Job Description
              </Label>
              <Textarea
                id="description"
                name="description"
                required
                className="border-[#83C5BE] focus:border-[#E29578] focus:ring-[#E29578]"
                placeholder="Describe the job responsibilities and requirements"
                rows={4}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="compensation" className="text-[#006D77]">
                Compensation
              </Label>
              <Input
                id="compensation"
                name="compensation"
                required
                className="border-[#83C5BE] focus:border-[#E29578] focus:ring-[#E29578]"
                placeholder="e.g., $500, £400/day, €5000 for event duration"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="requirements" className="text-[#006D77]">
                Special Requirements
              </Label>
              <Textarea
                id="requirements"
                name="requirements"
                className="border-[#83C5BE] focus:border-[#E29578] focus:ring-[#E29578]"
                placeholder="Any specific certifications, equipment, or experience needed"
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="applicationDeadline" className="text-[#006D77]">
                Application Deadline
              </Label>
              <DatePicker
                selected={deadline}
                onSelect={setDeadline}
                className="border-[#83C5BE] focus:border-[#E29578] focus:ring-[#E29578]"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-[#E29578] hover:bg-[#D88469] text-[#006D77] font-semibold"
            >
              Create Job Posting
            </Button>
          </form>
        </div>
      </main>

      <footer className="bg-[#006D77] text-white py-4 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} Gamesafe. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
