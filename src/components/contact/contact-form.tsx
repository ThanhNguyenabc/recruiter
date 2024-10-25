"use client";

import React, { PropsWithChildren, useState } from "react";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import Flex from "../_common/flex";
import Text from "../_common/text";

const users = [
  {
    id: "client",
    text: "Client",
  },
  {
    id: "candidate",
    text: "Candidate",
  },
];

const ContactForm = ({ children }: PropsWithChildren) => {
  const [userType, setUserType] = useState(0);
  return (
    <Flex className="flex-col w-full items-center gap-10 max-w-screen-sm self-center">
      {children}
      <form className="flex w-full flex-col gap-8">
        <Select
          label="Who are you ?"
          required
          defaultSelectedKeys={userType.toString()}
          onSelectionChange={(key) => {
            setUserType(Number(key.currentKey));
          }}
        >
          {users.map((item, index) => (
            <SelectItem key={index}>{item.text}</SelectItem>
          ))}
        </Select>
        {users[userType].id == "client" ? (
          <>
            <Input name="title" placeholder="Job title" required />

            <Input name="company" placeholder="Company" required />
            <Input name="role" placeholder="Role Your're hiring for" required />

            <Input name="salary" placeholder="Salary" required />
          </>
        ) : (
          <>
            <Input name="name" placeholder="Name" required />

            <Input name="email" placeholder="Email" required />
            <Input name="phone" placeholder="Phone number" required />
            <Input name="location" placeholder="Location" required />
            <Input name="role" placeholder="Role you’re seeking" required />
            <Input name="salary" placeholder="Salary" required />
            <Flex className="flex-row gap-4">
              <Text className="flex-1">Your resume:</Text>
              <Input
                className="flex-1"
                name="resume"
                placeholder="Resume"
                required
                type="file"
              />
            </Flex>
          </>
        )}
        <Button
          size="lg"
          type="submit"
          color="primary"
          className=" text-white font-semibold"
        >
          Submit
        </Button>
      </form>
    </Flex>
  );
};

export default ContactForm;
