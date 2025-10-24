import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import "./styles/components.css";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const classes = [
      'btn',
      `btn-${variant}`,
      `btn-size-${size}`,
      className
    ].join(' ');
    
    return <Comp className={classes} ref={ref} {...props} />;
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
