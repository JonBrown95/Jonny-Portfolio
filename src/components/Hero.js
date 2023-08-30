import React from "react";

const Hero = () => {
  return (
    <div className="text-black h-screen w-screen bg-white" id="hero">
      <div className="relative snap-start w-screen mx-auto h-[100dvh] flex flex-col justify-center items-center text-center">
        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          Hello, I'm{" "}
          <span class="underline underline-offset-3 decoration-8 decoration-[#00df9a] ">
            Jonathan!
          </span>
          </h1>
          <p className="text-lg text-gray-700 md:text-xl lg:text-2xl">
  Leeds-based software developer exploring the digital realm, one line of code at a time.
</p>
        

        <div class="absolute flex flex-col gap-1 text-[#00df9a] animate-bounce w-10 h-10 bottom-2 right-3 md:right-4">
          <a class="flex items-center justify-center" href="#about">
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-5 h-5 cursor-pointer"
              height="25"
              width="25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="8 12 12 16 16 12"></polyline>
              <line x1="12" y1="8" x2="12" y2="16"></line>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
