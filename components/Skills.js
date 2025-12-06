"use client";

import { Code2, Palette, Database, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const skills = [
  {
    name: "Next.js",
    icon: "/icons/nextjs.png",
    category: "Framework",
    gradient: "from-gray-500 to-gray-700",
  },
  {
    name: "Tailwind CSS",
    icon: "/icons/tailwind.png",
    category: "Styling",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    name: "JavaScript",
    icon: "/icons/javascript.png",
    category: "Language",
    gradient: "from-yellow-500 to-orange-600",
  },
  {
    name: "HTML",
    icon: "/icons/html.png",
    category: "Language",
    gradient: "from-orange-500 to-red-600",
  },
  {
    name: "MySQL",
    icon: "/icons/mysql.png",
    category: "Database",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    name: "TypeScript",
    icon: "/icons/typescript.png",
    category: "Language",
    gradient: "from-blue-600 to-blue-800",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-30 bg-[#0c1826] pt-1">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-48 sm:w-64 h-48 sm:h-64 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-56 sm:w-72 h-56 sm:h-72 bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center sm:text-left"
        >
          <div className="flex items-center justify-center sm:justify-start gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-[#dbc130]" />
            <span className="text-[#dbc130] font-semibold tracking-wider uppercase text-xs">
              Expertise
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
            Tech{" "}
            <span className="bg-gradient-to-r from-[#FFFFFF] via-[#6cb2be] to-[#1f539c] bg-clip-text text-transparent">
              Stack
            </span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative bg-[#141414] rounded-2xl p-4 sm:p-6 border border-gray-800 hover:border-purple-500/50 transition-all duration-300 flex flex-col items-center text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <div
                  className={`relative w-12 sm:w-14 h-12 sm:h-14 rounded-xl bg-gradient-to-br ${skill.gradient} p-0.5 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="w-full h-full bg-[#0A0A0A] rounded-xl flex items-center justify-center">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-6 sm:w-7 h-6 sm:h-7 object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-xs sm:text-sm font-semibold text-white mb-1 group-hover:text-purple-400 transition-colors">
                  {skill.name}
                </h3>
                <p className="text-[10px] sm:text-xs text-gray-500">
                  {skill.category}
                </p>
                <div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${skill.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Categories Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6"
        >
          <div className="flex items-center gap-2">
            <Code2 className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-gray-400">
              Languages & Frameworks
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Palette className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-gray-400">Styling & Design</span>
          </div>
          <div className="flex items-center gap-2">
            <Database className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-gray-400">Database & Backend</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
