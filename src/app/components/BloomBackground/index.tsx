import React from 'react';
import { motion } from 'framer-motion';

export default function BloomBackground() {
  return (
    <motion.div
      className="absolute h-full w-full pointer-events-none select-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3, ease: "easeInOut" }}
    >
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 50% -20%, rgba(171, 119, 226, 0.35) 0%, rgba(9, 9, 11, 0) 70%)",
            "radial-gradient(circle at 52% -18%, rgba(171, 119, 226, 0.35) 0%, rgba(9, 9, 11, 0) 70%)",
            "radial-gradient(circle at 48% -22%, rgba(171, 119, 226, 0.35) 0%, rgba(9, 9, 11, 0) 70%)",
            "radial-gradient(circle at 50% -20%, rgba(171, 119, 226, 0.35) 0%, rgba(9, 9, 11, 0) 70%)",
          ],
        }}
        transition={{
          duration: 25,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </motion.div>
  );
}
