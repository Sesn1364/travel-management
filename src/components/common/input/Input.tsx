// Input Component

import type { InputProps } from "./InputType";

const Input = ({
  type,
  name,
  placeholder,
  onChange,
  value,
  className = "",
}: InputProps) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      className={className}
    />
  );
};

export default Input;




// import type { InputProps } from "./InputType";

// const Input = ({
//   type,
//   name,
//   placeholder,
//   onChange,
//   value,
//   className = "",
// }: InputProps) => {
//   return (
//     <input
//       type={type}
//       name={name}
//       placeholder={placeholder}
//       onChange={onChange}
//       value={value}
//       className={`
//         w-full
//         bg-white/10
//         border
//         border-white/20
//         rounded-xl
//         px-4
//         py-3
//         text-white
//         placeholder-gray-400
//         outline-none
//         focus:ring-2
//         transition-all
//         focus:ring-cyan-400
//         ${className}
//       `}
//     />
//   );
// };

// // export default Input;