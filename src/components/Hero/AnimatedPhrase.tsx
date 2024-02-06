import { useRef } from "react";

import { motion, useInView } from "framer-motion";
import { HTMLMotionProps } from "framer-motion";
import { slideUp } from "./AnimConfig";

import cn from "../../utils/cn";

interface PhraseProps extends HTMLMotionProps<"span"> {
  phrase: string;
  once?: boolean;
  children?: React.ReactNode;
}

const AnimatedPhrase: React.FC<PhraseProps> = ({
  phrase,
  className,
  once = true,
  children,
  ...props
}) => {
  const splittedPhrase = phrase.split(" ");

  const container = useRef(null);
  const isInView = useInView(container, { once: once, amount: 0.7 });

  return (
    <motion.div className="relative">
      {splittedPhrase.map((word, index) => {
        return (
          <motion.span
            ref={container}
            className="inline-flex  mr-4 w overflow-hidden relative"
            key={`${word}-${index}`}
          >
            <motion.span
              variants={slideUp}
              initial="initial"
              animate={isInView ? "open" : "closed"}
              custom={index}
              className={cn("motion-h1", className)}
              {...props}
            >
              {word}
            </motion.span>
          </motion.span>
        );
      })}
      {children}
    </motion.div>
  );
};

export default AnimatedPhrase;
