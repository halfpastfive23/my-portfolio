export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact</h2>
        <p className="text-gray-600 mb-8">
          Let’s connect! Feel free to reach out via email or social media.
        </p>
        <a
          href="mailto:its.manojkumar23@gmail.com"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Email Me
        </a>
      </div>
    </section>
  );
}
