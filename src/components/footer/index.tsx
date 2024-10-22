import React from "react";
import Container from "../_common/container";
import { EMAIL, PHONE } from "@/utils/constants";
import { Linkdln, SecondEmail, SecondPhoneIcon, Youtube } from "@/assets/icons";
import Flex from "../_common/flex";
import Text from "../_common/text";
import Link from "next/link";

const Contacts = [
  {
    icon: SecondEmail,
    type: "email",
    link: EMAIL,
    newTab: false,
    scheme: "mailto:",
  },
  {
    icon: SecondPhoneIcon,
    type: "phone",
    link: `${PHONE}`,
    scheme: "tel:",
    newTab: false,
  },
  {
    icon: Linkdln,
    type: "social",
    link: "https://www.linkedin.com/company/arkhamtalent/",
    newTab: true,
  },
  {
    icon: Youtube,
    type: "social",
    link: "https://www.youtube.com/@ArkhamTalent",
    newTab: true,
  },
];

const Footer = () => {
  return (
    <div className=" bg-[#142226]">
      <Container className="p-8 text-white md:p-20">
        <Flex className=" grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 max-w-screen-lg mx-auto">
          {Contacts.map(({ icon: Icon, newTab, link, scheme = "" }) => (
            <Link
              className="flex flex-row gap-4 items-center"
              key={link}
              href={`${scheme}${link}`}
              target={newTab ? "_blank" : "_parent"}
            >
              <Icon className=" text-[48px]" />
              <Text type="p">{link}</Text>
            </Link>
          ))}
        </Flex>
      </Container>
    </div>
  );
};

export default Footer;
