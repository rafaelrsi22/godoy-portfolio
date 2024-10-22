import React from "react";

interface GradientTitleProps {
  mainTitle?: boolean;
  children?: React.ReactNode;  
}

export default function GradientTitle({
  mainTitle,
  children
}: GradientTitleProps) {
  const className = "font-bold text-center text-5xl text-transparent bg-clip-text py-2";
  const style = {
    backgroundImage: "linear-gradient(to bottom, #FFFFFF, #71717A)"
  }

  return (
    <>
    {mainTitle ? (
      <h1 className={className} style={style}>
        {children}
      </h1>
    ) : (
      <h2 className={className} style={style}>
        {children}
      </h2>
    )}
    </>
  );
}