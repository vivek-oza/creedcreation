"use client";

import React from "react";
import "../index.css";
import HeroSection from "@/components/CreedCreation/Sections/HeroSection";
import Footer from "../components/creedCreation/Sections/Footer";
import TeamMembers from "../components/creedCreation/Sections/TeamMembers";
import { ProjectsMarquee } from "../components/creedCreation/Sections/ProjectsMarquee";
import QuoteSection from "../components/creedCreation/Sections/QuoteSection";
import ProcessFlow from "../components/creedCreation/Sections/ProcessFlow";

export default function Home() {
  return (
    <div className="w-full flex flex-col poppins">
      {/* Hero section */}
      <HeroSection />

      {/* Quote Section */}
      <QuoteSection />

      {/* PROCESS FLOW */}
      <ProcessFlow />

      {/* Projects */}
      <FeaturesMarquee />

      {/* Team members */}
      <div id="team">
        <TeamMembers />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
