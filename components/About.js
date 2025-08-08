export default function About() {
  return (
    <section id="about" className="py-20 font-mono bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Left side: Text */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">About Me</h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
            Hi! I’m [Your Name], a passionate software engineer who loves building 
            modern web applications using Next.js, Tailwind CSS, and more.  
            My focus is on creating fast, responsive, and visually appealing 
            applications with a great user experience.
          </p>
        </div>

        {/* Right side: Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src="/AboutImage.jpeg" // Replace with your image path in /public
            alt=""
            className="w-70 h-70 rounded-full object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
