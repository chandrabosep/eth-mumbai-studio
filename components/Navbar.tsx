import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="px-1 max-w-screen-2xl shadow-none md:w-11/12 md:shadow-[#707070] md:shadow-md w-full md:mx-auto flex justify-between items-center rounded-full md:border md:border-theme-kaali/30">
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
        <Link
          href="/apply"
          className="bg-theme-peeli px-7 py-2.5 text-xl font-semibold text-theme-kaali rounded-full"
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
}
