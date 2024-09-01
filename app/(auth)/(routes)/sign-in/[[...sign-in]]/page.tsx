import { SignIn, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full lg:flex flex-col items-center lg:grid-cols-2">
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
      <div className="h-full hidden lg:flex items-center justify-center">
        <Image src="/logo.svg" alt="Sign in" width={100} height={100} />
      </div>
    </section>
  );
}
