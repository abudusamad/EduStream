"use client";

import { useRouter } from "next/navigation";
import { Logo } from "./logo";
import { SidebarRoutes } from "./sidebar-routes";

const Sidebar = () => {
	const router = useRouter();
	return (
		<div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
			<div className="py-4  pl-6 flex items-center justify-start cursor-pointer" onClick={()=>router.push("/")}>
				<Logo />
				<span className="pl-4">
					Acess
				 </span>
			</div>
			<div className="flex flex-col w-full">
				<SidebarRoutes />
			</div>
		</div>
	);
};

export default Sidebar;
