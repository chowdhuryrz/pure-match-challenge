import React from "react";
import { BsDot } from "react-icons/bs";

function BlogCard({ image, category, title, author, date }) {
  return (
    <div>
      <main>
        <div className="w-[296px] h-[194px]">
          <img src={image} alt="" className="object-contain" />
          <h6 className="uppercase bg-[#FFAC00] py-[1px] px-[6px] text-white font-bold rounded-sm text-[14px] inline-block mt-4">
            {category}
          </h6>
          <h5>{title}</h5>
          <div className="mt-4 flex items-center">
            <span className="text-[14px] font-normal">{author}</span>
            <BsDot className="h-5 w-5" />
            <span className="text-[#9A9A9D] text-[14px] font-normal">
              {date}
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default BlogCard;
