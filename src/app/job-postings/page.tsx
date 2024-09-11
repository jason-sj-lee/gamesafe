"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  MapPin,
  DollarSign,
  Clock,
  Search,
  Filter,
} from "lucide-react";

// Mock data for job postings
const mockJobs = [
  {
    id: 1,
    title: "Athletic Therapist for High School Football",
    location: "Springfield, IL",
    date: "2023-07-15",
    salary: "$200 per game",
    type: "Part-time",
    description:
      "Seeking a certified athletic therapist to provide medical support for our high school football team during home games.",
  },
  {
    id: 2,
    title: "University Basketball Tournament Therapist",
    location: "Chicago, IL",
    date: "2023-08-01",
    salary: "$1000 for the weekend",
    type: "Short-term",
    description:
      "Looking for an experienced athletic therapist to cover a weekend-long university basketball tournament.",
  },
  // Add more mock job postings as needed
];

export default function JobPostings() {
  const [jobs, setJobs] = useState(mockJobs);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const filtered = mockJobs.filter(
      (job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setJobs(filtered);
  };

  const handleFilter = (value: string) => {
    setFilterType(value);
    if (value === "all") {
      setJobs(mockJobs);
    } else {
      const filtered = mockJobs.filter(
        (job) => job.type.toLowerCase() === value
      );
      setJobs(filtered);
    }
  };

  if (!isClient) {
    return null; // or a loading spinner
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-green-100 to-white">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-black">
          Job Postings
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <form
            onSubmit={handleSearch}
            className="flex w-full md:w-auto mb-4 md:mb-0"
          >
            <Input
              type="text"
              placeholder="Search jobs or locations"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="mr-2"
            />
            <Button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <Search className="mr-2 h-4 w-4" /> Search
            </Button>
          </form>
          <div className="flex items-center">
            <Filter className="mr-2 h-4 w-4 text-green-600" />
            <Select value={filterType} onValueChange={handleFilter}>
              <SelectTrigger className="w-[180px] border-green-300 focus:ring-green-500">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="full-time">Full-time</SelectItem>
                <SelectItem value="part-time">Part-time</SelectItem>
                <SelectItem value="short-term">Short-term</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <Card key={job.id} className="border-green-200 shadow-md">
              <CardHeader className="bg-green-50">
                <CardTitle className="text-black">{job.title}</CardTitle>
                <CardDescription className="text-black">
                  <div className="flex items-center">
                    <MapPin className="mr-1 h-4 w-4 text-green-600" />{" "}
                    {job.location}
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="secondary"
                    className="flex items-center bg-green-100 text-green-800"
                  >
                    <Calendar className="mr-1 h-4 w-4" /> {job.date}
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="flex items-center bg-green-100 text-green-800"
                  >
                    <DollarSign className="mr-1 h-4 w-4" /> {job.salary}
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="flex items-center bg-green-100 text-green-800"
                  >
                    <Clock className="mr-1 h-4 w-4" /> {job.type}
                  </Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Apply Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Button className="bg-green-600 hover:bg-green-700 text-white">
            Post a New Job
          </Button>
        </div>
      </main>
    </div>
  );
}
