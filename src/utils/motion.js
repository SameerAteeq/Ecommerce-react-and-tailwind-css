export const slideIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
  },
  show: {
    x: 0,
    y: 0,
  },
  transition: {
    type,
    delay,
    duration,
    ease: "easeOut",
  },
});

export const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    overflow: "hidden",
    x: direction === "left" ? "100%" : direction === "right" ? "-100%" : 0,
    y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const StaggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const childVariants = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: (custom) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      delay: custom * 0.3,
    },
  }),
};

export const textVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.4,
      type: "tween",
      ease: "easeOut",
    },
  },
};
