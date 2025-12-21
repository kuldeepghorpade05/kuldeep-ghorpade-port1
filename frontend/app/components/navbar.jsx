"use client";

// @flow strict
import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "ABOUT", href: "/#about" },
    { name: "EXPERIENCE", href: "/#experience" },
    { name: "SKILLS", href: "/#skills" },
    { name: "EDUCATION", href: "/#education" },
    { name: "BLOGS", href: "/blog" },
    { name: "PROJECTS", href: "/#projects" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled ? "bg-[#0d1224]/80 backdrop-blur-md border-b border-[#1b2c68a0] py-3" : "bg-transparent py-5"}`}>
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] flex items-center justify-between">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
          className="flex flex-shrink-0 items-center"
        >
          <Link
            href="/"
            className="text-[#16f2b3] text-2xl md:text-3xl font-bold tracking-wider flex"
          >
            {personalData.name.toUpperCase().split("").map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: index * 0.05
                    }
                  },
                  shimmer: {
                    color: ["#16f2b3", "#ec4899", "#16f2b3"],
                    scale: [1, 1.2, 1],
                    transition: {
                      repeat: Infinity,
                      duration: 3,
                      ease: "easeInOut",
                      delay: index * 0.15
                    }
                  }
                }}
                initial="hidden"
                animate={["visible", "shimmer"]}
                whileHover={{
                  scale: 1.3,
                  color: "#ffffff",
                  transition: { duration: 0.2 }
                }}
                className="inline-block cursor-default"
                style={{ whiteSpace: char === " " ? "pre" : "normal" }}
              >
                {char}
              </motion.span>
            ))}
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-4">
          {navLinks.map((link, index) => (
            <motion.li
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                className="relative group px-4 py-2 no-underline outline-none"
                href={link.href}
              >
                <span className="text-sm font-medium text-white transition-colors duration-300 group-hover:text-[#16f2b3]">
                  {link.name}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#16f2b3] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[#16f2b3] p-2 focus:outline-none"
          >
            {isMobileMenuOpen ? <IoClose size={30} /> : <HiMenuAlt3 size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0d1224]/95 backdrop-blur-lg border-b border-[#1b2c68a0] overflow-hidden"
          >
            <ul className="flex flex-col items-center py-8 space-y-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium text-white hover:text-[#16f2b3] transition-colors duration-300"
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;