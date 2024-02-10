import { motion } from "framer-motion";

const CircleVariants = {
  initial: (i: number) => ({
    pathLength: 0,
  }),
  visible: {
    pathLength: 1,
    rotate: 0,

    transition: {
      duration: 0.7,
      delay: 0.2,
      ease: "easeInOut",
    },
  },
  hidden: (i: number) => ({
    pathLength: 1,
  }),
  loading: (i: number) => ({
    rotate: 520,
    pathLength: [0.22, 1, 0.1, 1, 0.15, 1],
    transition: {
      times: [0, 0.2, 0.4, 0.6, 0.8, 1],
      ease: "easeInOut",
      repeatType: "mirror",
      repeat: Infinity,
      duration: 3,
    },
  }),
  exit: (i: number) => ({
    pathLength: 0,
    transition: {},
  }),
};
const CheckedVariants = {
  initial: (i: number) => ({
    strokeDashoffset: i,
  }),
  visible: {
    strokeDashoffset: 0,
    transition: {
      duration: 0.7,
      ease: "easeInOut",
    },
  },
  hidden: (i: number) => ({
    strokeDashoffset: i,
  }),
  exit: (i: number) => ({
    strokeDashoffset: i,
    transition: {},
  }),
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
          custom={350}
          id="Circle"
          strokeLinecap={"round"}
          cx="28"
          cy="28"
          r="25"
          stroke="#000"
          strokeWidth="3"
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
          strokeWidth="3"
          strokeDasharray="100" // Length of the path
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
          strokeDasharray="100" // Length of the path
          stroke-width="3"
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
          strokeDasharray="100" // Length of the path
          stroke-width="3"
        />
      </svg>
    </div>
  );
};

export default CheckedIcon;
