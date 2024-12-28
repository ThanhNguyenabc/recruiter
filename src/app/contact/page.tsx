import React from "react";

import Flex from "@/components/_common/flex";
import Text from "@/components/_common/text";
import ContactForm from "@/components/contact/contact-form";
import { EMAIL, PHONE } from "@/utils/constants";
import { EmailIcon, IcLinkedin, PhoneIcon, Youtube } from "@/assets/icons";
import Hero from "@/components/_common/hero";

const Data = [
  {
    content: EMAIL,
    icon: EmailIcon,
    title: "Email to us",
  },
  {
    content: PHONE,
    icon: PhoneIcon,
    title: "Call us now",
  },
  {
    content: "arkhamtalent",
    icon: Youtube,
    title: "Youtube",
  },
  {
    content: "arkhamtalent",
    icon: IcLinkedin,
    title: "Linkedin",
  },
];

const ContactPage = () => {
  return (
    <Hero className="flex-col w-full items-start gap-10 md:gap-20">
      <Flex className="flex-col gap-6 lg:max-w-[590px]">
        <Text type="h1" className="heading-1 whitespace-pre-line">
          {`NEED HELP? \nCONTACTS US`}
        </Text>
        <Text className="text-lg-medium text-secondary">
          {`Fill out the contact form and we'll follow up with you asap. Or reach us directly by email or phone.`}
        </Text>
      </Flex>

      <Flex className="w-full flex-col  items-start gap-12 md:flex-row md:gap-20">
        <ContactForm />
        <Flex className="flex-col gap-4 md:gap-10">
          {Data.map(({ title, content, icon: Icon }) => (
            <Flex key={title} className="flex-row gap-2 items-center ">
              <Flex className="p-4 bg-success rounded-xl h-14 w-14 justify-center">
                <Icon className=" text-white" />
              </Flex>
              <Flex className="flex-col">
                <Text className="text-success text-md-medium">{title}</Text>
                <Text className="text-lg-bold">{content}</Text>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Hero>
  );
};

export default ContactPage;
