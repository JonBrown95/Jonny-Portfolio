import React from 'react';

const Hero = () => {
  return (
    <div className="text-black h-screen bg-white">
      <div className="max-w-[800px] mx-auto h-full flex flex-col justify-center text-center">
        <h1 className="md:text-6xl sm:text-4xl text-3xl">Jonathan Brown.</h1>
        <p className="text-[#00df9a] font-bold p-2">Full-Stack developer based in Leeds.</p>
      </div>
    </div>
  );
}

export default Hero;
