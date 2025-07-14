import { ComponentProps, FC } from "react";
import { Content } from "@radix-ui/react-accordion";

import { cn } from "@/utils";

const AccordionContent: FC<ComponentProps<typeof Content>> = ({
  className,
  children,
  ...props
}) => (
  <Content
    data-slot="accordion-content"
    className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
    {...props}
  >
    <div className={cn("pt-0 pb-4", className)}>{children}</div>
  </Content>
);

export default AccordionContent;
