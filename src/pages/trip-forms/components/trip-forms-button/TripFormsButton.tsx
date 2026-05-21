import type { TripFormsButtonProps } from "./TripFormsButtonType";

const TripFormsButton = ({
  type,
  onClick,
  children,
  className = "",
  isLoading = false,
  disabled = false,
}: TripFormsButtonProps) => {
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

export default TripFormsButton;
