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

// This would typically come from an API or database
const jobListings = [
  {
    id: 1,
    title: "Sports Therapist for Marathon",
    organizer: "City Runners Club",
    date: "2023-08-15",
    location: "Central Park, New York",
    description:
      "Seeking experienced sports therapist for our annual marathon. Must be able to provide pre and post-race therapy.",
    eventType: "Marathon",
    compensation: "$500",
  },
  {
    id: 2,
    title: "Physiotherapist for Football Tournament",
    organizer: "Regional Football Association",
    date: "2023-09-02",
    location: "Stamford Bridge, London",
    description:
      "Looking for a qualified physiotherapist to support players during our weekend tournament.",
    eventType: "Football",
    compensation: "£400",
  },
  {
    id: 3,
    title: "Athletic Therapist for Swimming Competition",
    organizer: "National Aquatics Center",
    date: "2023-07-20",
    location: "Olympic Pool, Sydney",
    description:
      "Need an athletic therapist specializing in aquatic sports for our national swimming competition.",
    eventType: "Swimming",
    compensation: "AU$600",
  },
  {
    id: 4,
    title: "Sports Massage Therapist for Cycling Event",
    organizer: "Tour de France Organization",
    date: "2023-07-01",
    location: "Various locations, France",
    description:
      "Seeking a sports massage therapist to join our medical team for the duration of the Tour de France.",
    eventType: "Cycling",
    compensation: "€5000",
  },
  {
    id: 5,
    title: "Rehabilitation Specialist for Tennis Tournament",
    organizer: "Wimbledon Championship",
    date: "2023-07-03",
    location: "All England Club, London",
    description:
      "Looking for a rehabilitation specialist to assist players during the Wimbledon Championship.",
    eventType: "Tennis",
    compensation: "£3000",
  },
  {
    id: 6,
    title: "Athletic Trainer for Basketball League",
    organizer: "National Basketball Association",
    date: "2023-10-15",
    location: "Various cities, USA",
    description:
      "Seeking an experienced athletic trainer to work with professional basketball players throughout the season.",
    eventType: "Basketball",
    compensation: "$80,000/year",
  },
];

export default function Page() {
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
                <CardDescription>{job.organizer}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2 mb-2">
                  <Badge variant="secondary">{job.eventType}</Badge>
                  <span className="text-sm text-gray-500">{job.date}</span>
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
