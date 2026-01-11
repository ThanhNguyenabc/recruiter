import React from "react";
import Hero from "../_common/hero";
import Text from "../_common/text";
import Button from "../_common/button";
import Link from "next/link";
import { AppRoutes } from "@/utils/routes";

const CTAFooter = () => {
  return (
    <Hero className="flex-col gap-6 md:max-w-[792px] mx-auto">
      <Text className="heading-2 md:heading-1 text-center">
        {`LET'S CONNECT TODAY`}
      </Text>
      <Link href={AppRoutes.CONTACT}>
        <Button color="success" className="text-white">
          Contact us
        </Button>
      </Link>
    </Hero>
  );
};

export default CTAFooter;
