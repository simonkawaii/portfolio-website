import { AnimatePresence, motion } from "framer-motion";
import AnimatedPhrase from "./AnimatedPhrase";
import { slideIn } from "../../Animations/Animations";
import ScrollBox from "./ScrollBox";

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
        duration: 3,
        ease: "easeInOut",
      }}
    >
      <img
        loading="lazy"
        draggable="false"
        height={30}
        width={30}
        className="select-none h-[3rem] w-[3rem]"
        src={icon ?? ""}
        alt={`${icon}`}
      />
    </motion.div>
  );
};
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
    return <EmitBubble key={`${icon}-${index}`} icon={icon} />;
  });

  return (
    <div
      className="items-center w-full flex gap-24 mt-12 flex-col h-full "
      id="hero"
    >
      <div className=" items-center gap-[5rem] w-full h-full  md:gap-0  flex flex-col  md:flex-row">
        <div className=" items-center  md:h-auto h-full flex w-full ">
          <h1 className="font-bold">
            <AnimatedPhrase
              className="text-transparent  bg-clip-text bg-gradient-to-r from-accent via-red-600 to-accent"
              phrase="Hi! I'm Szymon Kaliczak "
            />
            <AnimatedPhrase
              className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white"
              phrase="Passionate Frontend Developer and UI designer"
            >
              <div className="absolute inset-0 w-full h-full bg-red-400/30 bg-blend-color bg-clip-text z-10"></div>
            </AnimatedPhrase>
          </h1>
        </div>

        <motion.div
          variants={slideIn}
          initial="initial"
          animate="visible"
          className="relative  flex justify-center items-center h-full w-full"
        >
          <div className=" flex relative justify-center items-center">
            <div className="absolute flex items-center inset-0 w-full m-auto">
              <AnimatePresence>
                <div className=" justify-between w-full flex">
                  <motion.div className="flex w-full justify-between">
                    {renderBubbles}
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
                loading="lazy"
                height={520}
                width={560}
                rel="preload"
                decoding="async"
              />
            </picture>
          </div>
        </motion.div>
      </div>
      <ScrollBox />
    </div>
  );
};

export default Hero;
