"use client";

import React from "react";
import "../index.css";
import HeroSection from "@/components/CreedCreation/Sections/HeroSection";
import Footer from "@/components/CreedCreation/Sections/Footer";
import TeamMembers from "@/components/CreedCreation/Sections/TeamMembers";
import { ProjectsMarquee } from "@/components/CreedCreation/Sections/ProjectsMarquee";
import BioSection from "@/components/CreedCreation/Sections/BioSection";
import ProcessFlow from "@/components/CreedCreation/Sections/ProcessFlow";

export default function Home() {
  return (
    <div className="w-full flex flex-col poppins">
      {/* Hero section */}
      <HeroSection id="home" />

      {/* Quote Section */}
      <BioSection id="bio" />

      {/* PROCESS FLOW */}
      <ProcessFlow />

      {/* Projects */}
      <ProjectsMarquee id="projects" />

      {/* Team members */}
      <div id="team">
        <TeamMembers />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
