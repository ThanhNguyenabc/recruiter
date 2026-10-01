import React from "react";

import Flex from "@/components/_common/flex";
import Text from "@/components/_common/text";
import ContactForm from "@/components/contact/contact-form";
import { EMAIL, PHONE } from "@/utils/constants";
import { EmailIcon, IcLinkedin, PhoneIcon, Youtube } from "@/assets/icons";
import Hero from "@/components/_common/hero";
import { Metadata } from "next";
import { getSEOTag } from "@/api/config.api";
import Link from "next/link";

export function generateMetadata(): Promise<Metadata> {
  return getSEOTag("clients");
}

const Data = [
  {
    content: EMAIL,
    icon: EmailIcon,
    title: "Email to us",
    link: `mailto:${EMAIL}`,
    newTab: false,
  },
  {
    content: PHONE,
    icon: PhoneIcon,
    title: "Call us now",
    link: `tel:${PHONE}`,
    newTab: false,
  },
  {
    content: "@ArkhamTalent",
    icon: Youtube,
    link: "https://www.youtube.com/@ArkhamTalent",
    title: "Youtube",
    newTab: true,
  },
  {
    content: "arkhamtalent",
    icon: IcLinkedin,
    title: "Linkedin",
    link: "https://www.linkedin.com/company/arkhamtalent/",
    newTab: true,
  },
];

const ContactPage = () => {
  return (
    <Hero className="flex-col w-full items-start gap-10 md:gap-20">
      <Flex className="flex-col gap-6 lg:max-w-[600px]">
        <Text type="h1" className="heading-1 whitespace-pre-line">
          {`Contact us\nto get started`}
        </Text>
        <Text className="text-lg-medium text-secondary">
          {
            "No hoops to jump through. Just fill out the form or give us a call, and we’ll get back to you asap, plain and simple."
          }
        </Text>
      </Flex>

      <Flex className="w-full flex-col items-start gap-12 md:flex-row md:gap-20">
        <ContactForm />
        <Flex className="flex-col gap-4 md:gap-10 w-full">
          {Data.map(({ title, content, icon: Icon, link, newTab }) => (
            <Flex key={title} className="flex-row gap-2 items-center ">
              <Flex className="p-4 bg-success rounded-xl h-14 w-14 justify-center">
                <Icon className=" text-white" />
              </Flex>
              <Flex className="flex-col flex-1 w-full">
                <Text className="text-success text-md-medium">{title}</Text>
                <Link href={link} target={newTab ? "_blank" : ""}>
                  <Text className="text-lg-bold">{content}</Text>
                </Link>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Hero>
  );
};

export default ContactPage;
