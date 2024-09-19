"use client";

import { Button } from "@/app//ui/button";
import { Input } from "@/app/ui/input";
import { Label } from "@/app/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/ui/select";
import { Textarea } from "@/app/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/ui/tabs";
import Link from "next/link";
import Logo from "@/app/ui/gamesafe-logo";
import { useState } from "react";
import { signup } from "./actions";

export default function SignupPage() {
  const [accountType, setAccountType] = useState<"therapist" | "organizer">(
    "therapist"
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append("accountType", accountType);
    // Add your form submission logic here
    console.log(Object.fromEntries(formData));
    await signup(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#006D77] to-[#83C5BE] flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Link href="/" className="inline-flex items-center space-x-2">
            <Logo className="w-10 h-10 text-[#E29578]" />
            <span className="text-white text-3xl font-bold">Gamesafe</span>
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-2xl font-bold text-[#006D77] mb-6 text-center">
            Create an account
          </h1>

          <Tabs
            defaultValue="therapist"
            className="mb-6"
            onValueChange={(value) =>
              setAccountType(value as "therapist" | "organizer")
            }
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="therapist">Athletic Therapist</TabsTrigger>
              <TabsTrigger value="organizer">Event Organizer</TabsTrigger>
            </TabsList>
          </Tabs>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="firstname" className="text-[#006D77]">
                First Name
              </Label>
              <Input
                id="firstname"
                name="firstname"
                type="text"
                required
                className="border-[#83C5BE] focus:border-[#E29578] focus:ring-[#E29578]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastname" className="text-[#006D77]">
                Last Name
              </Label>
              <Input
                id="lastname"
                name="lastname"
                type="text"
                required
                className="border-[#83C5BE] focus:border-[#E29578] focus:ring-[#E29578]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#006D77]">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                className="border-[#83C5BE] focus:border-[#E29578] focus:ring-[#E29578]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-[#006D77]">
                Password
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                required
                className="border-[#83C5BE] focus:border-[#E29578] focus:ring-[#E29578]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirm" className="text-[#006D77]">
                Confirm Password
              </Label>
              <Input
                id="confirm"
                name="confirm"
                type="password"
                required
                className="border-[#83C5BE] focus:border-[#E29578] focus:ring-[#E29578]"
              />
            </div>

            {accountType === "therapist" && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="certification" className="text-[#006D77]">
                    Certification Number
                  </Label>
                  <Input
                    id="certification"
                    name="certification"
                    type="text"
                    required
                    className="border-[#83C5BE] focus:border-[#E29578] focus:ring-[#E29578]"
                  />
                </div>
              </>
            )}

            {accountType === "organizer" && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="organization" className="text-[#006D77]">
                    Organization Name
                  </Label>
                  <Input
                    id="organization"
                    name="organization"
                    type="text"
                    required
                    className="border-[#83C5BE] focus:border-[#E29578] focus:ring-[#E29578]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="eventTypes" className="text-[#006D77]">
                    Event Types
                  </Label>
                  <Textarea
                    id="eventTypes"
                    name="eventTypes"
                    placeholder="e.g., Marathons, Football tournaments, etc."
                    className="border-[#83C5BE] focus:border-[#E29578] focus:ring-[#E29578]"
                  />
                </div>
              </>
            )}

            <Button
              type="submit"
              className="w-full bg-[#E29578] hover:bg-[#D88469] text-[#006D77] font-semibold"
            >
              Sign up
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-[#006D77]">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-[#E29578] hover:underline font-semibold"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>

      <footer className="mt-8 text-center text-white text-sm">
        <p>&copy; {new Date().getFullYear()} Gamesafe. All rights reserved.</p>
      </footer>
    </div>
  );
}
