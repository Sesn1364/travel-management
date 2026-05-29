// Trip Forms Header Component

import type { TripFormHeaderProps } from "./TripFormsHeaderType";

const TripFormsHeader = ({
  title,
  subtitle,
  username,
}: TripFormHeaderProps) => {
  return (
    <div className="mb-10">
      <h1 className="text-4xl font-bold text-gray-800">
        {username ? `${title}, ${username} ` : title}
      </h1>

      <p className="text-gray-500 mt-2">{subtitle}</p>
    </div>
  );
};

export default TripFormsHeader;
