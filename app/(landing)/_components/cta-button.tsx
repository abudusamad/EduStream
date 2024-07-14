"use client";

import { Button } from "@/components/ui/button";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

export function CTAButtons() {
  const isSignedIn = useUser();
  return (
    <div className="mt-10 grid items-center justify-center gap-x-6 gap-y-2 sm:flex">
      {!isSignedIn && (
        <>
          <SignInButton mode="modal">
            <Button variant="ghost" size="sm">
              Log In
            </Button>
          </SignInButton>
          <SignInButton mode="modal">
            <Button variant="ghost" size="sm">
              Get Started for Free
            </Button>
          </SignInButton>
        </>
      )}
      {isSignedIn && (
        <Link href={"/search"}>
          <Button variant="default" size="default" className="text-xl hover:scale-110 transition-transform duration-300 ease-in-out ">
            Browse Courses
          </Button>
        </Link>
      )}
    </div>
  );
}
