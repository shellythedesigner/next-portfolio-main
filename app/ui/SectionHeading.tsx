import { motion } from "framer-motion";
import { ReactNode } from "react";

type childrenProp = {
  children: ReactNode;
};

export default function SectionHeading({ children }: childrenProp) {
  return (
    <motion.h2 className="text-3xl font-medium capitalize mb-8 text-center">
      {children}
    </motion.h2>
  );
}
