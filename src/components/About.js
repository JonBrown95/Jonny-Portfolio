import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { InView } from 'react-intersection-observer';
import JavaScriptIcon from '../images/Javascript.svg';


const About = () => {
  const [animationTriggered, setAnimationTriggered] = useState(false);

  const handleInView = (inView) => {
    if (inView && !animationTriggered) {
      setAnimationTriggered(true);
    }
  };

  return (
    <div id="about" className="snap-start bg-[#00df9a] w-screen h-screen flex items-center justify-center text-8xl" >
      <div className="w-full h-[80vh] short:h-full max-w-[900px] mt-[-50px] p-10 px-10 md:p-10 max-h-[600px]">
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
                  className="space-y-2 sm:space-y-3 text-[12px] md:space-y-5 sm:my-3 sm:text-sm lg:text-[16px] md:text-[16px] lg:leading-7 dark:text-stone-900"
                >
                  <p className="p-3 bg-white rounded-md">
                    I pride myself in being hard-working, a people person and as someone who will always go the extra
                    mile. I made the decision to retrain as a <b>software developer</b> and have not regretted it. The
                    problem solving, the fact that the sky is the limit when it comes to coding and how you only get
                    out what you put in is something I love.
                  </p>
                  <p className="p-3 bg-white rounded-md">
                    I pride myself in being hard-working, a people person and as someone who will always go the extra
                    mile. I made the decision to retrain as a <b>software developer</b> and have not regretted it. The
                    problem solving, the fact that the sky is the limit when it comes to coding and how you only get
                    out what you put in is something I love.
                  </p>
                </Transition.Child>

                
                <Transition.Child
                  as="div"
                  enter="ease-in duration-[1000ms] delay-[400ms] transition-all"
                  enterFrom="opacity-0 translate-y-12"
                  enterTo="opacity-100 translate-y-0"
                  className="mt-8"
                >
                  <h1 className="flex justify-center font-bold text-3xl md:text-5xl lg:text-6xl">
                    Skills
                  </h1>
                  <hr className="border-[#ffffff] border-[2px] rounded w-13 mx-auto mt-2" />
                  <div className="flex justify-center gap-6 mt-4">
                    <div className="w-16 h-16  rounded-lg shadow-lg flex items-center justify-center cursor-pointer transform hover:scale-110 transition-transform">
                      <img src={JavaScriptIcon} alt="JavaScript Icon" />
                    </div>
                    <div className="w-16 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center cursor-pointer transform hover:rotate-12 transition-transform">



                      <img src={JavaScriptIcon} alt="MySQL Icon" />
                    </div>
                    {/* add icons here */}
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
