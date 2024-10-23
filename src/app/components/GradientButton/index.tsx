import { useEffect, useRef, useState } from "react";
import GradientText from "../GradientText";

interface GradientButtonProps {
  content: string;
}

export default function GradientButton({
  content
}: GradientButtonProps) {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  return (
    <div
      className="mt-8 flex flex-col items-center"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <button
        className={`px-4 py-1 rounded-full transition-all duration-500 ${isHovering ? 'bg-[#AA77E2]' : 'bg-none'} border-[#71717A] border`}
      >
        <GradientText>{content}</GradientText>
      </button>
      <div 
        className={`h-[1px] w-2/3 transition-all duration-300 transform -translate-y-[1px]`}
        style={{
          background: 'linear-gradient(90deg, #71717A 0%, #AA77E2 22%, #AA77E2 50%, #AA77E2 80%, #71717A 100%)'
        }}
      />
    </div>
  );
}