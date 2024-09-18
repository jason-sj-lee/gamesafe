import Link from "next/link";
import Logo from "./gamesafe-logo";
import type { User } from "lucia";
import { Button } from "./button";
import { logout } from "../actions";

export function NavBar({ user }: { user: User } | { user: null }) {
  const authenticatedNavItems = [{ name: "Profile", href: "/profile" }];

  const notAuthenticatedNavItems = [
    { name: "Log in", href: "/login" },
    { name: "Sign up", href: "/signup" },
  ];

  const navItems = user ? authenticatedNavItems : notAuthenticatedNavItems;

  return (
    <header className="bg-[#006D77] p-4 shadow-md">
      <div className="flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Logo className="w-10 h-10 text-[#E29578]" />
          <span className="text-white text-2xl font-bold">Gamesafe</span>
        </Link>
        <nav className="flex flex-row">
          {navItems.map((item) => (
            <Link href={item.href}>
              <Button
                variant="ghost"
                className="text-white hover:text-[#E29578] mr-2"
              >
                {item.name}
              </Button>
            </Link>
          ))}
          {user && (
            <form action={logout}>
              <Button
                variant="ghost"
                className="text-white hover:text-[#E29578]"
              >
                Logout
              </Button>
            </form>
          )}
        </nav>
      </div>
    </header>
  );
}
