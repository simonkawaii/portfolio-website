import { Button } from "../Button/Button";
import { motion } from "framer-motion";
import cn from "../../utils/cn";
import { useStarmode } from "../../Context/StarModeContext";

const EmitStars = ({ icon }: { icon: string }) => {
  const randomDelay = Math.random() * 4000;

  return (
    <motion.div
      animate={{
        y: [50, -50],
        x: ["-10px", "10px", "-10px", "10px"],
        scale: ["100%", "0%"],
        opacity: [0, 100, 0],
      }}
      transition={{
        repeat: Infinity,
        delay: randomDelay / 1000, // Convert milliseconds to seconds
        duration: 2,
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

const ParticlesSwitch = () => {
  const renderStars = [
    { icon: "/star.svg" },
    { icon: "/star.svg" },
    { icon: "/star.svg" },
    { icon: "/star.svg" },
    { icon: "/star.svg" },
    { icon: "/star.svg" },
  ].map(({ icon = "/star.svg" }, index) => {
    return <EmitStars key={`${icon}-${index}`} icon={icon} />;
  });

  const { starmode, toggleStarmode } = useStarmode();

  return (
    <Button
      onClick={toggleStarmode}
      className={cn(
        "py-2 gap-4 overflow-hidden rounded-full ",
        starmode === "true"
          ? "bg-gradient-to-r from-accent/30 from-10%  to-purple-600/30"
          : ""
      )}
      variant={"outline"}
    >
      {starmode === "true" ? (
        <div className="absolute h-full z-[-1] w-full flex justify-center overflow-hidden inset-0 ">
          {renderStars}
        </div>
      ) : null}
      <img
        src="./stars.svg"
        className={`${
          starmode === "false" ? "saturate-0 brightness-[4]" : "saturate-100"
        } inset-0 w-full h-[3rem]`}
        alt=""
      />
      {starmode === "true" ? <>on</> : <>off</>}
    </Button>
  );
};

export default ParticlesSwitch;
