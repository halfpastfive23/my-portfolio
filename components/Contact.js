"use client";

import ScrollFadeIn from "./ScrollFadeIn";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <ScrollFadeIn>
      <section id="contact">
        <div className="w-full py-20">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-4xl font-bold mb-6 text-black">Let&apos;s Connect</h2>
            <p className="text-black mb-8 max-w-xl mx-auto">
              Feel free to reach out via email or LinkedIn.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10">
              <a
                href="mailto:its.manojkumar23@gmail.com"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:scale-105 hover:bg-blue-700 transition transform duration-300"
              >
                <FaEnvelope className="text-lg" />
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/manojkumar-parkkunan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[#0077B5] text-white rounded-lg shadow-lg hover:scale-105 hover:bg-[#005983] transition transform duration-300"
              >
                <FaLinkedin className="text-lg" />
                LinkedIn
              </a>
            </div>

            <div className="text-gray-400 text-sm">
              © 2025 Manojkumar Parkkunan. All rights reserved.
            </div>
          </div>
        </div>
      </section>
    </ScrollFadeIn>
  );
}
