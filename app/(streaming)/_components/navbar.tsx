"use client";

import { ModeToggle } from "@/components/theme";

import { UserButton, useUser } from "@clerk/nextjs";
import MobileNav from "./MobileNavbar";

export const Navbar = () => {
  const { isSignedIn } = useUser();
  return (
    <div className="z-50 bg-background fixed top-0 flex items-center w-full p-2 px-8 border-b-[1px] shadow-md ">
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        {isSignedIn && (
          <>
            <UserButton afterSignOutUrl="/dashboard" />
          </>
        )}
        <ModeToggle />
      </div>
    </div>
  );
};
