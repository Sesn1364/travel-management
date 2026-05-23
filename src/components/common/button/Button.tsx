import type { ButtonProps } from "./ButtonType";

const Button = ({
  type,
  onClick,
  children,
  className = "",
  isLoading = false,
  disabled = false,
}: ButtonProps) => {
  return (
    <div className="mt-8">
      <button
        type={type}
        onClick={onClick}
        disabled={disabled || isLoading}
        className={`px-8 py-3 rounded-2xl text-white font-semibold transition-all duration-300 shadow-lg disabled:opacity-50
          disabled:cursor-not-allowed
        ${className}
      `}
      >
        {isLoading ? "Loading..." : children}
      </button>
    </div>
  );
};

export default Button;