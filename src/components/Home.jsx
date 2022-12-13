import React from "react";
import MobileStoreButton from "react-mobile-store-button";
import Hero1 from "../assets/hero1.png";
import Hero2 from "../assets/hero2.png";

function Home() {
  return (
    <div>
      <main className="w-full h-screen flex">
        {/* Left Section */}
        <section className="max-w-[440px] ml-56 mt-16 space-y-7">
          <h1 className="text-[#0089ff]">Connect, Date, and Socialize.</h1>
          <p className="">
            <span>Pure Match</span> is on a mission to bring like-minded
            followers of Christ together in a safe, innovative, and{" "}
            <span>FREE</span> networking app! Join us as we transform single
            hood into the exciting enriching, <span>FUN</span> season it was
            meant to be.
          </p>
          <button className="py-3 px-6 text-xl shadow-xl">
            Support the app
          </button>
          <div className="flex">
            <MobileStoreButton
              url=""
              width="166px"
              height="48px"
              className="cursor-pointer mr-3"
              store="ios"
              linkProps={{ title: "iOS Store Button" }}
            />
            <MobileStoreButton
              url=""
              width="286px"
              height="72px"
              className="cursor-pointer -mt-3"
              store="android"
              linkProps={{ title: "android Store Button" }}
            />
          </div>
        </section>
        {/* Right Section */}
        <section className="relative flex-grow">
          <img
            src={Hero1}
            className={"absolute right-24 transition-all fadeOut"}
            alt=""
          />
          <img
            src={Hero2}
            className={"absolute right-[105px] -top-8 transition-all fadeIn"}
            alt=""
          />
        </section>
      </main>
    </div>
  );
}

export default Home;
