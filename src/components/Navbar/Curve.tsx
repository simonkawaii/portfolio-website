import { Variants, motion } from "framer-motion";

const initialPath = `M100 0 L100 ${
  typeof window !== "undefined" && window.innerHeight
} Q-100 ${typeof window !== "undefined" && window.innerHeight / 2} 100 0`;

const targetPath = `M100 0 L100 ${
  typeof window !== "undefined" && window.innerHeight
} Q100 ${typeof window !== "undefined" && window.innerHeight / 2} 100 0`;

const variants: Variants = {
  initial: {
    d: initialPath,
  },
  enter: {
    d: targetPath,
    transition: {
      duration: 0.6,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    d: initialPath,
    transition: {
      duration: 0.5,

      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const Curve = () => {
  return (
    <svg className="absolute top-0 left-[-99px] fill-secondary pointer-events-none stroke-none w-full h-full">
      <motion.path
        d={initialPath}
        variants={variants}
        initial="initial"
        animate="enter"
        exit="exit"
      ></motion.path>
    </svg>
  );
};

export default Curve;
