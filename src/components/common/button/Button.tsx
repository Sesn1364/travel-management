import type { ButtonProps } from "./buttonType";

const Button = ({ type, onClick, children, className = "" }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        w-full
        py-3
        rounded-xl
        font-semibold
        text-white
        bg-gradient-to-r
        from-cyan-500
        to-purple-500
        hover:scale-[1.02]
        active:scale-[0.98]
        transition-all
        duration-300
        shadow-lg
        shadow-cyan-500/20
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;