"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  User,
  Mail,
  Lock,
  Briefcase,
  GraduationCap,
  Building,
} from "lucide-react";
import Link from "next/link";

export default function Signup() {
  const [accountType, setAccountType] = useState("therapist");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [certification, setCertification] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [organizationType, setOrganizationType] = useState("");
  const [organizationName, setOrganizationName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = {
      accountType,
      name,
      email,
      password,
      ...(accountType === "therapist"
        ? { certification, specialization }
        : { organizationType, organizationName }),
    };
    console.log("Signup attempt with:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-white flex flex-col">
      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">
              Create an account
            </CardTitle>
            <CardDescription className="text-center">
              Choose your account type and enter your details
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs
              defaultValue="therapist"
              onValueChange={setAccountType}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="therapist">Athletic Therapist</TabsTrigger>
                <TabsTrigger value="organizer">Event Organizer</TabsTrigger>
              </TabsList>
              <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      placeholder="m@example.com"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                <TabsContent value="therapist" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="certification">Certification</Label>
                    <div className="relative">
                      <GraduationCap className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="certification"
                        placeholder="e.g. Certified Athletic Therapist"
                        value={certification}
                        onChange={(e) => setCertification(e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="specialization">Specialization</Label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="specialization"
                        placeholder="e.g. Sports Injuries"
                        value={specialization}
                        onChange={(e) => setSpecialization(e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="organizer" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="organizationType">Organization Type</Label>
                    <Select
                      value={organizationType}
                      onValueChange={setOrganizationType}
                      required
                    >
                      <SelectTrigger id="organizationType" className="pl-10">
                        <Building className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <SelectValue placeholder="Select organization type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="school">School</SelectItem>
                        <SelectItem value="university">University</SelectItem>
                        <SelectItem value="sportsClub">Sports Club</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="organizationName">Organization Name</Label>
                    <div className="relative">
                      <Building className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="organizationName"
                        placeholder="e.g. Springfield High School"
                        value={organizationName}
                        onChange={(e) => setOrganizationName(e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                </TabsContent>
                <Button
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  type="submit"
                >
                  Sign Up
                </Button>
              </form>
            </Tabs>
          </CardContent>
          <CardFooter>
            <div className="text-sm text-gray-600 text-center w-full">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-green-600 hover:bg-green-700 font-semibold"
              >
                Log in
              </Link>
            </div>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
