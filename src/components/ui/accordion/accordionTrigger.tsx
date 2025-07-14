import { ComponentProps, FC } from "react";
import { ChevronDownIcon } from "lucide-react";
import { Header, Trigger } from "@radix-ui/react-accordion";

import { cn } from "@/utils";

const AccordionTrigger: FC<ComponentProps<typeof Trigger>> = ({
  className,
  children,
  ...props
}) => (
  <Header className="flex">
    <Trigger
      data-slot="accordion-trigger"
      className={cn(
        "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
    </Trigger>
  </Header>
);

export default AccordionTrigger;
