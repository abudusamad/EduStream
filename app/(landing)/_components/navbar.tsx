"use client";

import { Logo } from "@/app/(dashboard)/_components/logo";
import { Spinner } from "@/components/spinner";
import { ModeToggle } from "@/components/theme";
import { Button } from "@/components/ui/button";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";

export const Navbar = () => {
	const { isSignedIn,  } = useUser();
	return (
		<div className="z-50 bg-background fixed top-0 flex items-center w-full p-6">
			<Logo />
			<div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
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
					<>
						<UserButton afterSignOutUrl="/" />
					</>
				)}
				<ModeToggle />
			</div>
		</div>
	);
};
