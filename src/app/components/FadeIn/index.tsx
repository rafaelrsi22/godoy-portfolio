import { motion } from "framer-motion";
import React from "react";

interface FadeInProps {
  duration: number;
  children: React.ReactNode;
}

export default function FadeIn({
  duration,
  children
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration }}
    >
      {children}
    </motion.div>
  );
}