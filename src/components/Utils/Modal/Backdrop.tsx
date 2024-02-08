import React from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";

type BackdropProps = {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  onEnterKey?: (event: React.KeyboardEvent<HTMLElement>) => void;
};

const Backdrop: React.FC<BackdropProps> = ({ children, onClick }) =>
  ReactDOM.createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          delay: 0.4,
        },
      }}
      tabIndex={0}
      onClick={onClick}
      className="flex  fixed top-0 right-0 w-full h-full bg-black/30 justify-end z-50 "
    >
      {children}
    </motion.div>,
    document.body
  );

export default Backdrop;
