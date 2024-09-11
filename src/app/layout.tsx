import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Gamesafe",
  description: "We've got you covered.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-gradient-to-b from-green-100 to-white">
          <header className="p-6 flex justify-between items-center bg-white shadow">
            <Link href="/" className="flex items-center">
              <Shield className="h-8 w-8 text-green-600 mr-2" />
              <h1 className="text-2xl font-bold text-green-800">Gamesafe</h1>
            </Link>
            <nav>
              <Button variant="ghost" className="mr-2 text-zinc-700">
                Login
              </Button>
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                Sign Up
              </Button>
            </nav>
          </header>

          {children}

          <footer className="bg-green-800 text-white p-6 mt-12">
            <p className="text-center">
              &copy; {new Date().getFullYear()} Gamesafe. All rights reserved.
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
