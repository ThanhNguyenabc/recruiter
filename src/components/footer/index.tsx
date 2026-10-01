import React from "react";
import { Socials } from "@/utils/constants";
import Flex from "../_common/flex";
import Text from "../_common/text";
import Link from "next/link";
import Hero from "../_common/hero";
import Image from "next/image";
import { FooterLogo } from "@/assets/images";

const Footer = () => {
  return (
    <Hero className="md:flex-row gap-4 justify-between md:py-10 lg:py-10 border-t-1 border-t-black">
      <Image
        width={150}
        height={100}
        src={FooterLogo}
        alt="footer-logo"
        quality={100}
      />
      <Flex className="flex-col md:flex-row gap-4 items-center">
        {/* <Link
          className="flex flex-row gap-4 items-center underline"
          key={"pdf-doc"}
          href={"/Behind-the-Scoreboard.pdf"}
          target={"_blank"}
        >
          <Text type="span">{"The Arkham Sales Hiring Standard"}</Text>
        </Link> */}
        <Flex className="gap-6">
          {Socials.map(({ icon: Icon, newTab, link, type, id }) => (
            <Link
              className="flex flex-row gap-4 items-center"
              key={id}
              href={link}
              target={newTab ? "_blank" : "_parent"}
            >
              <Icon className=" text-[48px]" />
              {type != "social" && <Text type="p">{link}</Text>}
            </Link>
          ))}
        </Flex>
      </Flex>
    </Hero>
  );
};

export default Footer;
