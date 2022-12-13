import React from "react";
import Logo from "../assets/purematchlogo.png";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { AiFillLinkedin, AiOutlineCopyright } from "react-icons/ai";

function Footer() {
  return (
    <div>
      <footer className="w-full grid grid-cols-7 h-[400px] p-14">
        <div className="col-span-3 ml-10">
          <div className="flex flex-col text-[#0089FF] space-y-10">
            <div className="flex items-center">
              <img src={Logo} alt="" className="w-20 h-20" />
              <h3 className="text-[30px] font-medium">Pure Match</h3>
            </div>
            <span className="flex items-center">
              <span>
                <AiOutlineCopyright className="mr-2" />
              </span>
              2022 Pure Match
            </span>
            <div className="flex space-x-5">
              <FaFacebook className="w-7 h-7 cursor-pointer" />
              <FaTwitter className="w-7 h-7 cursor-pointer" />
              <FaInstagram className="w-7 h-7 cursor-pointer" />
              <AiFillLinkedin className="w-7 h-7 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <h5 className="text-[#0089FF]">About</h5>
          <p className="text-base mb-8 leading-5">
            Pure Match is a free networking app for like-minded followers of
            Christ to connect, date, and socialize.
          </p>

          <h5 className="text-[#0089FF]">Our Mission</h5>
          <p className="text-base leading-5">
            We're on a mission to bring true followers of Christ together in a
            safe, fun, and innovative new networking app! And to transform
            single-hood into the exciting, enriching, and <span>FUN</span>{" "}
            seasion it was meant to be.
          </p>
        </div>
        <div className="col-span-2 items-center ml-32 space-y-1">
          <h5 className="text-[#0089FF]">Navigation</h5>
          <li className="text-base font-medium">Home</li>
          <li className="text-base font-medium">About</li>
          <li className="text-base font-medium">Blog</li>
          <li className="text-base font-medium">Contact</li>
          <li className="text-base font-medium">Donate</li>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
