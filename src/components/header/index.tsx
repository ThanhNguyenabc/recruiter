"use client";

import React, { useEffect, useState } from "react";
import Flex from "../_common/flex";
import Image from "next/image";
import { Menu, PHONE } from "@/utils/constants";
import { Button, cn } from "@nextui-org/react";
import { LogoImg } from "@/assets/images";
import Container from "../_common/container";
import { CloseIcon, MenuIcon, PhoneIcon } from "@/assets/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showMenu]);

  return (
    <div className=" bg-grey fixed w-full top-0 z-[999]">
      <Container className="flex relative p-4 gap-5 items-center justify-between md:p-5 lg:gap-6">
        <Link href="/">
          <Image
            src={LogoImg}
            width={200}
            height={200}
            className="h-auto cursor-pointer w-[150px]"
            alt="logo"
          />
        </Link>

        <Flex
          className={cn(
            ` flex-col  flex-1 gap-4 h-screen absolute top-full -left-full p-4 z-[999] transition-all ease-in`,
            " md:gap-8 md:justify-center lg:flex-row lg:relative lg:left-0 lg:top-0 lg:h-fit lg:bg-transparent",
            showMenu && "w-full sm:w-1/2 left-0 bg-[#181010]"
          )}
        >
          {Menu.map((item) => {
            return (
              <Link
                key={`${item.title}`}
                href={item.url}
                className={cn(
                  " text-base font-bold text-gray-400 p-3 hover:text-black",
                  pathName === item.url && "text-black"
                )}
              >
                {item.title}
              </Link>
            );
          })}
        </Flex>
        <Flex className="hidden lg:flex items-center gap-4">
          <PhoneIcon />
          <Link href={`tel:${PHONE}`} className="text-lg-bold">
            {PHONE}
          </Link>
        </Flex>

        <Button
          onClick={() => setShowMenu(!showMenu)}
          className="lg:hidden bg-transparent border-none w-10 h-10"
          variant="ghost"
        >
          {showMenu ? <CloseIcon /> : <MenuIcon />}
        </Button>
      </Container>
    </div>
  );
};

export default Header;
