import { Button } from "../Button/Button";
import { motion } from "framer-motion";
import cn from "../../utils/cn";
import { useStarmode } from "../../Context/StarModeContext";
import { starsAnim } from "../../Animations/Animations";

const EmitStars = ({ icon, index }: { icon: string; index: number }) => {
  return (
    <motion.div
      custom={index}
      variants={starsAnim}
      animate="visible"
      initial="initial"
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
  const starsArray = Array.from({ length: 6 }, (_, i) => i + 1);

  const renderStars = starsArray.map((id, index) => {
    return (
      <EmitStars
        index={id}
        key={`"/star.svg"-${id}-${index}`}
        icon={"/star.svg"}
      />
    );
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
