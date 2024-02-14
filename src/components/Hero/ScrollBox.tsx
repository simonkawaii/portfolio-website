import { motion, } from "framer-motion";

const ScrollBox = () => {


  return (
    <motion.div
      id="scroll-box"
      className={`w-full p-24 duration-100 flex justify-center items-center `}
    >
      <motion.div
 
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
          height="150"
          viewBox="0 0 50 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Group 25">
            <g id="frame">
              <rect
                x="0.5"
                y="0.5"
                className=" stroke-neutral-300"
                width="49"
                height="99"
                rx="24.5"
              />
              <motion.rect
                animate={{
                  y: [0, 10],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  repeatType: "mirror",

                  ease: "easeInOut",
                }}
                id="scorll"
                x="23"
                y="44"
                width="4"
                height="18"
                rx="2"
                className=" fill-neutral-300"
              />
            </g>
            <motion.g
              id="Vector2"
              animate={{
                y: [0, 10],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                delay: 0.2,
                repeatType: "mirror",

                ease: "easeInOut",
              }}
            >
              <path
                d="M25 119.455L13.3 108L12 109.273L25 122L25 119.455Z"
                className=" fill-neutral-300"
              />
              <path
                d="M25 122L38 109.273L36.7 108L25 119.455L25 122Z"
                className=" fill-neutral-300"
              />
            </motion.g>
            <motion.g
              id="Vector1"
              animate={{
                y: [0, 10],
              }}
              transition={{
                repeat: Infinity,
                delay: 0.3,
                duration: 2,
                repeatType: "mirror",

                ease: "easeInOut",
              }}
            >
              <path
                d="M25 132.455L13.3 121L12 122.273L25 135L25 132.455Z"
                className=" fill-neutral-300"
              />
              <path
                d="M25 135L38 122.273L36.7 121L25 132.455L25 135Z"
                className=" fill-neutral-300"
              />
            </motion.g>
          </g>
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default ScrollBox;
