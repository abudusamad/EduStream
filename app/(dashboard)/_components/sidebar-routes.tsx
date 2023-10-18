"use client";
import { Compass, Layout } from "lucide-react";
import { usePathname } from "next/navigation";



const guestRoutes = [
    {

        icon: Layout,
        label: "Dashboard",
        href: "/"
    }, {
        icon: Compass,
        label: "Browse",
        href:"/search",
    },
];

export const SidebarRoutes = () => {
    const pathname = usePathname();
    return (
        <div>
            Routes
        </div>
    )
}