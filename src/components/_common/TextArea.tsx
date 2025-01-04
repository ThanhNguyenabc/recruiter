import React from "react";
import { Textarea, TextAreaProps } from "@nextui-org/react";

const DefaultClassNames = {
  label: "text-md-semibold",
  input: "text-secondary text-md-medium",
  inputWrapper: "md:h-[52px] group-data-[focus=true]:border-primary  border border-grey",
};

const TextArea = (props: TextAreaProps) => {
  return (
    <Textarea
      {...props}
      labelPlacement="outside"
      variant="bordered"
      classNames={{
        ...DefaultClassNames,
        ...props.classNames,
      }}
    />
  );
};

export default TextArea;
