import Link from "next/link";
import React from "react";
import { ImCross } from "react-icons/im";
interface props {
  showNav: boolean;
  closeNav: () => void;
}
export const MobileNav = ({ showNav, closeNav }: props) => {
  const mobileNavStyle = showNav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div
      className={`fixed ${mobileNavStyle} top-0 bottom-0 right-0 left-0 transition-all duration-500 h-[100vh] bg-[#000000e0] z-[1002]`}
    >
      <ImCross
        className="absolute top-4 right-4 w-5 h-5 text-white"
        onClick={closeNav}
      />
      <div className="bg-teal-700 w-[70%] h-[100%] transition-all duration-500 delay-200 flex flex-col gap-6 items-center justify-center text-3xl text-white">
        <Link href="/" className="hover:text-yellow-500">
          Home
        </Link>
        <Link href="/" className="hover:text-yellow-500">
          Menu
        </Link>
        <Link href="/" className="hover:text-yellow-500">
          Shop
        </Link>
        <Link href="/" className="hover:text-yellow-500">
          About
        </Link>
        <Link href="/" className="hover:text-yellow-500">
          Blog
        </Link>
      </div>
    </div>
  );
};
