// ++++++++++++++
// ++++++++++++++
// ++++++++++++++

// ORIGINAL

"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { PulsatingButtonCustom } from "../magicui/PulsatingButtonCustom";
import { useNavigate } from "react-router-dom";
import { LucideMoon, LucideSun } from "lucide-react";
import { RainbowButtonCustom } from "../magicui/rainbow-button-custom";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
// import logo from "../../assets/icons/creedCreation-dark.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const navigate = useNavigate();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        !event.target.closest(".mobile-menu-container") &&
        !event.target.closest(".hamburger-react")
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "PROJECTS", href: "#projects" },
    { name: "TEAM", href: "#team" },
    // { name: "CONTACT", href: "#contact" },
  ];

  const handleContactClick = () => {
    navigate("/contact");
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 h-20 flex items-center bg-transparent justify-between md:justify-between p-2 px-4 sm:px-12  z-50 transition-all duration-1000`}
    >
      {/* Logo and Brand Mobile*/}
      <div className="flex md:hidden items-center gap-x-2 text-2xl font-semibold">
        {/* <img
          src={logo}
          className="md:size-28 size-16 transition-all duration-1000"
          alt="LOGO"
        /> */}
        <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="58" height="58" rx="21" fill="#27272A" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M45 13H13V45H45V42.4405H15.5604V15.5604H45V13ZM44.9987 39.8795H44.9996V42.4395H42.4396V39.88H18.1186V18.1201H44.9987V27.7203H44.9997V30.2803H44.9987V39.8795ZM42.439 20.68H20.679V37.32H42.439V37.3199H44.998V30.2803H33.2139C33.385 29.8885 33.4799 29.4558 33.4799 29.0009C33.4799 28.5456 33.3848 28.1125 33.2134 27.7203H42.439V20.68Z" fill="white" />
          <circle cx="30.2805" cy="28.9998" r="2.24" fill="#FF6633" />
        </svg>

      </div>

      {/* NAV GROUP */}
      <div className="flex flex-col w-full space-y-2">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between w-full gap-10">
          <div className="flex items-center gap-x-2 text-2xl font-semibold">
            <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="58" height="58" rx="21" fill="#27272A" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M45 13H13V45H45V42.4405H15.5604V15.5604H45V13ZM44.9987 39.8795H44.9996V42.4395H42.4396V39.88H18.1186V18.1201H44.9987V27.7203H44.9997V30.2803H44.9987V39.8795ZM42.439 20.68H20.679V37.32H42.439V37.3199H44.998V30.2803H33.2139C33.385 29.8885 33.4799 29.4558 33.4799 29.0009C33.4799 28.5456 33.3848 28.1125 33.2134 27.7203H42.439V20.68Z" fill="white" />
              <circle cx="30.2805" cy="28.9998" r="2.24" fill="#FF6633" />
            </svg>

            <span className="text-white text-"></span>
          </div>

          <ul className="flex font-medium border-2 border-zinc-800 text-sm gap-x-4 p-1 rounded-full shadow-xl shadow-black/10 backdrop-blur-xl bg-black/45 }">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className={`${darkMode
                  ? "hover:bg-orange-600/65 text-white"
                  : "hover:bg-zinc-800 text-zinc-800 hover:text-white"
                  } px-3 py-2 hover:scale-105 duration-500 rounded-full cursor-pointer transition`}
                onClick={() => navigate(link.href)}
              >
                {link.name}
              </li>
            ))}
          </ul>

          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="bg-zinc-900 hover:bg-zinc-950  transition duration-700 text-white flex items-center space-x-2"
          >
            <span>CONTACT</span>
          </HoverBorderGradient>
        </div>

        {/* Desktop Navigation 2 when scrolled about 10 rem and this will be sticky , means when scrolling down, it disappears but when scrolled up slight, its visible again*/}
        {/* <div className="hidden md:flex items-center justify-center w-full gap-10">

          <div className="w-fit mx-auto flex space-x-10 p-0.5 px-4 border-2 border-zinc-800 rounded-full shadow-xl shadow-black/10 backdrop-blur-xl bg-black/45 ">
            <div className="flex items-center gap-x-2 text-2xl font-semibold">
              <span className={`inline pointer-events-none transition-all duration-1000 md:text-3xl font-bold ${darkMode ? 'text-white' : 'text-zinc-800'}`}>
                CC
              </span>
            </div>

            <ul className="flex font-medium  text-sm gap-x-4 p-0.5 }">
              {navLinks.map((link) => (
                <li
                  key={link.name}
                  className={`${darkMode ? 'hover:bg-orange-600/45 text-white' : 'hover:bg-zinc-800 text-zinc-800 hover:text-white'} px-3 py-2 hover:scale-105 duration-500 rounded-full cursor-pointer transition`}
                  onClick={() => navigate(link.href)}
                >
                  {link.name}
                </li>
              ))}
            </ul>

            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="bg-zinc-950 hover:scale-110 transition duration-700 text-white flex items-center space-x-2"
            >
              <span>CONTACT</span>
            </HoverBorderGradient></div>


        </div> */}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex justify-center items-center  gap-4">
        <button
          className="focus:outline-none z-40"
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
            className={`md:hidden absolute top-[calc(0rem)] right-0 w-64 h-[calc(100vh)] ${darkMode ? "bg-zinc-900" : "bg-white"
              } text-white backdrop-blur-3xl flex justify-start mobile-menu-container`}
          >
            <ul className="flex flex-col items-start pt-20 px-6 gap-4 font-semibold w-full">
              {navLinks.map((link) => (
                <>
                  <li
                    key={link.name}
                    className={`hover:text-blue-500 flex justify-start cursor-pointer transition w-full text-left py-2 ${darkMode ? "text-gray-300" : "text-gray-800"
                      }`}
                    onClick={() => {
                      navigate(link.href);
                      setIsOpen(false);
                    }}
                  >
                    {link.name}
                  </li>
                  <div className="w-full h-[0.5px] bg-zinc-300"></div>
                </>
              ))}

              <div className="mt-4">
                <HoverBorderGradient
                  containerClassName="rounded-full "
                  as="button"
                  className="bg-zinc-950 transition duration-700 text-white flex items-center space-x-2"
                >
                  <span>CONTACT</span>
                </HoverBorderGradient>
              </div>

            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
