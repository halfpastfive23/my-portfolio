"use client";

import { motion } from "framer-motion";
import { User, Sparkles, Code2, GraduationCap, Briefcase } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: GraduationCap,
      label: "Student",
      value: "Software Engineering",
      gradient: "from-purple-500 to-indigo-600",
    },
    {
      icon: Code2,
      label: "Focus",
      value: "Web Development",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      icon: Briefcase,
      label: "Background",
      value: "Information Technology",
      gradient: "from-blue-500 to-cyan-600",
    },
  ];

  return (
    <section id="about" className="relative py-20 bg-[#0c1826] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-[#dbc130]" />
            <span className="text-[#dbc130] font-semibold tracking-wider uppercase text-xs">
              About Me
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Hi, I&apos;m{" "}
            <span className="bg-[#FFFFFF] bg-clip-text text-transparent">
              Manojkumar
            </span>
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="relative group">
              {/* Geometric Accent Shapes Instead of Outer Glow */}
              <motion.div
                className="absolute -top-8 -right-2 w-20 h-20 border-2 border-purple-500/30 rounded-lg"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -bottom-8 -left-8 w-16 h-16 border-2 border-emerald-500/30 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -top-5 -left-20 w-30 h-30 border-2 border-[#1b86d948] rounded-lg"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              {/* Image Container */}
              <motion.div
                className="relative rounded-full overflow-hidden border-4 border-[#141414] shadow-2xl"
                style={{
                  width: "100%",
                  maxWidth: 400,
                  aspectRatio: "1/1",
                  margin: "0 auto",
                }}
                animate={{
                  y: [0, -15, 0],
                  transition: {
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                  },
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                <img
                  src="/AboutImage.jpeg"
                  alt="Manojkumar portrait"
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Description Card */}
            <div className="bg-[#ffffffcf] rounded-2xl p-8 border border-gray-800 hover:border-[#00aeff] transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FFFFFF] via-[#8bd0f3] to-[#021370] flex items-center justify-center flex-shrink-0">
                  <User className="w-6 h-6 text-[#ffffff]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0000008d] mb-2">
                    About
                  </h3>
                  <p className="text-[#0000008d] leading-relaxed">
                    I&apos;m a passionate Software Engineering student with a
                    background in Information Technology. I love turning ideas
                    into working software, whether it&apos;s building web apps,
                    exploring new tech, or solving tricky problems. I&apos;m
                    always looking for ways to learn, grow, and work with others
                    on projects that make an impact.
                  </p>
                </div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-[#13262fee] rounded-xl p-5 border border-gray-800 hover:border-[#7300ff] transition-all duration-300"
                >
                  {/* Glow for group of small containers*/}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#e3d0f1] via-[#c91313] to-[#1c0189] opacity-70 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

                  {/* Icon */}
                  <div
                    className={`relative w-10 h-10 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className="w-5 h-5 text-white" />
                  </div>

                  {/* Text */}
                  <div className="relative">
                    <p className="text-xs text-[#f4f3f3e1] mb-1">
                      {item.label}
                    </p>
                    <p className="text-sm font-semibold text-[#f3f5f4] group-hover:text-[#01c5b4] transition-colors">
                      {item.value}
                    </p>
                  </div>

                  {/* Bottom Accent */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${item.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
