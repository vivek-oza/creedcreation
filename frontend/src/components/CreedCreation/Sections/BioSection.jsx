"use client";
import React from 'react'
import { HeroHighlight, Highlight } from '../../ui/hero-highlight';
import founderImage from "../../../assets/images/team/umesh.jpg";
import { TextGenerateEffect } from '../../ui/text-generate-effect';
import { motion, AnimatePresence } from "framer-motion";

export default function BioSection() {
    const bio = "We envision a world where brands don’t blend in, but boldly stand out, not through noise, but through clarity, creativity, and consistency. Creed Creations is crafting brands that live in the minds of people.We aim to be the team you trust when your business is ready to evolve visually and strategically. Our vision is to empower you with design solutions that not only look stunning but also tell compelling stories.";
    return (
        <>
            <section id="bio" className="flex min-h-screen flex-col items-center justify-center border-b-2 border-slate-500 shadow-2xl bg-zinc-950 light:bg-slate-50 relative overflow-hidden">
                <HeroHighlight>
                    <div className='grid md:grid-cols-2 md:px-10 px-5 py-10 space-y-5 md:space-y-0'>
                        <div className='flex flex-col space-y-4 font-bold md:text-3xl text-xl'>
                            <img src={founderImage} className='lg:size-96 md:size-80 size-full rounded-3xl' alt="Founder - Arun Baghel" />
                            <h2> <span className='text-orange-600 text-2xl'>ARUN BAGHEL</span> <br /> <span> Founder & CEO, CreedCreations</span></h2>
                        </div>
                        <motion.div className='h-full flex items-start'>
                            <h2 className='pt-2'>
                                <TextGenerateEffect words={bio} className="font-light md:font-medium md:text-2xl text-lg" />
                            </h2>
                        </motion.div>
                    </div>

                </HeroHighlight>
            </section>
        </>
    )
}
