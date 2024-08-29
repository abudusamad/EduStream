import Container from "@/components/container";
// import PauseableVideo from "components/shared/pauseable-video";
import Link from "next/link";
import PauseableVideo from "./pause-video";

import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

const Multitenancy = () => (
  <section className=" mt-8 overflow-hidden xl:-mt-9 lg:-mt-7 md:-mt-2 sm:mt-0">
    <Container className="relative z-10 xl:max-w-[704px] lg:pl-24">
      <h2
        className={cn(
          "relative text-center font-title text-[68px] font-medium leading-[0.9] -tracking-[0.03em] ",
          "xl:text-[56px]  lg:text-[44px] sm:text-[32px] m-3",
          font.className
        )}
      >
        Thousands of Courses
        <br />
        Availale Here
      </h2>
    </Container>

   
    <PauseableVideo
      className="mt-[54px] xl:mt-11 lg:mt-10 sm:mt-6"
      videoClassName="max-w-[1920px] xl:max-w-[1380px] lg:max-w-[1150px] sm:max-w-[790px] -translate-x-1/2 left-1/2"
      height={474}
      width={1920}
    >
      <source
        src="/videos/pages/home/next-gen.mp4?updated=20240513193559"
        type="video/mp4"
      />
      <source
        src="/videos/pages/home/next-gen.webm?updated=20240513193559"
        type="video/webm"
      />
    </PauseableVideo>
  </section>
);

export default Multitenancy;
