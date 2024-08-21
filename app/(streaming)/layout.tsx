import { Metadata } from "next";
import Sidebar from "./_components/Sidebar";
import { Navbar } from "./_components/navbar";

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
       <div className="h-[80px] md:pl-[265px] fixed inset-y-0  w-full z-50">
         <Navbar />
       </div>
       <div className="hidden md:flex h-full w-72 flex-col fixed inset-y-0 z-50 ">
         <Sidebar />
       </div>
       <main className="md:pl-72 pl-9 pt-[80px] h-full">{children}</main>
     </div>
   );
}
 
export default StreamLayout;