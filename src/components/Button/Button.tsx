import React, { ButtonHTMLAttributes } from "react";
import cn from "../../utils/cn";

import { VariantProps, cva } from "class-variance-authority";
import { Link } from "react-router-dom";

const buttonVariants = cva("px-12 py-4  rounded-md", {
  variants: {
    variant: {
      primary: "bg-blue-400",
      destructive: "bg-red-400",
      outline: "border-2 border-red-400",
      subtle: "bg-blue-400/40",
      ghost: "bg-gray-500/50",
      link: "bg-blue-500 dashed",
    },
    size: {
      sm: "sm",
      lg: "lg",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
  },
});

interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLink?: boolean;
  pathname?: string;
}

const Button: React.FC<IButtonProps> = ({
  className,
  size,
  variant,
  children,
  isLink = false,
  pathname = "/",
  ...props
}) => {
  return !isLink ? (
    <button
      {...props}
      type="button"
      className={cn(buttonVariants({ variant, size, className }))}
    >
      {children}
    </button>
  ) : (
    <Link to={pathname}>
      <button
        {...props}
        type="button"
        className={cn(buttonVariants({ variant, size, className }))}
      >
        {children}
      </button>
    </Link>
  );
};
Button.displayName = "button";

export { Button, buttonVariants };
