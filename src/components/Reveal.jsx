import { motion } from "framer-motion";

const Reveal = ({
  children,
  className = "",
  delay = 0,
  y = 24,
  duration = 0.55,
  once = true,
}) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once, amount: 0.25 }}
    transition={{ duration, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default Reveal;
