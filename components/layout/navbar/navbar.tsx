"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "@/components/theme-toggle";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Team", href: "/team" },
    { name: "Service", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Testimonials", href: "/testimonials" },
  ];

  return (
    <header className="sticky top-0 bg-green-100 dark:bg-gray-900 transition-colors z-40">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-gray-900 dark:text-white"
        >
          AGENCY<span className="text-orange-500">SPHERE</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-bold transition-colors ${
                pathname === link.href
                  ? "text-green-700 dark:text-green-400"
                  : "text-gray-800 dark:text-gray-200 hover:text-green-700 dark:hover:text-green-400"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons & Toggle */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" size="sm">
            Login
          </Button>
          <Button size="sm">Register</Button>
          <ModeToggle />
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-2">
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="sm">☰</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 w-40">
              {navLinks.map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                  <Link
                    href={link.href}
                    className={`block w-full ${
                      pathname === link.href
                        ? "text-green-700 dark:text-green-400 font-bold"
                        : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem asChild>
                <Link href="/login">
                  <Button variant="outline" size="sm" className="w-full">
                    Login
                  </Button>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/register">
                  <Button size="sm" className="w-full">
                    Register
                  </Button>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
