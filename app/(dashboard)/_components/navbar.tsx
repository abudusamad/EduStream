import { NavbarRoutes } from "@/components/navbar-routes"
import { MobileSidebar } from "./mobile-sidebar"

export const Navbar = () => {
    return (
        <div className="p-4 border-b flex items-center bg-white dark:bg-black  shadow-sm h-full w-full ">
            <MobileSidebar/>
            <NavbarRoutes />
        </div>
    )
}