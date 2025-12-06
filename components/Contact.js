"use client";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";
import * as THREE from "three";

// 3D Tilt Card Component
function TiltCard({ children, href, target, rel }) {
  const ref = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(mouseY, { stiffness: 200, damping: 20 });
  const rotateY = useSpring(mouseX, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    mouseX.set((centerX - x) / 15); // smaller tilt
    mouseY.set((y - centerY) / 15);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        display: "inline-block",
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      animate={{
        rotateX,
        rotateY,
      }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
      className="relative group"
    >
      <div className="absolute inset-0 rounded-xl blur-xl opacity-0 group-hover:opacity-50 bg-gradient-to-r from-purple-500 via-pink-500 to-emerald-500 transition-opacity duration-500" />
      {children}
    </motion.a>
  );
}

export default function Contact3D() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { damping: 30, stiffness: 100 });
  const smoothMouseY = useSpring(mouseY, { damping: 30, stiffness: 100 });

  // Magnetic cursor effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
    };
    const container = containerRef.current;
    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Three.js 3D Background
  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const resize = () => {
      const { width, height } = canvas.parentElement.getBoundingClientRect();
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    resize();
    window.addEventListener("resize", resize);

    camera.position.z = 5;

    // Floating shapes
    const shapes = [];
    for (let i = 0; i < 6; i++) {
      const geometry =
        i % 2 === 0
          ? new THREE.BoxGeometry(0.2, 0.2, 0.2)
          : new THREE.OctahedronGeometry(0.15);
      const material = new THREE.MeshBasicMaterial({
        color: i % 3 === 0 ? 0xa855f7 : i % 3 === 1 ? 0xec4899 : 0x10b981,
        wireframe: true,
        transparent: true,
        opacity: 0.3,
      });
      const shape = new THREE.Mesh(geometry, material);
      shape.position.set(
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 3
      );
      shapes.push({ mesh: shape, speed: Math.random() * 0.01 + 0.005 });
      scene.add(shape);
    }

    // Particles
    const particleCount = 300;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++)
      positions[i] = (Math.random() - 0.5) * 10;
    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0x9b87f5,
      size: 0.03,
      transparent: true,
      opacity: 0.5,
    });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    const animate = () => {
      requestAnimationFrame(animate);
      shapes.forEach((s) => {
        s.mesh.rotation.x += s.speed;
        s.mesh.rotation.y += s.speed;
      });
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      renderer.dispose();
      shapes.forEach((s) => {
        s.mesh.geometry.dispose();
        s.mesh.material.dispose();
      });
      particlesGeometry.dispose();
      particlesMaterial.dispose();
    };
  }, []);

  return (
    <section ref={containerRef} className="relative overflow-hidden py-20">
      {/* 3D Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-[#060c14]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-emerald-400 bg-clip-text text-transparent">
            Let&apos;s Connect
          </span>
        </motion.h2>

        <motion.p
          className="text-gray-300 text-base md:text-lg mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Feel free to reach out via email or LinkedIn. I&apos;m always open to
          discussing new projects and opportunities.
        </motion.p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
          <TiltCard href="mailto:its.manojkumar23@gmail.com">
            <div className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg shadow-md text-sm sm:text-base">
              <Mail className="w-5 h-5" />
              Email Me
            </div>
          </TiltCard>

          <TiltCard
            href="https://www.linkedin.com/in/manojkumar-parkkunan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0077B5] to-[#005983] text-white rounded-lg shadow-md text-sm sm:text-base">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </div>
          </TiltCard>
        </div>

        <p className="text-gray-500 text-sm">
          © 2025 Manojkumar Parkkunan. All rights reserved.
        </p>
      </div>

      {/* Floating cursor glow */}
      <motion.div
        className="pointer-events-none absolute z-20 w-64 h-64 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)",
          x: useTransform(
            smoothMouseX,
            [0, 1],
            [-100, typeof window !== "undefined" ? window.innerWidth - 100 : 0]
          ),
          y: useTransform(
            smoothMouseY,
            [0, 1],
            [-100, typeof window !== "undefined" ? window.innerHeight - 100 : 0]
          ),
        }}
      />
    </section>
  );
}
