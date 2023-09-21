import { motion } from "framer-motion";
import React from "react";

const quote = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.09,
    },
  },
};
const signgleWord = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};
interface props {
  text: string;
  className?: string;
  classBox?: string;
}

const AnimationText = ({ text, className, classBox }: props) => {
  return (
    <div className={classBox}>
      <motion.h1
        variants={quote}
        initial="hidden"
        animate="show"
        className={className}>
        {text !== null &&
          text.split("").map((word, index) => (
            <motion.span key={word + "-" + index} variants={signgleWord}>
              {word}
            </motion.span>
          ))}
      </motion.h1>
    </div>
  );
};

export default AnimationText;
