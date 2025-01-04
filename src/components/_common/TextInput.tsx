import React, { forwardRef } from "react";
import { Input, InputProps } from "@nextui-org/react";

const DefaultClassNames = {
  label: "text-md-semibold",
  input: "text-secondary text-md-medium h-8 md:h-[52px]",
  inputWrapper: "group-data-[focus=true]:border-primary  border border-grey",
};

const TextInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <Input
    ref={ref}
    {...props}
    labelPlacement="outside"
    variant="bordered"
    classNames={{
      ...props.classNames,
      ...DefaultClassNames,
    }}
  />
));
TextInput.displayName = "TextInput";
export default TextInput;
