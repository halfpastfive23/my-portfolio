"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const menuItems = ["Home", "About", "Projects", "Contact"];

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const listVariants = {
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0,
        when: "beforeChildren",
        staggerDirection: 1,
      },
    },
    hidden: {
      transition: {
        staggerChildren: 0.12,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
  };

  const itemVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    hidden: {
      opacity: 0,
      y: -25,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <div className="container">
      <motion.nav
        initial="visible"
        animate={showNavbar ? "visible" : "hidden"}
        className="fixed top-0 left-0 right-0 z-50 bg-transparent h-16 flex items-center"
        variants={listVariants}
      >
        <motion.h1
          className="text-2xl font-bold text-white ml-4 font-mono"
          variants={itemVariants}
          style={{ position: "fixed", left: "10px" }}
        >
          Manojkumar
        </motion.h1>

        <div className="max-w-7xl mx-auto flex flex-1 justify-center px-4 font-mono">
          <motion.ul className="flex space-x-10 text-gray-100 font-medium">
            {menuItems.map((item, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                className="hover:text-indigo-300 cursor-pointer"
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.nav>
    </div>
  );
}
