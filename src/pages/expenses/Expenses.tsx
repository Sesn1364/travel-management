// Expenses Page

import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import { useState } from "react";
import { useParams } from "react-router-dom";
import TripFormsHeader from "../trip-forms/components/trip-forms-header/TripFormsHeader";

const Expenses = () => {
  const trips = useSelector((state: RootState) => state.trip.trips);
  const { tripId } = useParams();
  const selectedTrip = trips.find((trip) => trip.id === tripId);

  const [tripData, setTripData] = useState({
    tripName: selectedTrip?.tripName,
    startDate: selectedTrip?.startDate,
  });

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-fuchsia-100 via-white to-indigo-100 p-6">
        {/* Container */}
        <div className="max-w-4xl mx-auto">
          <TripFormsHeader
            title="مدیریت مخارج 🧾"
            subtitle="هزینه‌های سفر خود را به راحتی پیگیری و مدیریت کنید."
            username={tripData.tripName}
          />
        </div>
      </div>
    </>
  );
};

export default Expenses;
