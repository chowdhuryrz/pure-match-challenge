import React from "react";
import {
  HiOutlineArrowLongRight,
  HiOutlineArrowLongLeft,
} from "react-icons/hi2";
import { ImQuotesLeft } from "react-icons/im";
import Couple from "../assets/couple.png";
import Rectangle3 from "../assets/rectangle3.png";
import Ellipse2 from "../assets/ellipse2.png";

function Testimonials() {
  return (
    <div className="w-full h-screen bg-[#0089ff] p-20 text-white">
      <header className="flex justify-between items-center mx-10">
        <h4 className="bg-white rounded-sm text-[#0089ff] uppercase py-1 px-3">
          Success Stories
        </h4>
        <div className="flex text-white space-x-8">
          <HiOutlineArrowLongLeft className="h-10 w-10 cursor-pointer" />
          <HiOutlineArrowLongRight className="h-10 w-10 cursor-pointer" />
        </div>
      </header>
      <main className="flex justify-between relative">
        <div className="flex justify-around absolute space-x-2 -bottom-8 left-12">
          <div className="w-[40px] h-2 rounded-lg bg-white" />
          <div className="w-2 h-2 rounded-full bg-[#73BEFF]" />
          <div className="w-2 h-2 rounded-full bg-[#73BEFF] " />
        </div>

        {/* Left */}
        <div className="max-w-[730px] max-h-[400px] ml-24 mt-20">
          <span className="">
            <ImQuotesLeft className="h-10 w-10" />
          </span>
          <h4 className="text-[28px] mt-4">
            He started a conversation with me and our <br /> friendship grew so
            fast! Now we’re dating, which <br /> is wild to me because I got the
            app just to <br />
            get to know people. I had no idea that God would bless <br /> me
            with such a cool boyfriend! Super thankful for <br /> this app and
            definitely encourage people to try it <br /> out because you never
            know how God could <br />
            surprise you!
          </h4>
          <div className="flex items-center mt-5">
            <hr className="border-t-2 w-[41px]" />
            <h4 className="font-light ml-3">Chloe and George</h4>
          </div>
        </div>
        {/* Right */}
        <div className="relative flex mx-auto mt-20">
          <img src={Couple} alt="" className="z-10" />
          <img
            src={Rectangle3}
            alt=""
            className="absolute -bottom-12 left-3 z-[11]"
          />
          <img src={Ellipse2} alt="" className="absolute -right-10 -top-12" />
        </div>
      </main>
    </div>
  );
}

export default Testimonials;
