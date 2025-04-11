"use client";

import React, { useState, useEffect } from "react";
// import logo from "../../assets/icons/digilynk_dark.png";
// import logoLight from "../../assets/icons/digilynk_light.png";
import { motion, AnimatePresence } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { PulsatingButtonCustom } from "../magicui/PulsatingButtonCustom";
import { useNavigate } from "react-router-dom";
import { LucideMoon, LucideSun } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const navigate = useNavigate();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.mobile-menu-container') &&
        !event.target.closest('.hamburger-react')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "PROJECTS", href: "#projects" },
    { name: "TEAM", href: "#team" },
    { name: "CONTACT", href: "#contact" },
  ];

  const handleContactClick = () => {
    navigate("/contact");
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 h-20 flex shadow-xl shadow-black/10 ${darkMode ? 'bg-zinc-900 border-gray-700' : 'bg-slate-200 border-gray-500'} border-b-2 items-center  justify-between md:justify-between p-2 px-4 sm:px-12 backdrop-blur-3xl z-50 transition-all duration-1000`}>

      <div className="flex items-center gap-x-2 text-2xl font-semibold">
        {/* <img src={darkMode ? logoLight : logo} className="md:size-12 size-8 transition-all duration-1000" alt="LOGO" /> */}
        <span className={`inline transition-all duration-1000 md:text-3xl font-bold ${darkMode ? 'text-white' : 'text-zinc-800'}`}>
          CC
        </span>
      </div>
      {/* Desktop Navigation */}
    <div className="hidden md:flex items-center justify-end w-full gap-10">

        {/* Logo and Brand */}

        <ul className="flex font-semibold text-sm gap-x-2">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className={`${darkMode ? 'hover:bg-gray-700 text-white' : 'hover:bg-zinc-800 text-zinc-800 hover:text-white'} px-3 py-2 rounded-md hover:border-b-blue-500 cursor-pointer transition`}
              onClick={() => navigate(link.href)}
            >
              {link.name}
            </li>
          ))}
        </ul>



      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center  gap-4">

        <button
          className="focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <Hamburger
            toggled={isOpen}
            duration={0.4}
            toggle={setIsOpen}
            color={darkMode ? "#ffffff" : "#1f2937"}
          />
        </button>
      </div>

      {/* Original Style Mobile Menu - Not Full Page */}
      <AnimatePresence className="">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: -0 }}
            exit={{ opacity: 1, x: 300 }}
            transition={{ type: "tween", duration: 0.5, ease: "easeOut" }}
            className={`md:hidden absolute top-[calc(5rem)] right-0 w-64 h-[calc(100vh)] ${darkMode ? 'bg-zinc-900' : 'bg-white'} text-white backdrop-blur-3xl flex justify-start mobile-menu-container`}
          >
            <ul className="flex flex-col items-start pt-8 px-6 gap-4 font-semibold w-full">
              <li className="text-3xl font-bold flex justify-start cursor-pointer transition w-full text-left py-4">
                CC
              </li>
              {navLinks.map((link) => (
                <li
                  key={link.name}
                  className={`hover:text-blue-500 flex justify-start cursor-pointer transition w-full text-left py-2 ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}
                  onClick={() => {
                    navigate(link.href);
                    setIsOpen(false);
                  }}
                >
                  {link.name}
                </li>
              ))}

            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}