"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { GlowingEffect } from "../../ui/glowing-effect";

export default function ProcessFlow() {
  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <section
      id="process-flow"
      ref={containerRef}
      className="flex flex-col min-h-screen items-center justify-center border-b-2 border-slate-500 shadow-2xl p-5 bg-zinc-950 relative overflow-hidden"
    >
      <div className="z-10 flex w-full text-white items-center justify-center pb-16 text-3xl md:text-5xl font-bold">
        How It Works
      </div>

      <div className="relative w-full max-w-6xl mx-auto px-4">
        {/* Fixed Horizontal Line (Desktop) */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[6px] mx-10 overflow-hidden z-0">
          <motion.div
            className="h-full w-[200%] absolute"
            animate={{
              x: ["-100%", "0%"],
            }}
            transition={{
              duration: 6,
              ease: "linear",
              repeat: Infinity,
            }}
            style={{
              background:
                "linear-gradient(90deg, rgba(255,0,140,1) 0%, rgba(0,112,243,1) 33%, rgba(255,165,2,1) 66%, rgba(255,0,0,1) 100%)",
              filter: "blur(2px)",
            }}
          />
        </div>

        {/* Fixed Vertical Line (Mobile) */}
        <div className="md:hidden absolute left-1/2 top-0 bottom-0 w-[4px] overflow-hidden z-0">
          <motion.div
            className="w-full h-[200%] absolute"
            animate={{
              y: ["-100%", "0%"],
            }}
            transition={{
              duration: 6,
              ease: "linear",
              repeat: Infinity,
            }}
            style={{
              background:
                "linear-gradient(180deg, rgba(255,0,140,1) 0%, rgba(0,112,243,1) 33%, rgba(255,165,2,1) 66%, rgba(255,0,0,1) 100%)",
              filter: "blur(4px)",
            }}
          />
        </div>

        <ul className="z-10 grid md:grid-cols-5 grid-cols-1 md:gap-8 gap-10 relative">
          <GridItem title="IDEA" color="#ff008c" />
          <GridItem title="RESEARCH" color="#0070f3" />
          <GridItem title="BRAIN STORM" color="#ffa502" />
          <GridItem title="VISION" color="#ff0000" />
          <GridItem title="DECIDE" color="#ff008c" />
        </ul>
      </div>
    </section>
  );
}

const GridItem = ({ title, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li className="list-none z-10 mx-auto md:mx-0">
      <motion.div
        className="relative bg-zinc-900 w-[180px] md:w-auto rounded-2xl border-[0.05rem] border-zinc-600 shadow-inner shadow-zinc-700 p-2 md:rounded-3xl md:p-3"
        whileHover={{
          y: -10,
          boxShadow: `0 10px 25px -5px ${color}40`,
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={isHovered}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          color={color}
        />
        <motion.div
          className="border-0.75 bg-zinc-950 w-[160px] md:w-auto relative flex flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6"
          animate={{
            borderColor: isHovered ? color : "#3f3f46",
            boxShadow: isHovered ? `0 0 15px ${color}20` : "none",
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="space-y-3 text-center">
              <motion.h3
                className="font-sans text-lg font-semibold text-white whitespace-nowrap"
                animate={{ color: isHovered ? color : "white" }}
                transition={{ duration: 0.3 }}
              >
                {title}
              </motion.h3>
            </div>
          </div>
          {isHovered && (
            <motion.div
              className="absolute inset-0 rounded-xl"
              style={{
                background: `radial-gradient(circle at center, ${color}20, transparent 70%)`,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          )}
        </motion.div>
      </motion.div>
    </li>
  );
};