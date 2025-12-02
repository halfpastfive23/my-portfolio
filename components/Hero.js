"use client";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Hero() {
  const [lineOneComplete, setLineOneComplete] = useState(false);
  const [buttonsVisible, setButtonsVisible] = useState(false);

  return (
    <section
      id="home"
      className="relative z-10 min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center pt-14"
      style={{ backgroundImage: "url('/HeroImage2.jpg')" }}
    >
      {/* Content container */}
      <div className="container relative z-10 max-w-4xl mx-auto px-4 flex flex-col items-center text-center text-white">
        {/* Heading with type animation */}
        <h2 className="text-4xl md:text-6xl font-extrabold font-serif mb-4 md:mb-6">
          <TypeAnimation
            sequence={["Hello, I’m Manojkumar", () => setLineOneComplete(true)]}
            speed={50}
            wrapper="span"
            repeat={0}
            style={{ display: "inline-block" }}
            cursor={true}
          />
        </h2>

        {/* Subheading with type animation */}
        {lineOneComplete && (
          <p className="mt-4 text-lg md:text-xl font-serif max-w-2xl">
            <TypeAnimation
              sequence={[
                300, // Reduced delay before the text starts
                "A passionate Software Engineering student learning Next.js, Tailwind CSS, and building modern web experiences.",
                () => setButtonsVisible(true), // Show buttons after typing finishes
              ]}
              speed={60}
              wrapper="span"
              repeat={0}
              cursor={false}
            />
          </p>
        )}

        {/* Buttons with hover effects */}
        {buttonsVisible && (
          <motion.div
            className="mt-8 flex gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          >
            {/* View My Work button */}
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

            {/* Download CV button */}
            <motion.a
              href="/Internship_Resume.pdf"
              download
              whileHover={{
                scale: 1.05,
                y: -4,
                boxShadow: "0px 8px 15px rgba(0,0,0,0.5)",
              }}
              className="font-serif px-6 py-3 text-white rounded-lg shadow-lg bg-[#0e676cac]"
            >
              Download CV
            </motion.a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
