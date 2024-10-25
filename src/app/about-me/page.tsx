import { Star } from "@/assets/icons";
import { Banner2Img } from "@/assets/images";
import Flex from "@/components/_common/flex";
import Hero from "@/components/_common/hero";
import Text from "@/components/_common/text";
import Testimonials from "@/components/testmonials";
import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <Hero className="flex-col gap-20">
        <Text type="h1" className="heading-lg md:heading-xl">
          ABOUT ME...
        </Text>
        <Flex className="flex-col gap-8 lg:flex-row">
          <Flex className="lfex-1">
            <Image height={500} width={500} src={Banner2Img} alt="banner 2" />
          </Flex>

          <Flex className="flex-1 font-semibold text-lg items-center whitespace-pre-line">
            {`We’re not your typical recruiting agency. No fake smiles or forced
          professionalism here. We believe in being real—no masks, no
          pretending. At ARKHAM Ventures, we embrace quirks, flaws, and
          everything in between because that’s what makes us human.\n\nOur job
          isn’t just to fill positions. It’s to connect people with roles where
          they can be themselves. We get that life is messy and not everyone
          fits into the corporate mold. That’s why we focus on personality and
          culture fit, not just experience and skills.\n\nIf you’re tired of the
          same old recruiting B.S., you’re in the right place. Just show up as
          you are, and we’ll find the right spot for you.`}
          </Flex>
        </Flex>
      </Hero>
      <Hero hasBackground bgClassName=" bg-neutral-100" className=" flex-col">
        <Flex className="flex-col gap-4 mb-8 heading-md md:heading-lg  text-center items-center justify-center">
          {"Actually Gives a S***"}

          <Flex className="gap-4">
            <Star width={24} height={24} className="text-green-500" />
            <Star width={24} height={24} className="text-green-500" />
          </Flex>
          {"The Chuck Norris of Recruitment"}
        </Flex>
        <Flex className="flex-col w-full gap-8 lg:max-w-screen-lg items-center">
          <Text className="heading-md">(GENUINE REVIEWS)</Text>
          <Text
            type="p"
            className="whitespace-pre-line text-center font-semibold text-lg "
          >
            {`"ARKHAM did more for me in 1 week securing 3 interviews and finding a job than other recruiters did in 3 weeks.
He was in regular contact with me, keeping me up to date and providing advice for various positions.
I would highly recommend him to anyone looking for a job or companies looking for staff."\n\n
"ARKHAM was very helpful throughout the interview process, providing information as and when I needed it.
I was not actively seeking employment at the time, but ARKHAM's enthusiasm for the company he represented, which I now work for, convinced me to at least hear them out"\n\n
"ARKHAM was very helpful in finding me a new job. He listened to my reasons for wanting a job move and made useful suggestions I hadn’t considered.
Within a day of receiving my cv he had an interview arranged. From cv to my actual contract being signed it was less than two weeks, with two separate interviews – the second arranged after he listened intently following my feedback from the first. Many thanks for your assistance."
 
`}
          </Text>
        </Flex>
      </Hero>
      <Testimonials />
    </>
  );
};

export default AboutPage;
