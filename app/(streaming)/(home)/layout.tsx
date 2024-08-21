import { Metadata } from "next";
import { Navbar } from "../_components/navbar";
import Sidebar from "../_components/Sidebar";


export const metadata: Metadata = {
  title: "Stream",
  description: "A workspace for your team, powered by Stream Chat and Clerk.",
};

interface StreamLayoutProps {
    children: React.ReactNode;
}


const StreamLayout = ({children}:StreamLayoutProps) => {
   return (
     <div className="h-full">
       <div className="h-[80px] max-lg:pl-28 fixed inset-y-0  w-full z-50">
         <Navbar />
       </div>
       <div className="hidden md:flex h-full w-56 max-lg:w-28 flex-col fixed inset-y-0 z-50 ">
         <Sidebar />
       </div>
       <main className="md:pl-56 max-lg:pl-28 pt-[80px] h-full ">{children}</main>
     </div>
   );
}
 
export default StreamLayout;