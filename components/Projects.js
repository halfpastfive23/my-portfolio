export default function Projects() {
  const projectList = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio built with Next.js and Tailwind CSS.",
    },
    {
      title: "E-commerce App",
      description: "Full-stack online store with authentication and payment integration.",
    },
    {
      title: "Chat Application",
      description: "Real-time chat app with WebSocket and Firebase backend.",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
