import React from "react";

//components
import Backdrop from "./Backdrop";
import ModalProps from "./Types/ModalTypes";

//framer motion
import { motion } from "framer-motion";

const animationConfig = {
  hidden: {
    x: "calc(100% + 120px)",
  },
  visible: {
    x: "0",
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    x: "calc(100% + 120px)",

    transition: {
      duration: 0.6,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const ModalWrapper: React.FC<ModalProps> = ({
  className,
  handleClose,
  children,
  ...props
}) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        {...props}
        variants={animationConfig}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={
          !className
            ? "flex flex-col h-full w-full md:w-auto items-center justify-around "
            : className
        }
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </motion.div>
    </Backdrop>
  );
};
export default ModalWrapper;
