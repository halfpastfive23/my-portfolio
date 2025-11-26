"use client";

import React from "react";
import ScrollFadeIn from "./ScrollFadeIn";

const skills = [
  "Next.js",
  "Tailwind CSS",
  "JavaScript",
  "HTML",
  "MySQL",
  "TypeScript",
];

export default function Skills() {
  return (
    <ScrollFadeIn>
      <section id="skills" className="py-20 bg-[#fffdf9]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6 text-black text-center">
            Skills
          </h2>
          <div className="flex justify-center gap-3 flex-nowrap overflow-x-auto no-scrollbar">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="px-4 py-2 bg-gradient-to-br from-[#4e33fe] to-[#da826a] rounded-full shadow-lg text-white font-semibold text-base cursor-default select-none transition-transform duration-300 hover:scale-105 hover:brightness-110 whitespace-nowrap"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollFadeIn>
  );
}
