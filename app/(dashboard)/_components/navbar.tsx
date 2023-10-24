import { NavbarRoutes } from "@/components/navbar-route"
import { MobileSidebar } from "./mobile-sideabr"

export const Navbar = () => {
    return (
        <div className="p-4 border-b h-full shadow-sm bg-white flex items-center ">
            <MobileSidebar />
            <NavbarRoutes/>

        </div>
    )
}