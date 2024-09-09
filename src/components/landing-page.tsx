import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Search,
  Shield,
  Calendar,
  MapPin,
  Users,
  Award,
  ClipboardCheck,
} from "lucide-react";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-white">
      <header className="p-6 flex justify-between items-center">
        <div className="flex items-center">
          <Shield className="h-8 w-8 text-green-600 mr-2" />
          <h1 className="text-2xl font-bold text-green-800">Gamesafe</h1>
        </div>
        <nav>
          <Button variant="ghost" className="mr-2 text-black">
            Login
          </Button>
          <Button className="bg-green-600 hover:bg-green-700 text-white">
            Sign Up
          </Button>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center mb-2 text-gray-900">
          We got you covered.
        </h2>
        <p className="text-xl text-center text-gray-600 mb-8">
          Connecting qualified athletic therapists with sporting events that
          need them.
        </p>

        <Tabs defaultValue="therapists" className="mb-12">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="therapists">
              For Athletic Therapists
            </TabsTrigger>
            <TabsTrigger value="organizers">For Event Organizers</TabsTrigger>
          </TabsList>
          <TabsContent value="therapists">
            <Card>
              <CardContent className="p-6">
                <form className="flex space-x-4">
                  <Input
                    placeholder="Position or keyword"
                    className="flex-grow"
                  />
                  <Input placeholder="Location" className="w-1/4" />
                  <Button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    <Search className="mr-2 h-4 w-4" /> Find Opportunities
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="organizers">
            <Card>
              <CardContent className="p-6">
                <form className="flex space-x-4">
                  <Input placeholder="Event type" className="flex-grow" />
                  <Input placeholder="Location" className="w-1/4" />
                  <Button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    <Search className="mr-2 h-4 w-4" /> Find Therapists
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-gray-900">
                <Shield className="inline-block mr-2 text-green-600" /> Safety
                First
              </CardTitle>
              <CardDescription className="text-gray-600">
                Ensure essential medical support at your sporting events.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-gray-900">
                <Calendar className="inline-block mr-2 text-green-600" />{" "}
                Flexible Scheduling
              </CardTitle>
              <CardDescription className="text-gray-600">
                Find assignments or therapists that match your needs and
                availability.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-gray-900">
                <MapPin className="inline-block mr-2 text-green-600" /> Local
                Connections
              </CardTitle>
              <CardDescription className="text-gray-600">
                Connect with nearby schools, universities, and private events.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              For Athletic Therapists
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <Award className="mr-2 text-green-600" /> Access a wide range of
                professional opportunities
              </li>
              <li className="flex items-center">
                <Calendar className="mr-2 text-green-600" /> Flexible scheduling
                to fit your lifestyle
              </li>
              <li className="flex items-center">
                <Users className="mr-2 text-green-600" /> Network with sports
                organizations and fellow professionals
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              For Event Organizers
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <Shield className="mr-2 text-green-600" /> Ensure participant
                safety with qualified professionals
              </li>
              <li className="flex items-center">
                <ClipboardCheck className="mr-2 text-green-600" /> Streamlined
                process for finding and booking therapists
              </li>
              <li className="flex items-center">
                <Award className="mr-2 text-green-600" /> Access to a network of
                certified athletic therapists
              </li>
            </ul>
          </div>
        </div>
      </main>

      <footer className="bg-green-800 text-white p-6 mt-12">
        <p className="text-center">
          &copy; {new Date().getFullYear()} Gamesafe. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
