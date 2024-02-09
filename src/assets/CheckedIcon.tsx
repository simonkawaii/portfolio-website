import { motion } from "framer-motion";

const CheckedIcon = () => {
  return (
    <div className="absolute w-full stroke-white h-full  flex justify-center items-center">
      <svg
        width="56"
        height="56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          initial={{
            strokeDashoffset: 350,
          }}
          animate={{
            strokeDashoffset: 0,
            transition: {
              duration: 0.7,
              ease: "easeInOut",
            },
          }}
          exit={{
            strokeDashoffset: 350,
            transition: {
              duration: 0.5,
              delay: 0.5,
            },
          }}
          id="Circle"
          cx="28"
          cy="28"
          r="26.5"
          stroke="#000"
          strokeWidth="3"
          strokeDasharray="350"
        />
        <motion.path
          initial={{
            strokeDashoffset: 100, // Start from the length of the path to a smaller value (animation length)
          }}
          animate={{
            strokeDashoffset: 0, // Start from the length of the path to a smaller value (animation length)
            transition: {
              delay: 0.3,
              ease: "easeInOut",
              duration: 0.5,
            },
          }}
          exit={{
            strokeDashoffset: 100, // Start from the length of the path to a smaller value (animation length)
          }}
          id="Checked"
          d="M15 34.9999L21.8 41.7998L41.7998 21.8"
          stroke="#000"
          strokeWidth="3"
          strokeDasharray="100" // Length of the path
        />
      </svg>
    </div>
  );
};

export default CheckedIcon;
