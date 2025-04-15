"use client";

import React from "react";
import { motion } from "motion/react";
// import { AuroraBackground } from "../../ui/aurora-background";
import { Spotlight } from "@/components/ui/spotlight-new";
import { Vortex } from "../../ui/vortex";
import { Highlight } from "../../ui/hero-highlight";
import SpinningLogo from "../Graphics/SpinningLogo";
import GlassStar from "../Graphics/GlassStar";
import { TextGenerateEffect } from "../../ui/text-generate-effect";
import { Canvas } from "@react-three/fiber";


export default function HeroSection() {
  const words = ` We develop the visual identity of your business`;

  return (
    <>
      <section id="home" className="flex flex-wrap-reverse flex-row items-center justify-center content-center border-b-2 border-slate-500 shadow-2xl px-5  h-screen bg-zinc-950 light:bg-slate-50 relative overflow-hidden">

        {/* VORTEX */}
        {/* <Vortex
          backgroundColor="black"
          className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
        >
          <div className="absolute z-30 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
            <h1 className="bg-clip-text text-7xl text-transparent drop-shadow-2xl bg-gradient-to-b from-white to-white/20">
              CREED CREATION
            </h1>
          </div>
        </Vortex> */}

        <div>
          <h1 className="bg-clip-text text-center animate-fadeIn font-bold text-5xl md:text-6xl lg:text-7xl text-transparent drop-shadow-2xl bg-gradient-to-b from-white to-white/20">
            CREED <span className="text-orange-600"> CREATION </span>
          </h1>
          <h2 className="mt-4 text-2xl md:text-3xl font-bold" >
            <TextGenerateEffect words={words} />
          </h2>
        </div>

        <SpinningLogo />
      </section>
    </>
  );
}