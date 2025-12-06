"use client";

import { ArrowUpRight, Github, Code2, Terminal, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectShowcase() {
  const projects = [
    {
      id: 1,
      title: "Budget Tracker System",
      description: "A web app to manage income and expenses efficiently.",
      github: "https://github.com/halfpastfive23/budget-tracker",
      tags: ["Web App", "Finance", "Full-Stack"],
      color: "#10B981",
      gradient: "from-emerald-500 to-teal-600",
      icon: Code2,
    },
    {
      id: 2,
      title: "Neovim Configurations",
      description: "Custom Neovim setup for developer productivity.",
      github: "https://github.com/halfpastfive23/mynvimconfiguration",
      tags: ["Development", "Config", "Productivity"],
      color: "#8B5CF6",
      gradient: "from-purple-500 to-indigo-600",
      icon: Terminal,
    },
  ];

  return (
    <div className="bg-[#0c1826] pb-20 md:pb-28">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-5 w-48 h-44 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-5 w-64 h-54 bg-emerald-500/10 rounded-full blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative max-w-7xl mx-auto px-6 py-10 md:py-14"
        >
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-[#dbc130]" />
            <span className="text-[#dbc130] font-semibold tracking-wider uppercase text-xs">
              Personal
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">
            Featured
            <br />
            <span className="bg-gradient-to-r from-[#FFFFFF] via-[#6cb2be] to-[#1f539c] bg-clip-text text-transparent">
              Projects
            </span>
          </h1>

          <p className="text-base text-gray-400 max-w-xl leading-relaxed">
            Innovative solutions built with modern technologies and clean
            architecture.
          </p>
        </motion.div>
      </div>

      {/* Projects Section */}
      <div className="max-w-7xl mx-auto px-6 py-8 md:py-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Project 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 group relative"
          >
            <div className="relative bg-gradient-to-br from-[#141414] to-[#0D0D0D] rounded-2xl overflow-hidden border border-gray-800 hover:border-emerald-500/50 transition-all duration-500">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-all duration-500" />

              <div className="relative p-6 md:p-8 flex flex-col h-full">
                {/* Icon + GitHub */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Code2 className="w-6 h-6 text-white" />
                  </div>

                  <a
                    href={projects[0].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-gray-800/50 hover:bg-gray-800 flex items-center justify-center border border-gray-700 hover:border-emerald-500 transition-all group/btn"
                  >
                    <Github className="w-4 h-4 text-gray-400 group-hover/btn:text-emerald-400 transition-colors" />
                  </a>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                    {projects[0].title}
                  </h2>

                  <p className="text-sm text-gray-400 leading-relaxed mb-4">
                    {projects[0].description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {projects[0].tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Project Link */}
                <a
                  href={projects[0].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white font-semibold text-sm group-hover:gap-3 transition-all"
                >
                  View Project
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 group relative"
          >
            <div className="relative bg-gradient-to-br from-[#141414] to-[#0D0D0D] rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all duration-500">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl group-hover:bg-purple-500/10 transition-all duration-500" />

              <div className="relative p-6 md:p-8 flex flex-col h-full">
                {/* Icon + GitHub */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Terminal className="w-6 h-6 text-white" />
                  </div>

                  <a
                    href={projects[1].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-gray-800/50 hover:bg-gray-800 flex items-center justify-center border border-gray-700 hover:border-purple-500 transition-all group/btn"
                  >
                    <Github className="w-4 h-4 text-gray-400 group-hover/btn:text-purple-400 transition-colors" />
                  </a>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                    {projects[1].title}
                  </h2>

                  <p className="text-sm text-gray-400 leading-relaxed mb-4">
                    {projects[1].description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {projects[1].tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Project Link */}
                <a
                  href={projects[1].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white font-semibold text-sm group-hover:gap-3 transition-all"
                >
                  View Project
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Stats Section */}
      <div className="max-w-7xl mx-auto px-6 py-6 mb-12 grid grid-cols-1 md:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-[#141414] rounded-xl p-6 border border-gray-800"
          >
            {i === 1 && (
              <>
                <div className="text-3xl font-bold text-white mb-1">2+</div>
                <div className="text-sm text-gray-400">Projects Built</div>
              </>
            )}

            {i === 2 && (
              <>
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent mb-1">
                  Open Source
                </div>
                <div className="text-sm text-gray-400">
                  All Projects Available
                </div>
              </>
            )}

            {i === 3 && (
              <>
                <div className="text-3xl font-bold text-white mb-1">∞</div>
                <div className="text-sm text-gray-400">Learning & Building</div>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
