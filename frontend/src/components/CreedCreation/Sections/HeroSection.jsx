"use client";

import React from "react";
import { motion } from "motion/react";
// import { AuroraBackground } from "../../ui/aurora-background";
import { Spotlight } from "@/components/ui/spotlight-new";

export default function HeroSection() {
  return (
    <>
      <section id="home" className="flex flex-col items-center justify-center rounded-b-3xl shadow-2xl px-5 mb-10 h-full min-h-[calc(100vh-5rem)] bg-zinc-950 light:bg-slate-50 relative overflow-hidden">
        {/* <AuroraBackground>
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative flex flex-col gap-4 items-center justify-center px-4"
          >
            <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
              Background lights are cool you know.
            </div>
            <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
              And this, is chemical burn.
            </div>
            <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
              Debug now
            </button>
          </motion.div>
        </AuroraBackground> */}
        <h1 className="text-4xl md:text-7xl animate-fadeIn font-bold font-pilowlava text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          CREED CREATION
        </h1>
        <p className="mt-4 font-normal text-base animate-fadeIn text-neutral-300 max-w-lg text-center mx-auto">
          A subtle yet effective spotlight effect, because your business needs limelight.
        </p>
        <Spotlight />
      </section>
    </>
  );
}