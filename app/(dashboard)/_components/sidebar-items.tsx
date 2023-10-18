"use client"
import { LucideIcon } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"

interface SidebarItemProps{
    icon: LucideIcon;
    label: string;
    href: string;
};

export const SidebarItem = ({
    icon: Icon,
    label,
    href,
}: SidebarItemProps) => {
    const pathname = usePathname();
    const router = useRouter();
    const isActive = (pathname === "/" && href === "/") ||
        pathname === href ||
        pathname?.startsWith(`${href}/`)
    
    const onClick = () => {
        router.push(href);
    }
    return (
        <button
            onClick={onclick}
            type="button"
            className={cn(
                "flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20",isActive && "text"
            )}
        >

        </button>
    )
}