import { motion, useInView } from "framer-motion";
import { slideUp } from "./AnimConfig";
import { useRef } from "react";
import { HTMLMotionProps } from "framer-motion";
import clsx from "clsx";

interface PhraseProps extends HTMLMotionProps<"span"> {
  phrase: string;
}

const AnimatedPhrase: React.FC<PhraseProps> = ({
  phrase,
  className,
  ...props
}) => {
  const splittedPhrase = phrase.split(" ");

  const container = useRef(null);
  const isInView = useInView(container);

  return (
    <div>
      {splittedPhrase.map((word, index) => {
        return (
          <span
            ref={container}
            className="inline-flex  mr-4 w overflow-hidden relative"
            key={`${word}-${index}`}
          >
            <motion.span
              variants={slideUp}
              initial="initial"
              animate={isInView ? "open" : "closed"}
              custom={index}
              className={clsx("motion-span", className)}
              {...props}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </div>
  );
};

export default AnimatedPhrase;
