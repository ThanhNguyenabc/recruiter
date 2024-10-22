"use client";

import React, { useEffect, useState } from "react";
import Flex from "../_common/flex";
import Image from "next/image";
import { BreakPoints, Menu } from "@/utils/constants";
import { Button, cn, Link } from "@nextui-org/react";
import { LogoImg } from "@/assets/images";
import Container from "../_common/container";
import useMediaQuery from "@/hooks/useMediaQuery";
import { CloseIcon, MenuIcon } from "@/assets/icons";

const Header = () => {
  const { width, height, breakPoint } = useMediaQuery();

  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showMenu]);

  return (
    <Container className="flex relative gap-5 items-center  lg:gap-8">
      <Button
        onClick={() => setShowMenu(!showMenu)}
        className=" lg:hidden bg-transparent border-none"
        variant="ghost"
      >
        {showMenu ? (
          <CloseIcon width={40} height={40} />
        ) : (
          <MenuIcon width={40} height={40} className=" text-black" />
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
          ` flex-col w-full gap-4 h-screen absolute top-full -left-full p-4 z-[999] transition-all ease-in border-b-2`,
          " md:gap-8  lg:flex-row lg:gap-10 lg:relative lg:left-0 lg:top-0 lg:bg-none lg:h-fit lg:bg-transparent",
          showMenu && " left-0  bg-white"
        )}
      >
        {Menu.map((item) => {
          return (
            <Link
              key={`${item.title}`}
              href={item.url}
              className="text-black font-semibold p-5 hover:text-primary"
            >
              {item.title}
            </Link>
          );
        })}
      </Flex>
    </Container>
  );
};

export default Header;
