import { Metadata } from "next";
import Navbar from "./_components/navbar";
import Sidebar from "./_components/Sidebar";

export const metadata: Metadata = {
  title: "Stream",
  description: "A workspace for your team, powered by Stream Chat and Clerk.",
};

interface StreamLayoutProps {
    children: React.ReactNode;
}


const StreamLayout = ({children}:StreamLayoutProps) => {
    return (
      <main className="relative">
        <Navbar />

        <div className="flex">
          <Sidebar />

          <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
            <div className="w-full">{children}</div>
          </section>
        </div>
      </main>
    );
}
 
export default StreamLayout;