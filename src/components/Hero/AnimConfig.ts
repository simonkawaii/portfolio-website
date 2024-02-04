export const slideUp = {
  initial: {
    y: "100%",
  },
  open: (i: number) => ({
    y: 0,
    transition: { duration: 0.5, delay: 0.05 * i },
  }),
  closed: {
    y: "100%",
  },
};
