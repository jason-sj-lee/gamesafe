import { Button } from "@/app/ui/button";
import { Input } from "@/app/ui/input";
import { Label } from "@/app/ui/label";
import Link from "next/link";
import Logo from "@/app/ui/gamesafe-logo";
import { signup } from "./actions";

export default function SignupPage() {
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

          <form action={signup} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-[#006D77]">
                Username
              </Label>
              <Input
                id="username"
                name="username"
                type="text"
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
