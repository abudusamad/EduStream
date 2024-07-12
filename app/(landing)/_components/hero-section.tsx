"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export const HeroSection = () => {
	const router = useRouter();
	return (
    <section className="text-center p-12 bg-gray-100 w-full">
      <h1 className="text-4xl font-bold mb-4">
        Find The Best Course To Grow Your Skills
      </h1>
      <p className="mb-6">
        Grow your skills with our online courses with expert tutor from anywhere
        anytime.
			</p>
			<Button
				variant="outline"
				size="lg"
				onClick={()=>router.push("/search")}
			>
				Browse Courses
			</Button>
        </section>
  );
};