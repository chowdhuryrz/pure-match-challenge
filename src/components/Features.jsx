import React from "react";
import Community from "../assets/community.png";
import Relationships from "../assets/relationship.png";
import Conversation from "../assets/conversation.png";
import Triangle from "../assets/triangle.png";
import Triangle2 from "../assets/triangle2.png";
import Rectangle from "../assets/rectangle.png";
import Circle3 from "../assets/circle3.png";
import Ellipse from "../assets/ellipse.png";
import Star from "../assets/star.png";
import Circle from "../assets/circle.png";
import Rectangle2 from "../assets/rectangle2.png";
import Circle2 from "../assets/circle2.png";

function Feaures() {
  return (
    <div>
      <main className="flex justify-between mx-auto max-w-6xl h-screen py-24 flex-col">
        <div className="overflow-y-scroll flex-col scrollbar-hide space-y-28">
          <div className="flex">
            <div className="relative h-[500px]">
              <img src={Triangle} alt="" className="absolute" />
              <img src={Circle3} alt="" className="absolute bottom-0 z-[-1]" />
              <img src={Rectangle} alt="" className="absolute right-0 z-[-1]" />
              <img
                src={Community}
                className="h-[450px] w-[450px] z-10 object-contain ml-12"
                alt=""
              />
            </div>
            {/* Right */}
            <div className="flex flex-col max-w-[500px] mt-20 ml-32">
              <h2 className="text-[#FF004A]">Connect as a community</h2>
              <p className="mt-5">
                Dating and marriage may not be the sole focus of <br />{" "}
                discipleship, but we all need connection. As <br /> Christians,
                it’s important to have deep <br /> relationships with
                like-minded believers we trust <br /> and respect; our app
                facilities that.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="relative h-[500px]">
              <img src={Ellipse} alt="" className="absolute left-10" />
              <img src={Star} alt="" className="absolute bottom-28 left-4" />
              <img src={Circle} alt="" className="absolute top-14 right-7" />
              <img
                src={Relationships}
                className="h-[450px] w-[450px] z-[-1] object-contain ml-12"
                alt=""
              />
            </div>
            {/* Right */}
            <div className="flex flex-col max-w-[500px] mt-20 ml-32">
              <h2 className="text-[#FFAC00]">Form organic relationships</h2>
              <p className="mt-5">
                Pure Match at its heart is a place for all <br /> disciples
                (single and married) to connect, <br /> network, and socialize
                in order to strengthen <br /> the bond of the kingdom of Heaven
                on earth.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="relative h-[500px]">
              <img
                src={Rectangle2}
                alt=""
                className="absolute right-24 top-12"
              />
              <img
                src={Circle2}
                alt=""
                className="absolute left-20 top-24 z-[-1]"
              />
              <img
                src={Triangle2}
                alt=""
                className="absolute right-0 bottom-24 z-[-1]"
              />
              <img
                src={Conversation}
                className="h-[450px] w-[450px] z-[-1] object-contain ml-12"
                alt=""
              />
            </div>
            {/* Right */}
            <div className="flex flex-col max-w-[500px] mt-20 ml-32">
              <h2 className="text-[#0089ff]">Make meaningful conversations</h2>
              <p className="mt-5">
                Pure Match hopes to foster and grow <br /> relationships between
                like-minded disciples in <br /> a healthy community. Connect
                with Christians <br /> you have things in common with. Our
                environment fosters many lasting partnerships <br /> such as
                network connections and even <br /> marriage.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Feaures;
