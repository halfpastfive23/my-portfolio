"use client"; 

import { motion } from "framer-motion";

export default function ScrollFadeIn({ children, delay = 0, y = 40}) {
    return (
        <motion.div
        initial={{ opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        >
      {children}
 </motion.div>
    );
}