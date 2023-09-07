import React from "react";
import { DiReact, DiJavascript1 } from "react-icons/di";
import { FaCss3, FaFire, FaJs, FaMobile, FaReact } from "react-icons/fa";

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
              className="object-contain w-full h-40 rounded-md"
            />

            <h2 className="font-bold text-xl text-center">Jonny's Portfolio</h2>

            <p className="text-sm text-center">
              Version 1 of my Portfolio - the website you are browsing. Made
              using React, Javascript and TailwindCSS. Built with simplicity in
              mind, my portfolio is fully responsive depending on your device of
              choice. Probably my favourite project to work on to showcase my
              work and put my skills to the test.
            </p>

            <div className="flex gap-2 mt-auto justify-center">
              <FaReact size={24} color="#61DAFB" title="React" />
              <FaJs size={24} color="#F7DF1E" title="JavaScript" />
              <FaCss3 size={24} color="#1572B6" title="Tailwind CSS" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg flex flex-col gap-4 shadow-md hover:shadow-xl">
            <img
              src={TakeAHikeLogo}
              alt="Portfolio logo"
              className="object-contain w-full h-40 rounded-md"
            />

            <h2 className="font-bold text-xl text-center">Take a Hike</h2>

            <p className="text-sm text-center">
              Take a Hike is a Mobile application created using React Native -
              this was my Northcoders project. Take a Hike allowed you to create
              routes to then use to create events that other hikers could join.
              We used Mapbox API to have interactive maps which pinned the start
              location of the hike with a fully functional friends and instant
              messaging system.
            </p>

            <div className="flex gap-2 mt-auto justify-center">
              <FaReact size={24} color="#61DAFB" title="React" />
              <FaJs size={24} color="#F7DF1E" title="JavaScript" />
              <FaMobile size={24} color="#333" title="React Native" />
              <FaFire size={24} color="#FFA000" title="Firebase" />
            </div>
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
