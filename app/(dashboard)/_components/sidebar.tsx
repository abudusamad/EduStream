
import { Logo } from "./logo";
import { SidebarRoutes } from "./sidebar-routes";

const Sidebar = () => {
	return (
		<div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
			<div className="py-6 flex items-center justify-center">
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
