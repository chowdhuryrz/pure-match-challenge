import React, { useState } from "react";
import FadeLoader from "react-spinners/FadeLoader";

function Newsletter() {
  const [status, setStatus] = useState("initial");

  const handleSubmit = (event) => {
    event.preventDefault();

    setTimeout(() => {
      setStatus("loading");
    }, 2000);

    setTimeout(() => {
      setStatus("success");
    }, 3000);
  };

  return (
    <div>
      <main className="w-full bg-[#00BA84] p-20 h-[546px]">
        <div className="text-center space-y-7">
          <div className="text-center flex items-center justify-center">
            {status === "loading" && (
              <FadeLoader color="#fff" className="mt-28" />
            )}
            {status === "success" && (
              <h2 className="text-white mt-28">Thank You for Subscribing!</h2>
            )}
          </div>

          {status === "initial" && (
            <>
              <h2 className="text-white">Stay connected!</h2>
              <p>
                Sign up for our newsletter to get the latest news and updates,
                as <br />
                well as exclusive perks and offers!
              </p>
              <div className="flex justify-center">
                <form
                  action=""
                  className="flex flex-col items-center"
                  onSubmit={handleSubmit}
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className=" mb-6"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className=" mb-10"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-white text-[#008861] px-6 py-3 w-[210px] text-xl mb-3"
                  >
                    Subscribe
                  </button>
                  <span className="font-extralight text-[14px]">
                    We respect your privacy.
                  </span>
                </form>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default Newsletter;
