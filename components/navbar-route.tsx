"use client";

<<<<<<< HEAD
import { UserButton } from "@clerk/nextjs"
import Link from "next/link";
=======
import { UserButton } from "@clerk/nextjs";
import { LogOut} from "lucide-react";
>>>>>>> 615bf4af3c9c9908287fdde42ccc75cacc4d50bb
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";

<<<<<<< HEAD

export const NavbarRoute = () => {
=======
import Link from "next/link"


export const NavbarRoutes = () => {
>>>>>>> 615bf4af3c9c9908287fdde42ccc75cacc4d50bb
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
<<<<<<< HEAD
	)
}
=======
	);
};

>>>>>>> 615bf4af3c9c9908287fdde42ccc75cacc4d50bb
