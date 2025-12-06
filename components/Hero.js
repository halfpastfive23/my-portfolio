"use client";

import { useState, useEffect } from "react";
import { Github, Download, ArrowDown, Code2, Sparkles } from "lucide-react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-visible bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      <div className="absolute inset-0 overflow-visible pointer-events-none">
        <div
          className="absolute top-[25vh] left-[-10vw] w-[20vw] h-[20vw] bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-float"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: "transform 0.5s ease-out",
          }}
        />

        <div
          className="absolute bottom-[25vh] right-[-15vw] w-[30vw] h-[30vw] bg-gradient-to-tl from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-float-delayed"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            transition: "transform 0.5s ease-out",
          }}
        />

        <div className="absolute top-[50%] left-[50%] w-[10vw] h-[10vw] bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-2xl animate-pulse-slow" />

        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-twinkle"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center overflow-visible">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm mb-8 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-sm text-emerald-300 font-medium">
            Available for opportunities
          </span>
        </div>

        {/* TITLE FIXED HERE */}
        <h1 className="flex flex-col font-bold text-white mb-6 leading-none">
          <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-4">
            Hello, I&apos;m
          </span>

          <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400 bg-clip-text text-transparent animate-gradient leading-[1.12]">
            Manojkumar
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed animate-fade-in-up animation-delay-400">
          A passionate Software Engineering student building modern web
          experiences with{" "}
          <span className="text-cyan-400 font-semibold inline-flex items-center gap-1">
            <Code2 className="w-5 h-5 inline" />
            Next.js
          </span>
          , <span className="text-blue-400 font-semibold">Tailwind CSS</span>,
          and cutting-edge technologies.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up animation-delay-600">
          <a
            href="https://github.com/halfpastfive23"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Github className="w-5 h-5" />
              View My Work
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Sparkles className="absolute right-2 top-2 w-4 h-4 text-white/50 group-hover:animate-spin" />
          </a>

          <a
            href="/Internship_Resume.pdf"
            download
            className="group px-8 py-4 bg-white/5 border-2 border-white/10 backdrop-blur-sm rounded-xl font-semibold text-white flex items-center gap-2 transition-all duration-300 hover:bg-white/10 hover:border-cyan-500/50 hover:scale-105 active:scale-95"
          >
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            Download CV
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-fade-in animation-delay-1200">
        <div className="flex flex-col items-center gap-2 cursor-pointer group">
          <span className="text-xs text-slate-400 uppercase tracking-wider group-hover:text-cyan-400 transition-colors">
            Scroll
          </span>
          <ArrowDown className="w-5 h-5 text-slate-400 animate-bounce group-hover:text-cyan-400 transition-colors" />
        </div>
      </div>
    </section>
  );
}
