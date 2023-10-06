import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#393646] h-20 md:h-24 p-4 lg:px-20 xl:px-40  flex items-center justify-between">
      <Link href="/" className=" text-[#F4EEE0] font-bold text-xl">VAYUPAD CLAY</Link>
      <p className="text-[#F4EEE0]" >© ALL RIGHTS RESERVED.</p>
    </div>
  );
};

export default Footer;