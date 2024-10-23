import { GoArrowDown } from "react-icons/go";
import GradientText from "../GradientText";
import { useState } from "react";

interface ViewMoreLinkProps {
  className?: string;
}

export default function ViewMoreLink({
  className
}: ViewMoreLinkProps) {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  return (
    <button
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <GradientText className={`flex flex-col items-center ${className}`}>
        View more
        <GoArrowDown 
          size={18} 
          color="#A3A3A3"
          className={`${isHovering ? 'translate-y-2' : ''} transition-all duration-300`}
        />
      </GradientText>
    </button>
  );
}