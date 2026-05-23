// Trip Card Button Component

import type { TripCardButtonProps } from "./TripCardButtonType";

const TripCardButton = ({
  type,
  onClick,
  children,
  className = "",
  isLoading = false,
}: TripCardButtonProps) => {
  return (
      <button
        type={type}
        onClick={onClick}
        className={`px-4 py-2 rounded-xl bg-sky-100 hover:text-white transition-all duration-300 shadow-sm
        ${className}
      `}
      >
        {isLoading ? "Loading..." : children}
      </button>
  );
};

export default TripCardButton;