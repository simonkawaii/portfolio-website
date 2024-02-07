import { HTMLMotionProps, motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import cn from "../../utils/cn";
import { slideIn } from "../../Animations/Animations";

interface CardProps extends HTMLMotionProps<"div"> {
  children?: React.ReactNode;
  once?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className,
  once = true,
  ...props
}) => {
  const container = useRef(null);
  const isInView = useInView(container, { once: once });

  return (
    <motion.div
      ref={container}
      variants={slideIn}
      initial="initial"
      animate={isInView ? "visible" : "initial"}
      className={cn(
        "w-full relative flex flex-col border-[1px] rounded-[2rem] text-2xl backdrop-blur-sm border-neutral-800 p-8 md:p-12",
        className
      )}
      {...props}
    >
      <div className="absolute  z-[-1]  bottom-0 left-0 w-full overflow-hidden rounded-[inherit] content-[''] h-full">
        <div className="absolute bottom-0 left-0 w-full  content-[''] blur-lg  rounded-[inherit] h-full border-2 border-neutral-600"></div>
      </div>
      {children}
    </motion.div>
  );
};

export default Card;
