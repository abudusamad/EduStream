"use client";

import Image from "next/image";

import { SquaresPattern } from "./square-patterns";
import { CTAButtons } from "./cta-button";
import { ChevronRightIcon } from "lucide-react";

import { Poppins, Roboto } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { LogoCloud } from "./logo-cloud";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export function HeroText(props: { children: React.ReactNode }) {
  return (
    <h1
      className={cn(
        "text-4xl text-gray-900 dark:text-gray-50 sm:text-6xl",
        font.className
      )}
      {...props}
    />
  );
}

export function HeroSubtitle(props: { children: React.ReactNode }) {
  return (
    <p
      className={cn(
        "mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400 ",
        roboto.className
      )}
      {...props}
    />
  );
}

export function Hero(props: {
  title?: string;
  subtitle?: string;
  image?: string;
}) {
  return (
    <div className="relative">
      <SquaresPattern />
      <div className="pt-24 sm:pb-12 sm:pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* <HeroTag /> */}
          <div className="mb-10">
            <ProductHuntBadge />
          </div>

          <div className="mx-auto max-w-2xl text-center">
            <HeroText>Find The Best Course To Grow Your Skills</HeroText>
            <HeroSubtitle>
              {props.subtitle || (
                <>
                  Grow your skills with our online courses with expert tutor
                  from anywhere anytime.
                  <br />
                  Start learning with us for free.
                </>
              )}
            </HeroSubtitle>
            <CTAButtons />
          </div>
          <LogoCloud />
        </div>
      </div>
    </div>
  );
}

function HeroTag() {
  return (
    <div className="mb-8 flex justify-center bg-white">
      <div className="relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
        <a
          href="/product-hunt"
          className="flex items-center gap-x-1 font-semibold text-blue-600"
        >
          <span className="absolute inset-0" aria-hidden="true" />
          We are live on Product Hunt!
          <ChevronRightIcon
            className="-mr-2 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </a>
      </div>
    </div>
  );
}

function ProductHuntBadge() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 sm:flex-row">
      <Link href="#" target="_blank">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=431438&theme=neutral&period=daily"
          alt="Inbox&#0032;Zero - Clean&#0032;up&#0032;your&#0032;inbox&#0032;in&#0032;minutes&#0044;&#0032;open&#0032;source | Product Hunt"
          className="h-[54px] w-[250px]"
          width="250"
          height="54"
        />
      </Link>
    </div>
  );
}
