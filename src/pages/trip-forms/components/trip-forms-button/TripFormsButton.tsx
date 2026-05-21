import type { TripFormsButtonProps } from "./TripFormsButtonType";

const TripFormsButton = ({
  type,
  onClick,
  children,
  className = "",
}: TripFormsButtonProps) => {
  return (
    <div className="mt-8">
      <button
        type={type}
        onClick={onClick}
        className={`px-8 py-3 rounded-2xl text-white font-semibold transition-all duration-300 shadow-lg
        ${className}
      `}
      >
        {children}
      </button>
    </div>
  );
};

export default TripFormsButton
