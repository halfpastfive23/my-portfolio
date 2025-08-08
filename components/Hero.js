export default function Hero() {
  return (
    <section className="bg-gray-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 text-center md:text-left">
        <h2 className="text-4xl font-mono md:text-6xl font-extrabold text-gray-800">
          Hello, I’m <span className="text-indigo-600">Manojkumar</span>
        </h2>
        <p className="mt-4 text-lg font-mono text-gray-600 max-w-xl">
          A passionate Software Engineering student learning Next.js, Tailwind CSS, and building modern web experiences.
        </p>
        <div className="mt-6">
          <button className="font-mono px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700">
            View My Work
          </button>
          <button className="font-mono px-6 py-3 ml-4 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}
