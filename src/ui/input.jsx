'use client';
import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  const [hovered, setHovered] = React.useState(false);
  const [focused, setFocused] = React.useState(false);

  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);

  return (
    <div
      className="group/input rounded-lg p-[2px] transition duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <input
        type={type}
        className={cn(
          `flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm text-foreground transition-all duration-300 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50`,
          className
        )}
        ref={ref}
        {...props}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{
          background: 'transparent',
          border: `1px solid ${focused ? 'var(--primary)' : hovered ? 'var(--primary)' : 'var(--border-light)'}`,
          transform: focused ? 'scale(1.02)' : 'scale(1)',
          transition: 'all 0.3s ease'
        }}
      />
    </div>
  );
});
Input.displayName = "Input";

export { Input };