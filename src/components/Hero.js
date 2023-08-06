import React from 'react';

const Hero = () => {


  return (
    <div className="text-black h-screen w-screen bg-white" id="hero">
      <div className="relative snap-start w-screen mx-auto h-full flex flex-col justify-center text-center">
        <h1 className="md:text-5xl sm:text-4xl text-3xl mt-[-350px]">Hello, my name is Jonny!</h1>
        <p className="text-[#00df9a] font-bold p-2">Full-Stack developer based in Leeds.</p>

        <div class="absolute flex flex-col gap-1 text-black animate-bounce w-8 h-8 bottom-4 right-2 md:right-4">
        <a class="flex items-center justify-center" href="#about">
        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 cursor-pointer" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line></svg>
       </a></div>
        </div>
    </div>
  );
};

export default Hero;

