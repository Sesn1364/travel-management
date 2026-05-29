// Trip Card Component

import { Link } from "react-router-dom";
import TripCardButton from "../trip-forms-button/TripCardButton";
import type { TripCardProps } from "./TripCardType";

const TripCard = ({
  trip,
  onDelete,
  isDeleting = false,
}: TripCardProps) => {
  return (
    <div className="bg-white/70 backdrop-blur-xl border border-white/50 rounded-3xl shadow-lg p-6">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-2xl font-bold text-gray-800">
          {trip.tripName}
        </h3>

        <div className="flex items-center gap-3">
          {/* Edit Button */}
          <Link
            to={`/expenses/${trip.id}`}
            className="px-4 py-2 rounded-xl bg-sky-100 text-green-600 hover:bg-green-500 hover:text-white transition-all duration-300 shadow-sm"
          >
            مخارج
          </Link>
          <Link
            to={`/edit-trip/${trip.id}`}
            className="px-4 py-2 rounded-xl bg-sky-100 text-sky-600 hover:bg-sky-500 hover:text-white transition-all duration-300 shadow-sm"
          >
            وبرایش
          </Link>

          {/* Delete Button */}
          <TripCardButton
            type="button"
            onClick={() => onDelete(trip.id)}
            className="text-red-500 hover:bg-red-500"
            isLoading={isDeleting}
          >
            حذف
          </TripCardButton>
        </div>
      </div>

      <p className="text-gray-600">
        📍 {trip.city}, {trip.state}, {trip.country}
      </p>

      <p className="text-gray-500 mt-2">
        📅 {trip.startDate}
      </p>
    </div>
  );
};

export default TripCard;