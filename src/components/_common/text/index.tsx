import React, { PropsWithChildren } from "react";

type TextType = "span" | "p" | "h1" | "h2" | "h3";
const Text = ({
  type = "span",
  children,
  ...others
}: PropsWithChildren<React.HTMLAttributes<HTMLSpanElement>> & {
  type?: TextType;
}) => {
  const CMP = React.createElement(type, others, children);
  return <>{CMP}</>;
};

export default Text;
