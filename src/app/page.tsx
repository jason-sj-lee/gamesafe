import Logo from "./ui/gamesafe-logo";
import Link from "next/link";
import { Button } from "@/app/ui/button";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#006D77] to-[#83C5BE]">
      <header className="bg-[#006D77] p-4 shadow-md ">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Logo className="w-10 h-10 text-[#E29578]" />
            <span className="text-white text-2xl font-bold">Gamesafe</span>
          </Link>
          <nav>
            <Link href="/login ">
              <Button
                variant="ghost"
                className="text-white hover:text-[#E29578] mr-2"
              >
                Login
              </Button>
            </Link>
            <Button className="bg-[#E29578] hover:bg-[#D88469] text-[#006D77]">
              Sign Up
            </Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 lg:pr-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              We've got you covered.
            </h1>
            <p className="text-xl md:text-2xl text-[#FFDDD2] mb-6">
              Connecting Athletes with Expert Care
            </p>
            <p className="text-lg text-[#FFDDD2] mb-8">
              Gamesafe brings certified athletic therapists to your sporting
              events, ensuring safety and peak performance.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-[#E29578] hover:bg-[#D88469] text-[#006D77] text-lg px-8 py-3">
                Find a Therapist
              </Button>
              <Button
                variant="outline"
                className="bg-transparent border-2 border-[#E29578] text-[#E29578] hover:bg-[#E29578] hover:text-[#006D77] text-lg px-8 py-3"
              >
                Post an Event
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <Image
              src="/hero-image.jpg"
              alt="Athletic therapist"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>

        <div className="mt-24 bg-[#006D77] rounded-lg shadow-xl p-8 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            How Gamesafe Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-[#E29578] rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-12 h-12 text-[#006D77]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Find</h3>
              <p className="text-[#FFDDD2] text-center">
                Search for certified athletic therapists in your area.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-[#E29578] rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-12 h-12 text-[#006D77]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Book</h3>
              <p className="text-[#FFDDD2] text-center">
                Schedule therapists for your upcoming sporting events.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-[#E29578] rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-12 h-12 text-[#006D77]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Play Safe
              </h3>
              <p className="text-[#FFDDD2] text-center">
                Enjoy your event with professional medical support on-site.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-[#006D77] text-white py-8 mt-24">
        <div className="container mx-auto px-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} Gamesafe. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
