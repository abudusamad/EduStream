"use client";

import { UserButton } from "@clerk/nextjs";
<<<<<<< HEAD
<<<<<<< HEAD
import { Link, LogOut } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

export const NavbarRoutes = () => {
	const pathname = usePathname();

	const isTeacherPage = pathname?.startsWith("/teacher");
	const isPlayerPage = pathname?.includes("/chapter");
	return (
		<div className="flex items-center gap-x-2 ml-auto">
			{isPlayerPage || isTeacherPage ? (
                <Link href="/">
				<Button size="sm" variant="ghost">
					<LogOut className="w-4 h-4 mr-2" />
					Exit
				</Button>
                </Link>
			) : (
				<Link href="/teacher/courses">
					<Button size="sm" variant="ghost">
						Teacher mode
					</Button>
				</Link>
			)}
			<UserButton afterSignOutUrl="/" />
		</div>
	);
};
=======

export const NavbarRoutes = () => {
    return (<div className="flex gap-x-2 ml-auto">
        <UserButton/>
    
</div>)
}
>>>>>>> bd4e98f (working on the navbar)
=======
import { LogOut } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";

export const NavbarRoutes = () => {
	const pathname = usePathname();

	const isTeacherPage = pathname?.startsWith("/");
	const isPlayerPage = pathname?.includes("/chapter");

	return (
		<div className="flex gap-x-2 ml-auto">
			{isTeacherPage || isPlayerPage ? (
				<Link href="/">
					<Button size="sm" variant="ghost">
						<LogOut className="w-4 h-4 mr-2" />
						Exit
					</Button>
				</Link>
			) : (
				<Link href="/teacher/courses">
					<Button size="sm" variant="ghost">
						Teacher mode
					</Button>
				</Link>
			)}
			<UserButton />
		</div>
	);
};
>>>>>>> dd2e269 (Finished with the courses and the anlytics page)
