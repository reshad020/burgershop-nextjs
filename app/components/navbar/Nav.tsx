import React from "react";
import { FaBurger } from "react-icons/fa6";
import { VscThreeBars } from "react-icons/vsc";
interface props {
  openNav: () => void;
}
const Nav = ({ openNav }: props) => {
  return (
    <div className="h-[12vh]">
      <div className="flex w-[95%] h-[100%] justify-between items-center m-auto">
        <div className="flex space-x-1 sm:space-x-2 items-center ">
          <FaBurger className="text-orange-500 w-4 h-4 sm:w-8 sm:h-8" />
          <h2 className="text-xs font-semibold text-center sm:text-lg">
            BurgerHut
          </h2>
        </div>
        <div className="hidden lg:flex">
          <nav className="text-lg">
            <ul className="flex gap-4 items-center">
              <li>Home</li>
              <li>Shop</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
        <div className="flex gap-1 sm:gap-4 items-center">
          <button className="bg-gradient-to-r from-pink-500 to-orange-500 text-xs sm:text-sm text-white py-1 sm:py-2 px-2 sm:px-4 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out">
            Contact Us
          </button>
          <button className="bg-gray-700 text-white border text-xs sm:text-sm border-transparent py-1 sm:py-2 px-2 sm:px-4 rounded-3xl shadow-md hover:scale-105  hover:text-white hover:shadow-lg transition duration-300 ease-in-out">
            Order Now
          </button>
          <VscThreeBars
            className="text-orange-500 w-3 h-3 lg:hidden"
            onClick={openNav}
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
