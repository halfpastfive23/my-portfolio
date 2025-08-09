"use client";

import ScrollFadeIn from "./ScrollFadeIn";
import Image from "next/image";

export default function About() {
  return (
    <ScrollFadeIn>
      <section id="about" className="py-20 font-helvetica">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center md:items-start gap-10 md:justify-between">
          {/* Left side: Text */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-helvetica mb-6 text-[#FFFFFF]">About Me</h2>
            <p className="text-lg text-[#FFFFFF] leading-relaxed max-w-xl">
              Hi, I’m Manojkumar — a Bachelor of Information Technology student
              majoring in Software Engineering, with an IT diploma under my
              belt. I love turning ideas into working software, whether it’s
              building web apps, exploring new tech, or solving tricky problems.
              I’m always looking for ways to learn, grow, and work with others
              on projects that make an impact.
            </p>
          </div>

          {/* Image */}
          <div className="md:w-auto flex justify-end">
            <div className="w-72 h-72 rounded-full overflow-hidden shadow-lg">
              <Image
                src="/AboutImage.jpeg"
                alt="About me"
                width={288}
                height={288}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </ScrollFadeIn>
  );
}
