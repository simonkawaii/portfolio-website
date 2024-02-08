import { motion } from "framer-motion";
import { techBubblesAnim } from "../../Animations/Animations";

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
        decoding="async"
        alt={`${icon}`}
      />
    </motion.div>
  );
};

export default EmitBubble;
