import React from "react";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function GradientText({
  children,
  className
}: GradientTextProps) {
  return (
    <p
      className={`text-transparent text-center bg-clip-text ${className}`}
      style={{
        backgroundImage: 'linear-gradient(to right, #A3A3A3, #71717A)'
      }}
    >
      {children}
    </p>
  );
}