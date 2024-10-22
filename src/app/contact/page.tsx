import React from "react";

import Flex from "@/components/_common/flex";
import Text from "@/components/_common/text";
import ContactForm from "@/components/contact/contact-form";
import { EMAIL, PHONE } from "@/utils/constants";
import { EmailIcon, PhoneIcon } from "@/assets/icons";
import { Divider } from "@nextui-org/react";
const Data = [
  {
    content: EMAIL,
    icon: EmailIcon,
    title: "Email to us",
    desc: "Please email any questions, comments or suggestions to us",
  },
  {
    content: PHONE,
    icon: PhoneIcon,
    title: "Call us now",
    desc: "Got questions?\nWe’re ready to help you find the answer.",
  },
];

const ContactPage = () => {
  return (
    <Flex className="flex-col w-full text-center gap-8 md:gap-20">
      <Flex className="flex-col gap-10">
        <Text type="h1" className="heading-xl">
          Ready to Get Real? Let’s Talk
        </Text>
        <Text className="whitespace-pre-line text-xl font-semibold text-neutral-600">
          {
            "Whether you’ve got questions or want to get started, we’re here.\nShoot us a message or call us directly"
          }
        </Text>
      </Flex>
      <Flex className="flex-col w-full md:flex-row gap-4 md:gap-20 justify-center">
        {Data.map(({ title, desc, content, icon: Icon }) => (
          <Flex key={title} className="flex-col gap-4 items-center">
            <Icon />
            <Text className="font-semibold">{title}</Text>
            <Text className=" md:max-w-sm whitespace-pre-line">{desc}</Text>
            <Text className="font-semibold">{content}</Text>
          </Flex>
        ))}
      </Flex>

      <Divider />
      <ContactForm />
    </Flex>
  );
};

export default ContactPage;
