"use client";
import React from 'react'
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from '../../ui/hero-highlight'


export default function QuoteSection() {
    return (
        <>
            <section id="quote" className="flex max-h-72 flex-col items-center justify-center border-b-2 border-slate-500 shadow-2xl bg-zinc-950 light:bg-slate-50 relative overflow-hidden">
                <HeroHighlight>
                    <motion.h1
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: [20, -5, 0],
                        }}
                        transition={{
                            duration: 0.8,
                            ease: [0.4, 0.0, 0.2, 1],
                        }}
                        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
                    >
                        We develop the{" "} <br />
                        <Highlight className="text-white">
                            visual identity
                        </Highlight> <br />
                        {" "}of your business.
                    </motion.h1>
                </HeroHighlight>
            </section>
        </>
    )
}
