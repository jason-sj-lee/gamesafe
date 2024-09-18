import { Button } from "@/app/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/ui/card";
import { Badge } from "@/app/ui/badge";
import Link from "next/link";
import Logo from "@/app/ui/gamesafe-logo";
import { db } from "@/db";
import { jobPostTable } from "@/db/schema";

export default async function Page() {
  const jobListings = await db.select().from(jobPostTable);
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
              My Profile
            </Button>
            <Button variant="ghost" className="text-white hover:text-[#E29578]">
              Logout
            </Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-6">
          Available Job Listings
        </h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobListings.map((job) => (
            <Card key={job.id} className="bg-white">
              <CardHeader>
                <CardTitle>{job.title}</CardTitle>
                {/* <CardDescription>{job.organizer}</CardDescription> */}
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2 mb-2">
                  <Badge variant="secondary">{job.eventType}</Badge>
                  <span className="text-sm text-gray-500">{job.eventDate}</span>
                </div>
                <p className="text-sm mb-2">{job.description}</p>
                <div className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-sm text-gray-500">{job.location}</span>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="font-semibold text-[#006D77]">
                  {job.compensation}
                </span>
                <Button className="bg-[#E29578] hover:bg-[#D88469] text-[#006D77]">
                  Apply Now
                </Button>
              </CardFooter>
            </Card>
          ))}
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
