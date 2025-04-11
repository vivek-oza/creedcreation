"use client";

import React from "react";
import { motion } from "motion/react";
import { AnimatedTestimonials } from "../../ui/animated-testimonials.jsx";

export default function TeamMembers() {
    const teamMembers = [
        {
            quote:
                "With over 10 years of experience in product development, I lead our team to create solutions that truly meet customer needs.",
            name: "Umesh Bhagel",
            designation: "Product Manager at Creed Creation",
            src: "https://raw.githubusercontent.com/vivek-oza/demo-images/refs/heads/main/umesh.jpg",
        },
        {
            quote:
                "I oversee our design strategy and ensure our design engineering team delivers appealing, converting and aesthetic solutions for our clients.",
            name: "Avinash Oza",
            designation: "Lead Graphic Designer at Creed Creation",
            src: "https://raw.githubusercontent.com/vivek-oza/demo-images/refs/heads/main/avinash2.jpg",
        },
        {
            quote:
                "My focus is on optimizing our operational processes to ensure maximum efficiency and productivity across all teams.",
            name: "Emily Watson",
            designation: "Operations Director at Creed Creation",
            src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            quote:
                "I lead our engineering initiatives, focusing on building high-quality software with cutting-edge technologies.",
            name: "James Kim",
            designation: "Engineering Lead at DataPro",
            src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }
    ];
    return (
        <>
            <section id="team" className="flex flex-col items-center justify-center rounded-3xl shadow-2xl mx-2 mb-10 h-full min-h-[calc(100vh-5rem)] bg-zinc-950 light:bg-slate-50 relative overflow-hidden">
                <div className="flex flex-col items-center justify-center">

                    <AnimatedTestimonials testimonials={teamMembers} />
                </div>
            </section>
        </>
    );
}