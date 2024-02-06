import React from "react";
import {
  motion,
  useTransform,
  MotionValue,
  HTMLMotionProps,
} from "framer-motion";

interface WordProps extends HTMLMotionProps<"span"> {
  range: [number, number];
  progress: MotionValue<number>;
}

const Word: React.FC<WordProps> = ({ children, range, progress, ...props }) => {
  const opacity = useTransform(progress, range, [0.5, 1]);

  return (
    <motion.span style={{ opacity }} {...props}>
      {children}
    </motion.span>
  );
};

export default Word;
