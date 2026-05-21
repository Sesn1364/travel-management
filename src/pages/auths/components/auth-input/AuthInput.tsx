// Auth Input Component

import type { AuthInputProps } from "./AuthInputType";

const Input = ({
  type,
  name,
  placeholder,
  onChange,
  value,
  className,
}: AuthInputProps) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      className={`w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 outline-none focus:ring-2 transition-all${className}`}
    />
  );
};

export default Input;