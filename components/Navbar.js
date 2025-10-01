"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const menuItems = ["Home", "About", "Projects", "Contact"];

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme on mount from saved preference or system settings
  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  // Scroll listener for navbar hide/show
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

  // Toggle dark mode and save to localStorage
  const toggleDarkMode = () => {
    const root = window.document.documentElement;
    if (root.classList.contains("dark")) {
      root.classList.remove("dark");
      setIsDarkMode(false);
      window.localStorage.setItem("theme", "light");
    } else {
      root.classList.add("dark");
      setIsDarkMode(true);
      window.localStorage.setItem("theme", "dark");
    }
  };

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

  // Split menu items to put hanging light in middle
  const half = Math.ceil(menuItems.length / 2);
  const firstHalf = menuItems.slice(0, half);
  const secondHalf = menuItems.slice(half);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent h-16 flex items-center justify-center px-6 max-w-7xl mx-auto">
      <motion.ul
        className="flex space-x-10 font-mono text-gray-100 font-medium items-center"
        initial="visible"
        animate={showNavbar ? "visible" : "hidden"}
        variants={listVariants}
      >
        {firstHalf.map((item, i) => (
          <motion.li
            key={i}
            variants={itemVariants}
            className="hover:text-indigo-300 cursor-pointer"
          >
            {item}
          </motion.li>
        ))}

        {/* Hanging light bulb toggle */}
        <motion.li
          variants={itemVariants}
          className="cursor-pointer relative flex flex-col items-center"
          onClick={toggleDarkMode}
          aria-label="Toggle Dark Mode"
          title="Toggle Dark Mode"
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill={isDarkMode ? "none" : "yellow"}
            stroke={isDarkMode ? "gray" : "yellow"}
            strokeWidth={2}
            viewBox="0 0 24 24"
            initial={{ scale: 1 }}
            animate={{ scale: isDarkMode ? 0.9 : 1.1 }}
            transition={{ yoyo: Infinity, duration: 1 }}
          >
            <path d="M9 21h6v-1H9v1z" />
            <path d="M14 10a2 2 0 11-4 0c0-1.11 1.03-2 2-2s2 .89 2 2z" />
            <path d="M12 1a6 6 0 00-6 6c0 3.5 3 6 6 6s6-2.5 6-6a6 6 0 00-6-6z" />
          </motion.svg>
          <div
            className={`mt-1 h-16 w-0.5 bg-yellow-300 animate-pulse ${
              isDarkMode ? "opacity-20" : "opacity-100"
            }`}
          />
        </motion.li>

        {secondHalf.map((item, i) => (
          <motion.li
            key={i + half}
            variants={itemVariants}
            className="hover:text-indigo-300 cursor-pointer"
          >
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
}
