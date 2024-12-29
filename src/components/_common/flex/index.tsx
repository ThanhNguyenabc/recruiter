import { cn } from "@nextui-org/react";
import React, { forwardRef } from "react";

const Flex = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...other }, ref) => (
    <div ref={ref} className={cn("flex", className)} {...other}>
      {children}
    </div>
  )
);
Flex.displayName = "Flex";
export default Flex;
