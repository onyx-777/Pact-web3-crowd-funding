import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { Logo } from "../global/logo";
import Link from "next/link";
import ConnectBtn from "../global/connect-button";

type Props = {
  logoClassName: string;
};

const Navbar = (props: Props) => {
  return (
    <div
      className={` z-[50] top-0 left-0 right-0 flex items-center justify-center text-black font-semibold text-3xl text-center md:text-4xl lg:text-7xl`}
    >
      <div className="bg-clip-text w-full text-transparent drop-shadow-2xl bg-gradient-to-b from-white/100 to-white/50">
        <div className="w-full flex justify-between items-center gap-4 md:px-10 md:mt-2">
          <div>
            <Logo className={props.logoClassName}
            />
          </div>
          <div className="flex justify-end text-xl items-center w-full gap-10 pr-6">
            <Link href={"/"} className="hidden md:block">
              Home
            </Link>
            <Link href={"/"} className="hidden md:block">
              Services
            </Link>
            <Link href={"/"} className="hidden md:block">
              About
            </Link>
            <Link href={"/"} className="hidden md:block">
              Contact
            </Link>
            <ConnectBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
