import Flex from "@/components/_common/flex";
import Hero from "@/components/_common/hero";
import Text from "@/components/_common/text";
import React from "react";

const CLients = () => {
  return (
    <>
      <Hero className="flex-col">
        <Flex className="flex-col gap-6 text-center">
          <Text type="h1" className="heading-md">
            The Arkham Approach—Told by Our Clients
          </Text>
          <Text className="text-base md:text-lg text-neutral-600">
            We don’t sugarcoat anything. Learn how we work and see what our
            clients have to say.
          </Text>
        </Flex>
      </Hero>
      <Hero
        className="flex-col gap-6"
        hasBackground
        bgClassName="bg-neutral-100"
      >
        <Text className="heading-lg  md:heading-xl">CLIENTS</Text>
        <Text
          type="p"
          className="max-w-screen-lg text-center whitespace-pre-line md:text-lg text-neutral-600"
        >
          {`Let’s be real—most recruiters are just repeating what your HR team’s already tried, hoping for a different outcome. They keep fishing in the same tired candidate pool.\n\n\We’ve seen it, and it’s a waste of time. All you get are candidates who are scrambling for anything they can get.\n\nThat’s not how we do things. We dig deeper, reaching talent others overlook. The people we find aren’t blasting out applications or talking to other recruiters. They’re exclusive to you, and they’re a better fit because of it.`}
        </Text>
      </Hero>
    </>
  );
};

export default CLients;
