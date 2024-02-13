import { Logo } from "@/app/(dashboard)/_components/logo"

export const Navbar = () => {
    return (
        <div className="z-50 bg-background fixed top-0 flex items-center w-full p-6">
            <Logo />
        </div>
    )
}