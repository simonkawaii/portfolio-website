export const slideIn = {
  initial: {
    y: "5rem",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "linear",
      duration: 0.5,
      delay: 0.2,
    },
  },
  hidden: {
    y: "5rem",
    opacity: 0,
  },
};

export const starsAnim = {
  initial: {
    y: 0,
    x: -10,
    scale: 100,
    opacity: 0,
  },
  visible: (index: number) => ({
    y: [50, -50],
    x: ["-10px", "10px", "-10px", "10px"],
    scale: ["100%", "0%"],
    opacity: [0, 100, 0],
    transition: {
      repeat: Infinity,
      delay: Math.random() * index,
      duration: 3,
      ease: "easeInOut",
    },
  }),
};

export const techBubblesAnim = {
  initial: {
    y: 0,
    x: -10,
    opacity: 0,
  },
  visible: (i: number) => ({
    y: [0, -200],
    x: ["-10px", "10px", "-10px", "10px"],
    opacity: [0, 100, 0],
    transition: {
      repeat: Infinity,
      delay: Math.random() * i,
      duration: 3,
      ease: "easeInOut",
    },
  }),
};
