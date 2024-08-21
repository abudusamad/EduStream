"use client";

import { Logo } from "@/app/(dashboard)/_components/logo";
import { ModeToggle } from "@/components/theme";

import { UserButton, useUser } from "@clerk/nextjs";

export const Navbar = () => {
  const { isSignedIn } = useUser();
  return (
    <div className="z-50 bg-background fixed top-0 flex items-center w-full p-2 px-8 border-b-[1px] shadow-md ">
      <Logo />
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
