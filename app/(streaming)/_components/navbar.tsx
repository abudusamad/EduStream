import Image from "next/image";
import Link from "next/link";
import { SignedIn, UserButton } from "@clerk/nextjs";
import MobileNav from "./MobileNavbar";
import { ModeToggle } from "@/components/theme";

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full px-6 py-4 lg:px-10 border-b-[2px]">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/logo.svg"
          width={32}
          height={32}
          alt="yoom logo"
          className="max-sm:size-10"
        />
        <p className="font-bold max-sm:hidden">EduStream</p>
      </Link>
      <div className="flex justify-between items-center gap-5">
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>
        <div>
          <ModeToggle />
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
