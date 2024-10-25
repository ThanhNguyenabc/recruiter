import React from "react";
import Container from "../_common/container";
import { Contacts, Socials } from "@/utils/constants";
import Flex from "../_common/flex";
import Text from "../_common/text";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" bg-[#142226]">
      <Container className="p-8 text-white md:p-20">
        <Flex className=" grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10 mx-auto">
          {[...Contacts].map(
            ({ icon: Icon, newTab, link, scheme = "", type }) => (
              <Link
                className="flex flex-row gap-4 items-center"
                key={link}
                href={`${scheme}${link}`}
                target={newTab ? "_blank" : "_parent"}
              >
                <Icon className=" text-[48px]" />
                {type != "social" && <Text type="p">{link}</Text>}
              </Link>
            )
          )}
          <Flex className="gap-6">
            {[...Socials].map(
              ({ icon: Icon, newTab, link, type }) => (
                <Link
                  className="flex flex-row gap-4 items-center"
                  key={link}
                  href={`${link}`}
                  target={newTab ? "_blank" : "_parent"}
                >
                  <Icon className=" text-[48px]" />
                  {type != "social" && <Text type="p">{link}</Text>}
                </Link>
              )
            )}
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};

export default Footer;
