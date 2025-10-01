"use client";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative z-10 min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center pt-14"
      style={{ backgroundImage: "url('/HeroImage1.jpeg')" }} 
    >
      {/* Content container */}
      <div className="container relative z-10 max-w-4xl mx-auto px-4 flex flex-col items-center text-center">
        {/* Heading */}
        <h2 className="text-4xl font-serif md:text-6xl font-extrabold text-white">
          <TypeAnimation
            sequence={["Hello, I’m Manojkumar", 1000]}
            speed={50}
            wrapper="span"
            repeat={0}
            style={{ color: "#FFFFFF", display: "inline-block" }}
            cursor={true}
          />
        </h2>

        {/* Paragraph */}
        <p className="mt-4 text-lg font-serif text-gray-200 max-w-xl">
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
              boxShadow: "0px 8px 15px rgba(0,0,0,0.5)",
            }}
            className="font-mono px-6 py-3 bg-[#4c0cd69d] text-white rounded-lg shadow-lg"
          >
            View My Work
          </motion.a>

          <motion.a
            href="/Internship_Resume.pdf"
            download
            whileHover={{
              scale: 1.05,
              y: -4,
              boxShadow: "0px 8px 15px rgba(0,0,0,0.5)",
            }}
            className="font-serif px-6 py-3 text-[#ffffff] rounded-lg shadow-lg bg-[#0e676cac]"
          >
            Download CV
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
