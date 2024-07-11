"use client";

import { Button } from "@/components/ui/button";
import { useClerk, useSignIn, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export const Heading = () => {
  const clerk = useClerk();
	const router = useRouter();
	const user = useUser();
  return (
    <div className="relative h-full w-full bg-no-repeat bg-cover">
      {/* <div
				className=" absolute inset-0 bg-cover"
				style={{
					backgroundImage:
						"url(https://cdn.elearningindustry.com/wp-content/uploads/2017/03/6-elearning-strategies-to-develop-deeper-learning-skills-e1489405475782.jpeg)",

					opacity: 0.1,
				}}
			/> */}
      <div className="md:pl-20  md:grid grid-cols-3 md:max-w-7xl pt-40 ">
        <div className="flex flex-col col-span-2 space-y-9">
          <h1 className="text-xl sm:text-5xl md:text-6xl font-bold uppercase ">
            Efficent school, learning & school management
            <span className="font-bold text-blue-500  dark:text-rose-700 underline pl-1">
              Solution
            </span>
          </h1>
          <h3 className="text-2xl font-semibold md:text-3xl">
            Ensuring Excellence and Compliance in Your Educational Environment
          </h3>
          <p className="md:text-lg text-sm  font-light">
            Our mission is to help educational institutions digitize and
            simplify all processes from enrollment to alumni. Embrace a new
            world of efficiency where back office, educators, students, and
            parents converge seamlessly, streamlining communications,
            administration, operations, and academics in a single, dynamic hub.
            Join us and discover new levels of efficiency.
          </p>
          <div className="flex space-x-4">
            <Button
              size="lg"
              className=" bg-blue-500  text-white dark:bg-rose-700 text-lg font-semibold p-4 opacity-100 hover:none"
            >
              Talk to An Expertise
            </Button>
            {user ? (
              <Button
                size="lg"
                variant="outline"
                className="border-2 outline-4 cursor-pointer"
                onClick={() => clerk.openSignIn({})}
              >
                Login
              </Button>
            ) : (
              <Button
                size="lg"
                variant="outline"
                className="border-2 outline-4 cursor-pointer"
                onClick={() => router.push("/dashboard")}
              >
                Goto Courses
              </Button>
            )}
          </div>
        </div>
        <p className="text-lg">The best way to manage your projects</p>
      </div>

      <svg
        className="hidden dark:block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#ff0000"
          fill-opacity="10"
          d="M0,128L80,122.7C160,117,320,107,480,85.3C640,64,800,32,960,21.3C1120,11,1280,21,1360,26.7L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <svg
        className="dark:hidden"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#0099ff"
          fill-opacity="10"
          d="M0,128L80,122.7C160,117,320,107,480,85.3C640,64,800,32,960,21.3C1120,11,1280,21,1360,26.7L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};
