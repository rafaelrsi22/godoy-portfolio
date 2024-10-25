interface TextInputProps {
  label: string;
  id: string;
  className?: string;
  required?: boolean;
}

export default function TextInput({ 
  label, 
  id,
  className,
  required = false
}: TextInputProps) {
  return (
    <div className={`flex flex-col gap-2 grow ${className}`}>
      <label
        htmlFor={id}
        className="text-lg bg-clip-text text-transparent bg-gradient-to-r from-[#A3A3A3] to-[#71717A]"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input 
        type="text" 
        id={id} 
        className="bg-transparent text-[#F4F4F5] text-opacity-80 outline-none border-[#F4F4F5] border-opacity-10 border rounded-md p-2"
        required={required}
      />
    </div>
  );
}