import React, { useState, useEffect } from 'react';

const Hero = () => {

  return (
    <div className="text-black h-screen w-screen bg-white" id="hero">
      <div className="snap-start max-w-[800px] mx-auto h-full flex flex-col justify-center text-center">
        <h1 className="md:text-5xl sm:text-4xl text-3xl mt-[-350px]">Hello, my name is Jonny!</h1>
        <p className="text-[#00df9a] font-bold p-2">Full-Stack developer based in Leeds.</p>
        
        
      </div>
    </div>
  );
};

export default Hero;
