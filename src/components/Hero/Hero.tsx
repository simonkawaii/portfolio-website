import { AnimatePresence, motion } from "framer-motion";

const EmitBubble = ({ icon }: { icon: string }) => {
  const randomDelay = Math.random() * 3000;

  return (
    <motion.div
      animate={{
        y: [0, -200],
        x: ["-10px", "10px", "-10px", "10px"],
        opacity: [0, 100, 0],
      }}
      transition={{
        repeat: Infinity,
        delay: randomDelay / 1000, // Convert milliseconds to seconds
        duration: 4,
        ease: "easeInOut",
      }}
    >
      <img className="h-[3rem] w-[3rem]" src={icon ?? ""} alt="" />
    </motion.div>
  );
};
const Hero = () => {
  const bubbles = [
    {
      icon: "/CSS3.svg",
    },
    {
      icon: "/react.svg",
    },
    {
      icon: "/Javascript.svg",
    },
    {
      icon: "/databases.svg",
    },

    {
      icon: "/CSS3.svg",
    },
    {
      icon: "/git.svg",
    },
    {
      icon: "/HTML5.svg",
    },
    {
      icon: "/TailwindCSS.svg",
    },
  ];

  const renderBubbles = bubbles.map(({ icon }, index) => {
    return <EmitBubble key={`${icon}-${index}`} icon={icon} />;
  });

  return (
    <div className="items-center w-full flex mt-12 flex-col h-full ">
      <div className=" items-center w-full h-full  md:gap-24  flex flex-col  md:flex-row">
        <div className=" items-center md:h-auto h-full flex w-full ">
          <div className=" font-bold">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-red-600 to-accent">
              Hi! I'm Szymon Kaliczak
            </h1>
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-400 via-white to-white">
              I am an aspiring Frontend Developer
            </h1>
          </div>
        </div>

        <div className="relative flex justify-center items-center h-full w-full">
          {/* <HeroSVG /> */}
          <div className=" flex relative justify-center items-center">
            <div className="absolute flex items-center  inset-0 w-full m-auto ">
              <div className="text-red-500 w-full ">
                <AnimatePresence>
                  <div className=" justify-between w-full flex">
                    <motion.div className="flex w-full justify-between">
                      {renderBubbles}
                    </motion.div>
                  </div>
                </AnimatePresence>
              </div>
            </div>
            <img
              src="/portfoliohero-1.png"
              className="w-full h-full object-cover  md:object-contain   inset-0 gradient-mask "
              alt="hero-img"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[300px] p-24   flex justify-center items-center">
        <motion.div
          animate={{
            transform: "translateY(2rem)",
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            repeatType: "mirror",

            ease: "easeInOut",
          }}
          className="h-[15rem] w-[5rem] flex flex-col justify-end items-center  "
        >
          <svg
            width="50"
            height="135"
            viewBox="0 0 50 135"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Group 25">
              <g id="frame">
                <rect
                  x="0.5"
                  y="0.5"
                  width="49"
                  height="99"
                  rx="24.5"
                  stroke="#ECECEC"
                />
                <rect
                  id="scorll"
                  x="23"
                  y="44"
                  width="4"
                  height="18"
                  rx="2"
                  fill="#D9D9D9"
                />
              </g>
              <g id="Vector2">
                <path
                  d="M25 119.455L13.3 108L12 109.273L25 122L25 119.455Z"
                  fill="#ECECEC"
                />
                <path
                  d="M25 122L38 109.273L36.7 108L25 119.455L25 122Z"
                  fill="#ECECEC"
                />
              </g>
              <g id="Vector1">
                <path
                  d="M25 132.455L13.3 121L12 122.273L25 135L25 132.455Z"
                  fill="#ECECEC"
                />
                <path
                  d="M25 135L38 122.273L36.7 121L25 132.455L25 135Z"
                  fill="#ECECEC"
                />
              </g>
            </g>
          </svg>

          {/* <svg
            width="15"
            height="54"
            className="w-[1.25rem]"
            viewBox="0 0 28 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Group 2">
              <path
                id="Polygon 2"
                strokeLinecap="round"
                d="M14 54L1.87565 33L26.1244 33L14 54Z"
                fill="white"
              />
              <path
                id="Polygon 3"
                className="-translate-y-2"
                d="M14 28L1.87565 7L26.1244 7L14 28Z"
                fill="white"
                strokeLinecap="round"
              />
            </g>
          </svg> */}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
