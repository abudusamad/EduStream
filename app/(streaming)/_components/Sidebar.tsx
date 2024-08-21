"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { sidebarLinks } from "@/constants";
import { Logo } from "@/app/(dashboard)/_components/logo";

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <section className="h-full border-r flex flex-col overflow-y-auto bg-white dark:bg-black shadow-sm">
      <div
        className="py-4 pl-6 flex items-center justify-start cursor-pointer"
        onClick={() => router.push("/dashboard")}
      >
        <Logo />
        <span className="pl-4 max-lg:hidden block">EduStream</span>
      </div>
      <div className="flex flex-1 flex-col gap-4">
        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);

          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn(
                "flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20 dark:hover:bg-slate-700 ",
                isActive &&
                  "text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700 dark:hover:bg-sky-700 dark:hover:text-sky-200 dark:bg-sky-700 dark:text-sky-200 "
              )}
            >
              <div className="flex items-center gap-x-2 py-4">
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  width={24}
                  height={24}
                />
              </div>

              <p
                className={cn(
                  "text-slate-900 max-lg:hidden dark:text-white",
                  isActive && "text-sky-700"
                )}
              >
                {item.label}
              </p>
              <div
                className={cn(
                  "ml-auto opacity-0 border-2 border-sky-700 h-full transition-all",
                  isActive && "opacity-100 dark:border-white"
                )}
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
