import { motion } from "framer-motion";

interface TransitionProps {
  disabled?: boolean;
  children: any;
}

const Transition = ({ children, disabled = false }: TransitionProps) => {
  if (disabled) {
    return children;
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: {
            delay: 0.3,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default Transition;
