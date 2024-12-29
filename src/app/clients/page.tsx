import LatestBlog from "@/components/blog/LatestBlog";
import FAQSection from "@/components/faq/FAQSection";
import TestimonialSection from "@/components/testmonials/TestimonialSection";
import React from "react";
import HowShouldWork from "./HowShouldWork";
import ClientBanner from "./ClientBanner";

const CLients = () => {
  return (
    <>
      <ClientBanner />
      <HowShouldWork />
      <TestimonialSection />
      <FAQSection />
      <LatestBlog />
    </>
  );
};

export default CLients;
