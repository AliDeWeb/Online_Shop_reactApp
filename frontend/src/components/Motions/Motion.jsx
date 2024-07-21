import { AnimatePresence, motion } from "framer-motion";

function Motion({ children }) {
  return <AnimatePresence mode="wait">{children}</AnimatePresence>;
}

function MotionOpacity({ children, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5, ease: "circIn" } }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: "circOut" } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function MotionPage({ children, className = "" }) {
  return (
    <motion.div
      initial={{ scale: 0.9 }}
      animate={{ scale: 1, transition: { ease: "backOut", duration: 0.5 } }}
      exit={{ scale: 0.9, transition: { duration: 0.3, ease: "backIn" } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

Motion.page = MotionPage;
Motion.opacity = MotionOpacity;
export default Motion;
