import { CreateJobForm } from "@/components/forms/create-job-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CreateJob() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-white flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <Card className="w-full max-w-2xl mx-auto">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">
              Create Job Posting
            </CardTitle>
            <CardDescription className="text-center">
              Fill in the details to create a new job posting
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CreateJobForm />
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
