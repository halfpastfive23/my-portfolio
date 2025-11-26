"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const menuItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll listener for navbar hide/show on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 30) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const listVariants = {
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0,
        when: "beforeChildren",
        staggerDirection: 1,
      },
    },
    hidden: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
  };

  const itemVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] },
    },
    hidden: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] },
    },
  };

  // Optional helper to jump instantly (not smooth scroll) on click
  const jumpToSection = (e, href) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "auto" });  // instant jump, change to 'smooth' if preferred
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent h-16 flex items-center justify-center px-6 max-w-7xl mx-auto">
      <motion.ul
        className="flex space-x-10 font-mono text-gray-100 font-medium items-center"
        initial="visible"
        animate={showNavbar ? "visible" : "hidden"}
        variants={listVariants}
      >
        {menuItems.map((item, i) => (
          <motion.li
            key={i}
            variants={itemVariants}
            className="hover:text-indigo-300 cursor-pointer"
          >
            <a
              href={item.href}
              className="block py-2"
              onClick={(e) => jumpToSection(e, item.href)}
            >
              {item.name}
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
}
