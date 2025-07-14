import { FC } from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/utils";
import badgeVariants from "./classess";
import { TBadgeProps } from "./interface";

const Badge: FC<TBadgeProps> = ({
  className,
  variant,
  asChild = false,
  ...props
}) => {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
};
export default Badge;
