import { motion } from "framer-motion";

const CircleVariants = {
  initial: {
    pathLength: 0.5,
  },
  visible: {
    pathLength: 1,
    rotate: 0,
    transition: {
      duration: 0.7,
      delay: 0.2,
      ease: "easeInOut",
    },
  },
  hidden: {
    pathLength: 1,
  },
  loading: {
    rotate: 360,
    transition: {
      ease: "linear",
      repeat: Infinity,
      duration: 0.5,
    },
  },
  exit: {
    pathLength: 0,
  },
};
const CheckedVariants = {
  initial: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    transition: {
      duration: 0.7,
      ease: "easeInOut",
    },
  },
  hidden: {
    pathLength: 0,
  },
  exit: {
    pathLength: 0,
  },
};

const CheckedIcon = ({ trigger }: { trigger: string }) => {
  return (
    <div className="absolute w-full stroke-white h-full  flex justify-center items-center">
      <svg
        width="56"
        height="56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          initial="initial"
          variants={CircleVariants}
          animate={trigger === "loading" ? "loading" : "visible"}
          exit="exit"
          id="Circle"
          strokeLinecap={"round"}
          cx="28"
          cy="28"
          r="25"
          stroke="#000"
          strokeWidth={3}
        />
        <motion.path
          initial="initial"
          variants={CheckedVariants}
          animate={trigger === "success" ? "visible" : "hidden"}
          exit="exit"
          custom={100}
          id="Checked"
          d="M15 34.9999L21.8 41.7998L41.7998 21.8"
          stroke="#000"
          strokeWidth={3}
        />
        <motion.path
          initial="initial"
          variants={CheckedVariants}
          animate={trigger === "error" ? "visible" : "hidden"}
          exit="exit"
          id="Vector 2"
          d="M41 15L14.7987 41.2013"
          custom={100}
          stroke="black"
          strokeWidth={3}
        />
        <motion.path
          initial="initial"
          variants={CheckedVariants}
          animate={trigger === "error" ? "visible" : "hidden"}
          exit="exit"
          custom={100}
          id="Vector 3"
          d="M41 41L14.7987 14.7987"
          stroke="black"
          strokeWidth={3}
        />
      </svg>
    </div>
  );
};

export default CheckedIcon;
