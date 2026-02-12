import React from "react";
import Hero from "../_common/hero";
import Text from "../_common/text";
import Button from "../_common/button";
import { AppRoutes } from "@/utils/routes";
import { useRouter } from "next/navigation";

const CTAFooter = () => {
  const router = useRouter();

  const gotoContactPage = () => {
    router.push(AppRoutes.CONTACT);
  };
  return (
    <Hero className="flex-col gap-6 md:max-w-[792px] mx-auto">
      <Text className="heading-2 md:heading-1 text-center">
        {`LET'S CONNECT TODAY`}
      </Text>
      <Button color="success" className="text-white" onPress={gotoContactPage}>
        Contact us
      </Button>
    </Hero>
  );
};

export default CTAFooter;
