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
        GET STARTED WITH START TODAY
      </Text>
      <Text
        type="h2"
        className="text-gray-400 text-md-medium md:text-lg-medium text-center"
      >
        Sign up for my mailing list and get front-row seats to me belting out
        Creed classics—WITH ARMS WIDE OPENNNNN! (No refunds for emotional
        damage.)
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
