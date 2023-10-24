"use client";

import { UserButton } from "@clerk/nextjs"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";


export const NavbarRoute = () => {
	const pathname = usePathname();

	const isTeacherPage = pathname?.startsWith("/teacher");
	const isCoursePage = pathname?.includes("/courses");
	return (
		<div className="flex gap-x-2 ml-auto">
			{
				isTeacherPage || isCoursePage ?(
					<Link href="/">
						<Button size="sm" variant="ghost">
							<LogOut className="w-4 h-4 mr-2" />
							Exit
						</Button>
					</Link>
				):(
			
			<Link href="/teacher/courses">
				<Button size="sm" variant="ghost">
					Teacher mode
				</Button>
			</Link>
				)
			}
			<UserButton
				afterSignOutUrl="/"
			/>

		</div>
	)
}