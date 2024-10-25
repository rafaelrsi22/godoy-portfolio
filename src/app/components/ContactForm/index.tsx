import TextInput from "./TextInput";
import TextArea from "./TextArea";
import GradientButton from "../GradientButton";
import FadeIn from "../FadeIn";
import GradientText from "../GradientText";
import { useState } from "react";

export default function ContactForm() {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  return (
    <form 
      action="" 
      className="min-w-[800px] z-30 flex flex-col gap-8"
    >
      <div className="flex gap-4">
        <TextInput label="First Name" id="first-name" required />
        <TextInput label="Last Name" id="last-name" required />
      </div>
      <div className="flex gap-4">
        <TextInput label="Email" id="email" required />
        <TextInput label="Phone" id="phone" />
      </div>
      <TextArea label="Message" id="message" rows={10} required />
      <button
        className={`px-4 py-1 w-fit m-auto rounded-full transition-all duration-500 ${isHovering ? 'bg-[#AA77E2]' : 'bg-none'} border-[#71717A] border`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <GradientText>Send message</GradientText>
      </button>
    </form>
  );
}