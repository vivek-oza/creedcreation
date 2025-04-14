"use client";

import React from "react";
import "../index.css";
import HeroSection from "@/components/CreedCreation/Sections/HeroSection";
import Footer from "../components/CreedCreation/Sections/Footer";
import TeamMembers from "../components/CreedCreation/Sections/TeamMembers";
import { FeaturesMarquee } from "../components/CreedCreation/Sections/FeaturesMarquee";
import QuoteSection from "../components/CreedCreation/Sections/QuoteSection";
import ProcessFlow from "../components/CreedCreation/Sections/ProcessFlow";
import ImageDiv from "../components/CreedCreation/Sections/ImageDiv";

export default function Home() {
  return (
    <div className="w-full flex flex-col poppins">
      {/* Hero section */}
      <HeroSection />

      {/* Quote Section */}
      <QuoteSection />

      {/* PROCESS FLOW */}
      <ProcessFlow />

      {/* Image Div */}
      <ImageDiv></ImageDiv>

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
