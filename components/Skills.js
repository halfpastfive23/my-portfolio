import ScrollFadeIn from "./ScrollFadeIn";

export default function Skills() {

  const skills = ["Next.js", "Tailwind CSS", "JavaScript", "React", "Node.js"];

  return (
    <ScrollFadeIn>
    <section id="skills" className="py-20 font-mono">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold mb-6 text-[#FFFFFF]">Skills</h2>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-[#000000] border rounded-full shadow-sm hover:shadow-md transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
    </ScrollFadeIn>
  );
}
