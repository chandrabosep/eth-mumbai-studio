import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="px-1.5 max-w-screen-xl md:pr-6 md:w-11/12 w-full md:mx-auto flex justify-between items-center md:border border-theme-kaali rounded-full md:shadow-md md:shadow-[#707070]">
      <div className="w-full md:w-fit">
        <Image
          src="/logo.png"
          className="mx-auto py-1 "
          alt="logo"
          width={130}
          height={130}
        />
      </div>
      <div className="hidden md:flex md:w-[12%] ">
        <Link
          href="https://ethmumbai.in/"
          target="_blank"
          className="bg-theme-peeli w-full text-center py-2.5 text-sm font-semibold text-theme-kaali rounded-full"
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
}
