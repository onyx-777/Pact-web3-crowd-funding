"use client";

import MaxWidthWrapper from "@/components/global/wrapper/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import Image from "next/image";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import Navbar from "@/components/navbar";
import headerSvg from "@/components/lottie/header.json";
import { Separator } from "@/components/ui/separator";
import { Logo } from "@/components/global/logo";
import HowItWorks from "@/components/home/how-it-works";
import Features from "@/components/home/features";
import Link from "next/link";
// import { client } from "./client";
import Loader from "@/icons/bitcoin-loader";

export default function Home() {
  // if (!client) {
  //   return (
  //     <div className="fixed inset-0 w-full h-full flex justify-center items-center">
  //       <div className="rounded-full w-fit animate-spin">
  //         <Loader />
  //       </div>
  //     </div>
  //   );
  // };

  return (
    <div className="relative w-full h-full flex flex-col gap-5 ">
      <div className="aspect-video w-full">
        <BackgroundGradientAnimation className="w-full absolute">
          {/* <Navbar logoClassName="fill-white"/> */}
          <div className="h-[110vh] md:h-screen pb-20 md:pb-0 absolute z-50 md:gap-5 inset-0 flex flex-col lg:flex-row mt-48 lg:mt-10 items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
            <div className="flex flex-col md:pl-20 -mt-2 w-full lg:w-1/2 flex-1 md:items-start justify-center items-center gap-5">
              <p className="text-[6rem] md:text-[8rem] mb-5">PACT</p>
              <p className="bg-clip-text text-2xl md:text-3xl w-full text-center md:text-left text-transparent drop-shadow-2xl hidden md:block bg-gradient-to-b from-white/80 to-white/20">
                &quot;Fund Your Vision, Securely&quot;
              </p>
              <p className="bg-clip-text text-xl md:text-3xl w-full text-center md:text-left text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
                Connect creators and donors to fuel innovation with{" "}
                <span className="text-white font-semibold">decentralized</span>{" "}
                funding.
              </p>
              <Link href={"/campaigns"} className="pointer-events-auto ">
                <Button className="text-xl shadow-xl text-primary bg-slate-900 hover:text-black font-semibold md:p-7 p-5">
                  Get Started
                </Button>
              </Link>
            </div>
            <div className="max-w-screen-md md:w-1/2 w-full flex-auto md:mt-10">
              <Lottie animationData={headerSvg} />
            </div>
          </div>
        </BackgroundGradientAnimation>
      </div>
      <div className="relative w-full text-center">
        <div className="relative w-full text-center">
          <div className="absolute top-[-30px] z-10 bg-white rounded-full left-1/2 transform -translate-x-1/2">
            <Logo className="fill-gray-600" />
          </div>
        </div>
        <Separator className="relative h-2 mt-4" />
      </div>
      <div>
        <HowItWorks />
      </div>
      <div className="relative w-full text-center">
        <div className="relative w-full text-center">
          <div className="absolute top-[-30px] z-10 bg-white rounded-full left-1/2 transform -translate-x-1/2">
            <Logo className="fill-gray-600" />
          </div>
        </div>
        <Separator className="relative h-2 mt-4" />
      </div>
      <div>
        <Features />
      </div>
    </div>
  );
}