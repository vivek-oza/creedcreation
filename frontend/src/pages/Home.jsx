"use client";

import React from "react";
import "../index.css";
import HeroSection from "@/components/CreedCreation/Sections/HeroSection";

import Footer from "../components/CreedCreation/Sections/Footer";
import TeamMembers from "../components/CreedCreation/Sections/TeamMembers";
import { FeaturesMarquee } from "../components/CreedCreation/Sections/FeaturesMarquee";

export default function Home() {
  return (
    <div className="h-full flex flex-col poppins">
      {/* Hero section */}
      <HeroSection />

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
