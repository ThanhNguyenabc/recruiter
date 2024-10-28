import Flex from "@/components/_common/flex";
import Hero from "@/components/_common/hero";
import Text from "@/components/_common/text";
import ContactForm from "@/components/contact/contact-form";
import JobListItem from "@/components/jobs/JobListItem";
import { FAKEDATA } from "@/utils/constants";
import React from "react";

const JobsPage = () => {
  return (
    <>
      <Hero className="flex-col gap-10">
        <Flex className="flex-col gap-6 items-center">
          <Text type="h1" className="heading-md">
            Find Your Next Role—No B.S.
          </Text>
          <Text className="text-lg text-neutral-600">
            Check out our latest job listings. No fluff, no corporate
            jargon—just real opportunities for real people.
          </Text>
        </Flex>
        <Text type="h1" className="heading-md md:heading-lg mt-10">
          Jobs Listing
        </Text>
        <Flex className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FAKEDATA.map((item) => (
            <JobListItem key={item.title} {...item} />
          ))}
        </Flex>
      </Hero>
      <Hero>
        <ContactForm>
          <Text className="heading-md md:heading-lg text-center">
            Need My Help? Please fill in the form.
          </Text>
        </ContactForm>
      </Hero>
    </>
  );
};

export default JobsPage;
