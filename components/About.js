"use client";

import ScrollFadeIn from "./ScrollFadeIn";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <ScrollFadeIn>
      <section id="about" className="py-20 bg-white font-sans">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 max-w-6xl">
          
          {/* Left side: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:w-6/12"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 tracking-tight">
              Hi, I’m Manojkumar
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              I’m a passionate Software Engineering student with a background
              in Information Technology. I love turning ideas into working software, whether it’s
              building web apps, exploring new tech, or solving tricky problems.
              I’m always looking for ways to learn, grow, and work with others
              on projects that make an impact.
            </p>
          </motion.div>

          {/* Right side: Floating circular image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="md:w-5/12 cursor-pointer rounded-full overflow-hidden shadow-xl"
            style={{ width: 400, height: 400 }}
            animate={{
              y: [0, -15, 0], // floating up and down by 15px
              transition: {
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              },
            }}
            whileHover={{ scale: 1.05, y: -20 }} // slightly bigger and lifted on hover
          >
            <Image
              src="/AboutImage.jpeg"
              alt="Manojkumar portrait"
              width={400}
              height={380}
              className="object-cover w-full h-full rounded-full object-center"
              priority
            />
          </motion.div>
        </div>
      </section>
    </ScrollFadeIn>
  );
}
