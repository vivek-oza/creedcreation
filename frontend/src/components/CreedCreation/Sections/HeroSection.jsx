"use client";

import React from "react";
import { motion } from "motion/react";
// import { AuroraBackground } from "../../ui/aurora-background";
import { Spotlight } from "@/components/ui/spotlight-new";
import { AuroraBackground } from "../../ui/aurora-background";
import { BackgroundGradientAnimation } from "../../ui/background-gradient-animation";
import { Vortex } from "../../ui/vortex";


export default function HeroSection() {
  return (
    <>
      <section id="home" className="flex flex-col items-center justify-center border-b-2 border-slate-500 shadow-2xl px-5  h-screen bg-zinc-950 light:bg-slate-50 relative overflow-hidden">

        {/* VORTEX */}
        <Vortex
          backgroundColor="black"
          className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
        >
          <div className="absolute z-30 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
            <h1 className="bg-clip-text text-7xl text-transparent drop-shadow-2xl bg-gradient-to-b from-white to-white/20">
              CREED <br /> CREATION
            </h1>
          </div>
        </Vortex>

      </section>
    </>
  );
}