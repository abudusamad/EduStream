"use client";

import { UserButton } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Link, LogOut } from "lucide-react";

export const NavbarRoutes = () => {
    const pathname = usePathname();
    const router = useRouter();

    const isTeacherPage = pathname?.startsWith("/teacher");
    const isPlayerPage = pathname?.includes("/chapter")
    return (
        <div className="flex items-center gap-x-2 ml-auto">
            {
                isPlayerPage || isTeacherPage ? (
                    <Button size="sm" variant="ghost">
                        <LogOut className="w-4 h-4 mr-2" />
                        Exit
                    </Button>
                ) : (
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