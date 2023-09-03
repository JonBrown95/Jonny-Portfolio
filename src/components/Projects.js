import React from "react";
import blackLogo from "../images/blackLogo.svg";
import TakeAHikeLogo from "../images/TakeAHikeLogo.png";

const Projects = () => {
  return (
    <div
      id="projects"
      className="bg-[#00df9a] snap-start min-h-screen flex flex-col items-center justify-center"
    >
      <div className="w-full max-w-screen-xl px-4 md:px-10 py-20 md:py-20 translate-y-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg flex flex-col gap-4 shadow-md hover:shadow-xl">
            <img
              src={blackLogo}
              alt="Portfolio logo"
              className="object-cover w-full h-full rounded-md"
            />

            <h2 className="font-bold text-xl">Jonny's Portfolio</h2>

            <p className="text-sm">
              Version 1 of my Portfolio - the website you are browsing. Made
              using React, Javascript and TailwindCSS. Built with simplicity in
              mind, my portfolio is fully responsive depending on your device of
              choice.
            </p>
            <ul className="flex flex-row flex-wrap gap-2 mt-auto"></ul>
          </div>

          <div className="bg-white p-6 rounded-lg flex flex-col gap-4 shadow-md hover:shadow-xl">
            <img
              src={TakeAHikeLogo}
              alt="Portfolio logo"
              className="object-cover w-full h-full rounded-md"
            />

            <h2 className="font-bold text-xl">Take a Hike</h2>

            <p className="text-sm">
              Version 1 of my Portfolio - the website you are browsing. Made
              using React, Javascript and TailwindCSS.
            </p>
            <ul className="flex flex-row flex-wrap gap-2 mt-auto"></ul>
          </div>

          <div className="bg-white p-6 rounded-lg flex flex-col gap-4 shadow-md hover:shadow-xl">
            <div className="flex flex-col justify-center h-1/2 gap-2"></div>
            <h2 className="text-bold">More projects coming soon..</h2>
            <div className="flex flex-col text-sm"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
