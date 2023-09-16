import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { InView } from "react-intersection-observer";
import {
  DiCss3,
  DiDatabase,
  DiGithub,
  DiHtml5,
  DiJsBadge,
  DiMysql,
  DiReact,
} from "react-icons/di";

const About = () => {
  const [animationTriggered, setAnimationTriggered] = useState(false);

  const handleInView = (inView) => {
    if (inView && !animationTriggered) {
      setAnimationTriggered(true);
    }
  };

  return (
    <div
      id="about"
      className="snap-start bg-[#00df9a] w-screen h-screen flex items-center justify-center text-8xl"
    >
      <div className="w-full h-[80vh] short:h-full max-w-[900px] mt-[-70px] p-10 px-10 md:p-10 max-h-[600px]">
        <InView onChange={handleInView}>
          {({ inView, ref }) => (
            <div ref={ref}>
              <Transition.Root show={animationTriggered}>
                <Transition.Child
                  as="h1"
                  enter="ease-in duration-[1000ms] transition-all"
                  enterFrom="opacity-0 translate-y-12"
                  enterTo="opacity-100 translate-y-0"
                  className="flex justify-center font-bold mb-2 md:mb-5 text-3xl md:text-5xl lg:text-6xl"
                >
                  About Me
                </Transition.Child>
                <Transition.Child
                  as="hr"
                  enter="ease-in duration-[1000ms] delay-[200ms] transition-all"
                  enterFrom="opacity-0 translate-y-12"
                  enterTo="opacity-100 translate-y-0"
                  className="flex justify-center border-[#ffffff] border-[2px] rounded w-13 mb-4"
                />
                <Transition.Child
                  as="div"
                  enter="ease-in duration-[1000ms] delay-[400ms] transition-all"
                  enterFrom="opacity-0 translate-y-12"
                  enterTo="opacity-100 translate-y-0"
                  className="space-y-2 sm:space-y-3 text-[14px] md:space-y-4 md:text-[17px] sm:my-3  lg:leading-6
                   dark:text-stone-900"
                >
                  <p className="p-3 bg-white rounded-md shadow-md text-gray-800">
                    I'm passionate about software development, known for my
                    strong work ethic and interpersonal skills. Making the
                    decision to retrain as a{" "}
                    <b className="text-[#00df9a]">software developer</b> was one
                    of the best choices I've made. I thrive on problem-solving,
                    embrace the limitless possibilities of coding, and believe
                    that the effort you put in directly correlates with what you
                    achieve.
                  </p>
                  <p className="p-3 bg-white rounded-md shadow-md text-gray-800">
                    I do all my coding magic from Leeds. Beyond this I am a huge
                    Muay Thai fan and have traveled to Thailand multiple times
                    to practice this and train with professionals (also for the
                    food). Music's also my jam, and I am a frequent festival-goer
                    whether it's in the sunshine or rain. You can also expect to
                    see me in the kitchen where I (try) cook, though that's
                    definitely something I could do with some training on!
                  </p>
                </Transition.Child>

                <Transition.Child
                  as="div"
                  enter="ease-in duration-[1000ms] delay-[400ms] transition-all"
                  enterFrom="opacity-0 translate-y-12"
                  enterTo="opacity-100 translate-y-0"
                  className="mt-4"
                >
                  <h2 className="flex justify-center font-bold text-3xl md:text-5xl lg:text-6xl">
                    Skills
                  </h2>
                  <hr className="border-[#ffffff] border-[2px] rounded w-13 mx-auto mt-2" />
                  <div className="flex justify-center gap-6 mt-4">
                    <DiJsBadge
                      className="w-16 h-16 md:w-20 md:h-20 text-yellow-500 hover:text-yellow-600 hover:scale-105 transition-transform duration-300"
                      title="JavaScript"
                      aria-label="JavaScript icon"
                    />
                    <DiReact
                      className="w-16 h-16 md:w-20 md:h-20 text-blue-500 hover:text-blue-600 hover:scale-105 transition-transform duration-300"
                      title="React"
                      aria-label="React icon"
                    />
                    <DiDatabase
                      className="w-16 h-16 md:w-20 md:h-20 text-purple-500 hover:text-purple-600 hover:scale-105 transition-transform duration-300"
                      title="Database"
                      aria-label="Database icon"
                    />
                    <DiMysql
                      className="w-16 h-16 md:w-20 md:h-20 text-orange-500 hover:text-orange-600 hover:scale-105 transition-transform duration-300"
                      title="MySQL"
                      aria-label="MySQL icon"
                    />
                    <DiGithub
                      className="w-16 h-16 md:w-20 md:h-20 text-gray-500 hover:text-gray-600 hover:scale-105 transition-transform duration-300"
                      title="GitHub"
                      aria-label="GitHub icon"
                    />
                    <DiHtml5
                      className="w-16 h-16 md:w-20 md:h-20 text-red-500 hover:text-red-600 hover:scale-105 transition-transform duration-300"
                      title="HTML5"
                      aria-label="HTML5 icon"
                    />
                    <DiCss3
                      className="w-16 h-16 md:w-20 md:h-20 text-blue-500 hover:text-blue-600 hover:scale-105 transition-transform duration-300"
                      title="CSS3"
                      aria-label="CSS3 icon"
                    />

                    {/* add more skills here as I learn */}
                  </div>
                </Transition.Child>
              </Transition.Root>
            </div>
          )}
        </InView>
      </div>
    </div>
  );
};

export default About;
