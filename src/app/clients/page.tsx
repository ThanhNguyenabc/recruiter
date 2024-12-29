import Hero from "@/components/_common/hero";
import LatestBlog from "@/components/blog/LatestBlog";
import FAQSection from "@/components/faq/FAQSection";
import TestimonialSection from "@/components/testmonials/TestimonialSection";
import React from "react";
import HowShouldWork from "./HowShouldWork";

const CLients = () => {
  return (
    <>
      <Hero className="flex-col"></Hero>
      <HowShouldWork />
      <TestimonialSection />
      <FAQSection />
      <LatestBlog />
    </>
  );
};

export default CLients;
