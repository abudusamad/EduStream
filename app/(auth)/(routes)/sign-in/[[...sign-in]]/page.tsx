import { SignIn, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full lg:flex flex-col items-center lg:grid-cols-2 border-r">
        <div className="text-center space-y-4 pt-16">
          <h1 className="font-bold text-3xl">Welcome Back!</h1>
          <p className="text-base text-[#7E8CA0]">
            Log in or Create account to get back to your dashboard!
          </p>
        </div>
        <div className="flex items-center justify-center mt-8">
          <ClerkLoaded>
            <SignIn path="/sign-in" />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader className="animate-spin w-6 h-6 text-muted-foreground" />
          </ClerkLoading>
        </div>
      </div>
      <div className="h-full hidden lg:flex flex-col items-center justify-center text-center space-y-4 pt-16">
        <div className="flex items-center justify-between">
          <Image src="/logo.svg" alt="Sign in" width={50} height={50} />
          <span className="font-bold text-2xl">EduStream</span>
        </div>
        <div>
          <Image src="/sign-n.jpg" alt="Sign in" width={700} height={800} />
        </div>
      </div>
    </section>
  );
}
