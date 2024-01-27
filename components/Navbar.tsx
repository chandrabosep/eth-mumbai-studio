import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <div className="px-1 max-w-screen-2xl md:w-11/12 shadow-[#707070] shadow-md w-full md:mx-auto flex justify-between items-center rounded-full md:border-2 border-theme-kaali">
      <div className="w-full md:w-fit">
        <Image
          src="/logo.png"
          className="mx-auto "
          alt="logo"
          width={180}
          height={180}
        />
      </div>
      <div className="hidden md:flex md:w-2/12">
        <Button className="bg-theme-peeli text-xl font-semibold text-theme-kaali rounded-full">
          Apply Now
        </Button>
      </div>
    </div>
  );
}
