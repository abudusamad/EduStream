"use client";

import { Button } from "@/components/ui/button";
import { useClerk, useSignIn, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export const Heading = () => {
  const clerk = useClerk();
	const router = useRouter();
	const user = useUser();
  return (
    <section className="text-center py-12 w-full">
      <h2 className="text-2xl font-bold mb-4">Our Success</h2>
      <div className="flex justify-around">
        <div>
          <div className="text-3xl font-bold">15K+</div>
          <div>Students</div>
        </div>
        <div>
          <div className="text-3xl font-bold">85%</div>
          <div>Total Success</div>
        </div>
        <div>
          <div className="text-3xl font-bold">100+</div>
          <div>Expert Instructors</div>
        </div>
        <div>
          <div className="text-3xl font-bold">150+</div>
          <div>Total Courses</div>
        </div>
      </div>
    </section>
  );
};
