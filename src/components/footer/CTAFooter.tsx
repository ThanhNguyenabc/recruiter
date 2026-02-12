import React from "react";
import Hero from "../_common/hero";
import Text from "../_common/text";
import ContactButton from "../_common/ContactButton";

const CTAFooter = () => {
  return (
    <Hero className="flex-col gap-6 md:max-w-[792px] mx-auto">
      <Text className="heading-2 md:heading-1 text-center">
        {`LET'S CONNECT TODAY`}
      </Text>
      <ContactButton />
    </Hero>
  );
};

export default CTAFooter;
