import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

const MotionDiv = motion.div;

const ParallaxSection = ({ children, className = "", strength = 24 }) => {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [strength, -strength]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1, 0.96]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.45, 1, 1, 0.45]);

  return (
    <MotionDiv
      ref={ref}
      className={className}
      style={{
        y: reduceMotion ? 0 : y,
        scale: reduceMotion ? 1 : scale,
        opacity: reduceMotion ? 1 : opacity,
        willChange: "transform, opacity",
      }}
    >
      {children}
    </MotionDiv>
  );
};

export default ParallaxSection;
