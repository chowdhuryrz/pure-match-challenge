import React from "react";
import Logo from "../assets/purematchlogo.png";
import { FaCoins } from "react-icons/fa";

function Navbar() {
  return (
    <div>
      <header className="flex justify-between items-center h-[96px] px-20 max-w-[1440px] mx-auto">
        <div className="flex items-center">
          <div className="flex items-center fixed">
            <img className="w-14 h-14" src={Logo} alt="Pure Match" />
            <h4 className="text-[#0089ff] font-medium ml-2 cursor-pointer">
              Pure Match
            </h4>
          </div>
        </div>
        <div className="flex space-x-11 relative items-center">
          <div className="flex text-[#93959d] font-semibold space-x-11 items-center mr-36">
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
            <li className="text-[#FF004A] flex items-center">
              <FaCoins className="mr-2" />
              Donate
            </li>
          </div>
          <button className="px-4 py-2 fixed right-10 z-10">
            Get PureMatch
          </button>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
