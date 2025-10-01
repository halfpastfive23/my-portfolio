"use client";

import { useState, useRef, useEffect } from "react";
import { FaGithub } from "react-icons/fa";

function ScrollFadeIn({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // animate once
        }
      });
    });

    observer.observe(domRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-opacity duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </div>
  );
}

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
          <h2 className="text-3xl font-bold mb-8 text-white">Projects</h2>
        </ScrollFadeIn>

        <div className="grid gap-8 md:grid-cols-2">
          {projectList.map((project, index) => (
            <ScrollFadeIn key={index}>
              <div
                className="relative p-6 rounded-lg text-black overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                style={{
                  background: `linear-gradient(
                    270deg,
                    #b0b7bb,
                    #dde1e4,
                    #5a6a72,
                    #9ca4a8,
                    #b0b7bb
                  )`,
                  backgroundSize: "400% 400%",
                  animation: "titaniumShift 8s ease infinite",
                }}
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="mb-4">{project.description}</p>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} GitHub repository`}
                  className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition transform"
                >
                  <FaGithub size={22} className="text-gray-800" />
                </a>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>

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
