import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import Image from "next/image";
import CartIcon from "./CartIcon";

const Navbar = () => {
  const user = false;
  return (
    <div className="bg-[#393646] h-12 p-4 flex items-center justify-between border-b-2 border-b-[#6D5D6E] uppercase md:h-24 lg:px-20 xl:px-40">
      {/* LEFT LINKS */}
      <div className="text-[#F4EEE0] hidden md:flex gap-4 flex-1">
        <Link href="/">Homepage</Link>
        <Link href="/products">Products</Link>
        <Link href="/contact">Contact</Link>
      </div>
      {/* LOGO */}
      <div className="text-[#F4EEE0] font-bold text-xl md:font-bold flex-1 md:text-center">
        <Link href="/">VAYUPAD CLAY</Link>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* RIGHT LINKS */}
      <div className="text-[#F4EEE0] hidden md:flex gap-4 items-center justify-end flex-1">
        <div className=" lg:static flex items-center gap-2 cursor-pointer bg-[#6D5D6E] px-1 rounded-md">
          <Image src="/phone.svg" alt="" width={20} height={20} />
          <span>123 456 78</span>
        </div>
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/orders">Orders</Link>
        )}
        <CartIcon/>
      </div>
    </div>
  );
};

export default Navbar;