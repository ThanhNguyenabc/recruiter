import React from "react";
import Hero from "../_common/hero";
import Text from "../_common/text";
import Button from "../_common/button";

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
      <form className="flex flex-col w-full md:flex-row justify-center gap-4 mb-8">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 rounded-md border border-black focus:outline-none"
        />
        <Button color="success" className="text-white">
          Subscribe
        </Button>
      </form>
    </Hero>
  );
};

export default CTAFooter;
