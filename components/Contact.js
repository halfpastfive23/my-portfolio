import ScrollFadeIn from "./ScrollFadeIn";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <ScrollFadeIn>
      <section id="contact">
        <div
          className="w-full py-20"
          style={{
            backgroundColor: "rgba(0, 123, 255, 0.4)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
          }}
        >
          <div className="container mx-auto px-6 md:px-12 text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Contact</h2>
            <p className="text-white mb-8">
              Let’s connect! Feel free to reach out via email or LinkedIn.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              {/* Email Button */}
              <a
                href="mailto:its.manojkumar23@gmail.com"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:scale-105 hover:bg-blue-700 transition transform duration-300"
              >
                <FaEnvelope className="text-lg" />
                Email Me
              </a>

              {/* LinkedIn Button */}
              <a
                href="www.linkedin.com/in/manojkumar-parkkunan"
                target="_blank"
                rel="noopener noreferrer" //better naming needed 
                className="flex items-center gap-2 px-6 py-3 bg-[#0077B5] text-white rounded-lg shadow-lg hover:scale-105 hover:bg-[#005983] transition transform duration-300"
              >
                <FaLinkedin className="text-lg" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </ScrollFadeIn>
  );
}
