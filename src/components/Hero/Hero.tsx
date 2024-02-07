import { AnimatePresence, motion } from "framer-motion";
import AnimatedPhrase from "./AnimatedPhrase";
import { slideIn, techBubblesAnim } from "../../Animations/Animations";
import ScrollBox from "./ScrollBox";
import Section from "../Wrappers/Section";

const EmitBubble = ({ icon, index }: { icon: string; index: number }) => {
  return (
    <motion.div
      initial="initial"
      animate="visible"
      custom={index}
      variants={techBubblesAnim}
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
    return <EmitBubble index={index} key={`${icon}-${index}`} icon={icon} />;
  });

  return (
    <Section paddings={"none"} className="gap-12" id="hero">
      <div className=" items-center gap-[5rem] w-full  h-full mt-12  md:gap-0  flex flex-col  md:flex-row">
        <div className=" items-center  md:h-auto h-full flex w-full ">
          <h1 className="font-bold">
            <AnimatedPhrase
              className="text-transparent  bg-clip-text bg-gradient-to-r from-accent via-red-600 to-accent"
              phrase="Hi! I'm Szymon Kaliczak "
            />
            <AnimatedPhrase
              className="text-transparent motion-h2 bg-clip-text bg-gradient-to-r from-white via-white to-white"
              phrase="Passionate Frontend Developer and UI designer"
            ></AnimatedPhrase>
          </h1>
        </div>

        <motion.div
          variants={slideIn}
          initial="initial"
          animate="visible"
          className="relative flex justify-center items-center h-full w-full"
        >
          <div className=" flex  relative justify-center items-center">
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
                width={540}
                rel="preload"
                decoding="async"
              />
            </picture>
          </div>
        </motion.div>
      </div>
      <ScrollBox />
    </Section>
  );
};

export default Hero;
