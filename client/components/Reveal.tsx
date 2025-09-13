import { motion } from "framer-motion";
import type { PropsWithChildren, ReactNode } from "react";

export default function Reveal({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children as ReactNode}
    </motion.div>
  );
}
