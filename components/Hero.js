"use client";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center pt-14"
      style={{ backgroundImage: "url('/HeroImage1.jpg')" }} // Replace with your image path
    >
      {/* Content container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col items-center text-center">
        {/* Heading */}
        <h2 className="text-4xl font-mono md:text-6xl font-extrabold text-white">
          <TypeAnimation
            sequence={["Hello, I’m Manojkumar", 1000]}
            speed={50}
            wrapper="span"
            repeat={0}
            style={{ color: "#FFFFFF", display: "inline-block" }}
            cursor={false}
          />
        </h2>

        {/* Paragraph */}
        <p className="mt-4 text-lg font-mono text-gray-200 max-w-xl">
          <TypeAnimation
            sequence={[
              1500,
              "A passionate Software Engineering student learning Next.js, Tailwind CSS, and building modern web experiences.",
            ]}
            speed={60}
            wrapper="span"
            repeat={0}
            cursor={false}
          />
        </p>

        {/* Buttons */}
        <motion.div
          className="mt-8 flex gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 6.5, duration: 0.6, ease: "easeOut" }}
        >
          <motion.a
            href="https://github.com/halfpastfive23"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
              y: -3,
              boxShadow: "0px 8px 15px rgba(0,0,0,0.3)",
            }}
            className="font-mono px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-lg"
          >
            View My Work
          </motion.a>

          <motion.a
            href="/Internship_Resume.pdf"
            download
            whileHover={{
              scale: 1.05,
              y: -3,
              boxShadow: "0px 8px 15px rgba(0,0,0,0.3)",
            }}
            className="font-mono px-6 py-3 border border-indigo-400 text-indigo-400 rounded-lg shadow-lg bg-white/5 backdrop-blur-sm"
          >
            Download CV
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
