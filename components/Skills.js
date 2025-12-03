"use client";

import React from "react";
import ScrollFadeIn from "./ScrollFadeIn";
import { motion } from "framer-motion";

const skills = [
  { name: "Next.js", icon: "/icons/nextjs.png", desc: "Framework" },
  {
    name: "Tailwind CSS",
    icon: "/icons/tailwind.png",
    desc: "Utility-first CSS framework",
  },
  {
    name: "JavaScript",
    icon: "/icons/javascript.png",
    desc: "Programming Language",
  },
  { name: "HTML", icon: "/icons/html.png", desc: "Programming Language" },
  { name: "MySQL", icon: "/icons/mysql.png", desc: "Database" },
  {
    name: "TypeScript",
    icon: "/icons/typescript.png",
    desc: "Programming Language",
  },
];

export default function Skills() {
  return (
    <ScrollFadeIn>
      <section
        id="skills"
        className="relative py-24 bg-[#000000] text-white overflow-hidden"
      >
        {/* Background subtle pattern */}
        <div className="absolute inset-0 opacity-[0.08] bg-[url('/grid.svg')] bg-cover"></div>

        <div className="relative z-10 container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center text-[#ffffff]"
          >
            Tech Stack
          </motion.h2>

          {/* Skill Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-6 rounded-2xl bg-[#131313] border border-[#2a2a2a] shadow-[0_0_20px_rgba(0,0,0,0.35)] hover:border-[#f6a623] transition-all duration-300"
              >
                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 blur-xl bg-[#f6a623] transition-all duration-500 rounded-2xl"></div>

                {/* Icon */}
                <div className="relative flex items-center gap-4 z-10">
                  <div className="w-14 h-14 rounded-xl bg-[#1c1c1c] border border-[#292929] flex items-center justify-center group-hover:border-[#f6a623] transition-all duration-300">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-8 h-8 opacity-90 group-hover:opacity-100 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-[#f6a623] transition-colors duration-300">
                      {skill.name}
                    </h3>
                    <p className="text-sm opacity-60">{skill.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </ScrollFadeIn>
  );
}
