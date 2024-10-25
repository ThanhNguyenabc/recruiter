"use client";

import React, { useEffect, useState } from "react";
import Flex from "../_common/flex";
import Image from "next/image";
import { Menu, Socials } from "@/utils/constants";
import { Button, cn, Link } from "@nextui-org/react";
import { LogoImg } from "@/assets/images";
import Container from "../_common/container";
import { CloseIcon, MenuIcon } from "@/assets/icons";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showMenu]);

  return (
    <div className=" bg-[#181010]">
      <Container className="flex relative gap-5 items-center top-0 z-10 lg:gap-8">
        <Button
          onClick={() => setShowMenu(!showMenu)}
          className=" lg:hidden bg-transparent border-none"
          variant="ghost"
        >
          {showMenu ? (
            <CloseIcon width={40} height={40} className=" text-white" />
          ) : (
            <MenuIcon width={40} height={40} className=" text-white" />
          )}
        </Button>

        <Link href="/">
          <Image
            src={LogoImg}
            width={200}
            height={200}
            className="h-auto cursor-pointer"
            alt="logo"
          />
        </Link>

        <Flex
          className={cn(
            ` flex-col w-full gap-4 h-screen absolute top-full -left-full p-4 z-[999] transition-all ease-in`,
            " md:gap-8  lg:flex-row lg:gap-20 lg:relative lg:left-0 lg:top-0 lg:bg-none lg:h-fit lg:bg-transparent",
            showMenu && " left-0 bg-[#181010]"
          )}
        >
          {Menu.map((item) => {
            return (
              <Link
                key={`${item.title}`}
                href={item.url}
                className="text-[#efefef] font-semibold p-5 hover:text-primary"
              >
                {item.title}
              </Link>
            );
          })}
          <Flex className="ml-4 gap-4 md:ml-10 md:gap-8">
            {Socials.map(({ icon: Icon, link }) => (
              <Link key={link} href={link}>
                <Icon />
              </Link>
            ))}
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
