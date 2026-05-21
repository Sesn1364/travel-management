// Trip Forms Input Component

import type { TripFormInputProps } from "./TripFormInputType";

const TripFormsInput = ({
  type,
  name,
  placeholder,
  onChange,
  value,
  className,
  lableText
}: TripFormInputProps) => {
  return (
    <div>
      <label className="block text-sm text-gray-600 mb-2">{lableText}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={`w-full px-4 py-3 rounded-2xl border border-gray-200 bg-white/80 focus:outline-none focus:ring-2 transition-all${className}`}
      />
    </div>
  );
};

export default TripFormsInput;