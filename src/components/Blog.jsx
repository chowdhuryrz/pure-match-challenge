import React from "react";
import BlogCard from "./BlogCard";

function Blog({ data }) {
  return (
    <div>
      <main className="w-full h-screen">
        <div className="mt-20 text-center">
          <h1 className="text-[#FFAC00] font-semibold">Read our blog</h1>
          <p className="mt-5">
            Join our growing community of Pure Matchers and <br /> keep posted
            on development updates.
          </p>
        </div>
        <div className="flex justify-center space-x-8 mt-16">
          {data.map(({ id, image, title, category, date, author }) => (
            <BlogCard
              key={id}
              image={image}
              title={title}
              category={category}
              date={date}
              author={author}
            />
          ))}
        </div>
        <div className="text-center mt-48">
          <button className="bg-[#FFAC00] py-3 px-6 text-[20px]">
            Load more stories
          </button>
        </div>
      </main>
    </div>
  );
}

export default Blog;
