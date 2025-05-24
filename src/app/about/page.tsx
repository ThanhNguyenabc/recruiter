import { getSEOTag } from "@/api/config.api";
import AboutBanner from "@/components/about/AboutBanner";
import AboutIntroSection from "@/components/about/AboutIntroSection";
import TestimonialSection from "@/components/testmonials/TestimonialSection";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  return getSEOTag("about");
}

const AboutPage = () => {
  return (
    <>
      <AboutBanner />
      <AboutIntroSection />
      <TestimonialSection />
    </>
  );
};

export default AboutPage;
