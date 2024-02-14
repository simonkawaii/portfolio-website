import { AnimatePresence, motion } from "framer-motion";
import AnimatedPhrase from "./AnimatedPhrase";
import Section from "../Wrappers/Section";
import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const EmitBubble = React.lazy(() => import("./EmitBubble"));
const ScrollBox = React.lazy(() => import("./ScrollBox"));

const Hero = () => {
  const bubbles = [
    {
      icon: "/icons/react.svg",
    },
    {
      icon: "/icons/Javascript.svg",
    },

    {
      icon: "/icons/CSS3.svg",
    },
    {
      icon: "/icons/git.svg",
    },
    {
      icon: "/icons/HTML5.svg",
    },
    {
      icon: "/icons/TailwindCSS.svg",
    },
  ];

  const renderBubbles = bubbles.map(({ icon }, index) => {
    return <EmitBubble index={index} key={`${icon}-${index}`} icon={icon} />;
  });

  return (
    <Section
      animateSection={false}
      paddings={"none"}
      id="home"
      className="gap-12"
    >
      <div className=" items-center gap-[10rem] w-full  h-full mt-12  md:gap-0  flex flex-col  md:flex-row">
        <div className=" items-center  md:h-auto h-full flex w-full ">
          <h1 >
            <AnimatedPhrase
              className="text-transparent  bg-clip-text bg-gradient-to-r from-accent via-red-600 to-accent"
              phrase="Hi! I'm Szymon Kaliczak "
            />
            <AnimatedPhrase
              className="text-transparent motion-h2 bg-clip-text bg-gradient-to-r from-white via-white to-white"
              phrase="Passionate Frontend Developer and UI designer"
            />
          </h1>
        </div>

        <motion.div
        initial={{
          opacity:0
        }}
          animate={{
            opacity: 1,
            transition: {
              duration: 1,
            },
          }}
          className="relative flex justify-center items-center h-full  w-full"
        >
          <div className=" flex  relative justify-center items-center">
            <div className="absolute flex items-center inset-0 w-full m-auto">
              <AnimatePresence>
                <div className=" justify-between w-full flex">
                  <motion.div
                       initial={{
                        opacity:0
                      }}
                        animate={{
                          opacity: 1,
                          transition: {
                            duration: 3,
                          },
                        }}
                  className="flex w-full justify-between">
                    <ErrorBoundary fallback={<></>}>
                      <Suspense fallback={<></>}>{renderBubbles}</Suspense>
                    </ErrorBoundary>
                  </motion.div>
                </div>
              </AnimatePresence>
            </div>

            <picture>
              <source
                srcSet="/portfoliohero-1.webp"
                draggable="false"
                className="select-none contrast-125 object-cover relative  md:object-contain 
              inset-0 gradient-mask "
                type="image/webp"
              />
              <source
                srcSet="/portfoliohero-1.png"
                draggable="false"
                className="select-none contrast-125 object-cover relative  md:object-contain 
              inset-0 gradient-mask "
                type="image/png"
              />
              <img
                srcSet="/portfoliohero-1.webp"
                draggable="false"
                className="select-none contrast-125 object-cover relative  md:object-contain 
              inset-0 gradient-mask "
                alt="hero-img"
                height={520}
                width={540}
                rel="preload"
                decoding="async"
                loading="eager"
              />
            </picture>
          </div>
        </motion.div>
      </div>

      <ErrorBoundary fallback={<></>}>
        <Suspense fallback={<></>}>
          <ScrollBox />
        </Suspense>
      </ErrorBoundary>
    </Section>
  );
};

export default Hero;
