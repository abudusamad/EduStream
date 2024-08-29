import Container from "@/components/container";
import RiveAnimation from "@/components/rive-animation";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { Poppins } from "next/font/google";
import Link from "next/link";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const GetStarted = () => (
  <section
    className={clsx(
      "get-started relative overflow-hidden pb-[307px] pt-[445px]",
      "xl:py-[230px] lg:pb-[156px] lg:pt-[179px] sm:pb-[110px] sm:pt-[116px]"
    )}
  >
    <RiveAnimation
      className="absolute left-1/2 top-[152px] aspect-[1.87365] w-[1703px] -translate-x-1/2 xl:-top-4 xl:w-[1432px] lg:w-[1126px] sm:-top-6 sm:w-[818px]"
      src="/animations/pages/home/get-started.riv"
      artboard="footer"
      intersectionRootMargin="0px 0px 600px 0px"
      animationRootMargin="0px 0px 300px 0px"
    />
    <Container className=" flex flex-col items-center justify-center">
      <h2
        className={clsx(
          "relative text-center font-title text-[68px] font-medium leading-[0.9] -tracking-[0.03em] ",
          "xl:text-[56px]  lg:text-[44px] sm:text-[32px]",
          font.className
        )}
      >
        Features of tomorrow.
        <br /> Available today.
      </h2>
      <Link href="/search">
        <Button className="text-2xl font-bold m-4 cursor-pointer">Get Started</Button>
      </Link>
    </Container>
  </section>
);

export default GetStarted;
