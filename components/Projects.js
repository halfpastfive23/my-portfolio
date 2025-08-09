"use client";

import { FaGithub } from "react-icons/fa";
import ScrollFadeIn from "./ScrollFadeIn";


export default function Projects() {
  const projectList = [
    {
      title: "Budget Tracker System",
      description: "A web app to manage income and expenses efficiently.",
      github: "https://github.com/halfpastfive23/budget-tracker",
    },
    {
      title: "Neovim Configurations",
      description: "Custom Neovim setup for improved developer productivity.",
      github: "https://github.com/halfpastfive23/mynvimconfiguration",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6 md:px-12">
        <ScrollFadeIn>
          <h2 className="text-3xl font-bold mb-8 text-[#FFFFFF]">Projects</h2>
        </ScrollFadeIn>

        <div className="grid gap-8 md:grid-cols-2">
          {projectList.map((project, index) => (
            <ScrollFadeIn key={index}>
              <div
                className="relative p-6 rounded-lg text-[#000000] overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                style={{
                  background: `linear-gradient(
                    270deg,
                    #b0b7bb,   /* soft silver-blue */
                    #dde1e4,   /* highlight */
                    #5a6a72,   /* deep titanium */
                    #9ca4a8,   /* mid-tone */
                    #b0b7bb
                  )`,
                  backgroundSize: "400% 400%",
                  animation: "titaniumShift 8s ease infinite",
                }}
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="mb-4">{project.description}</p>

                {/* GitHub floating button */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition transform"
                >
                  <FaGithub size={22} className="text-gray-800" />
                </a>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>

      {/* Titanium shimmer animation */}
      <style jsx>{`
        @keyframes titaniumShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
}
