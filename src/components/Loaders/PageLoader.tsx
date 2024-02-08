import { AnimatePresence, motion } from "framer-motion";

const PageLoader = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
        }}
        animate={{
          opacity: 1,
          transition: {
            duration: 2,
          },
        }}
        exit={{
          opacity: 0,
          transition: {
            duration: 2,
          },
        }}
        className="fixed z-[9999] w-full h-full bg-black left-0 top-0 flex justify-center items-center"
      >
        Loading
      </motion.div>
    </AnimatePresence>
  );
};

export default PageLoader;
