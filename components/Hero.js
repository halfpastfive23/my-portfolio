export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center bg-cover"
      style={{
        backgroundImage: "url('/HeroImage.png')", 
        backgroundPosition: "center 18%",
      }}
    >
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center md:text-left">
        <h2 className="text-4xl font-mono md:text-6xl font-extrabold text-white">
          Hello, I’m <span className="text-[#f8f8f8e3]">Manojkumar</span>
        </h2>
        <p className="mt-4 text-lg font-mono text-gray-200 max-w-xl">
          A passionate Software Engineering student learning Next.js, Tailwind CSS, and building modern web experiences.
        </p>
        <div className="mt-6">
          {/* View My Work */}
          <a
            href="https://github.com/halfpastfive23"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700"
          >
            View My Work
          </a>

          {/* Download CV */}
          <a
            href="/Internship_Resume.pdf" // Place your CV PDF in /public
            download
            className="font-mono px-6 py-3 ml-4 border border-indigo-400 text-indigo-400 rounded-lg hover:bg-indigo-50 hover:text-indigo-600"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
