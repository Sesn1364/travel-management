// Edit Trip Container Component

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../../../app/store";
import { useState } from "react";
import { updateTrip } from "../../../../redux/trip/tripThunk";
import TripFormsInput from "../../components/trip-forms-input/TripFormsInput";
import Button from "../../../../components/common/button/Button";
import TripFormsHeader from "../../components/trip-forms-header/TripFormsHeader";
import toast from "react-hot-toast";

const EditTripContainer = () => {
  const { tripId } = useParams();
  const trips = useSelector((state: RootState) => state.trip.trips);
  const selectedTrip = trips.find((trip) => trip.id === tripId);
  const dispatch = useDispatch<AppDispatch>();

  const handleUpdateTrip = async () => {
    if (!tripId) return;

    const resultAction = await dispatch(
      updateTrip({
        tripId,
        tripData,
      }),
    );

    if (updateTrip.fulfilled.match(resultAction)) {
      toast.success(resultAction.payload.message);
    }
  };
  const [tripData, setTripData] = useState({
    tripName: selectedTrip?.tripName || "",
    country: selectedTrip?.country || "",
    state: selectedTrip?.state || "",
    city: selectedTrip?.city || "",
    startDate: selectedTrip?.startDate || "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTripData({
      ...tripData,
      [e.target.name]: e.target.value,
    });
  };

  if (!selectedTrip) {
    return (
      <div className="text-center text-gray-600 mt-10">Trip not found...</div>
    );
  }

  return (
    <>
      {/* Header */}
      <TripFormsHeader
        title="Edit Trip ✈️"
        subtitle="Update your travel information."
      />

      {/* Card */}
      <div className="bg-white/70 backdrop-blur-xl border border-white/50 rounded-3xl shadow-xl p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Trip Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Trip Name */}
          <TripFormsInput
            lableText="Trip Name"
            type="text"
            name="tripName"
            value={tripData.tripName}
            onChange={handleChange}
            className={` focus:ring-orange-400`}
          />

          {/* Country */}
          <TripFormsInput
            lableText="Country"
            type="text"
            name="country"
            value={tripData.country}
            onChange={handleChange}
            className={` focus:ring-orange-400`}
          />

          {/* State */}
          <TripFormsInput
            lableText="State"
            type="text"
            name="state"
            value={tripData.state}
            onChange={handleChange}
            className={` focus:ring-orange-400`}
          />

          {/* City */}
          <TripFormsInput
            lableText="City"
            type="text"
            name="city"
            value={tripData.city}
            onChange={handleChange}
            className={` focus:ring-orange-400`}
          />

          {/* Start Date */}
          <TripFormsInput
            lableText="Start Date"
            type="date"
            name="startDate"
            value={tripData.startDate}
            onChange={handleChange}
            className={` focus:ring-orange-400`}
          />
        </div>

        {/* Button */}
        <Button
          type="button"
          className="bg-orange-500 hover:bg-orange-600" // کلاس‌ها را بهتر است بدون حلقه اضافه بنویسید یا مدیریت کنید
          onClick={handleUpdateTrip}
        >
          Save Changes
        </Button>
      </div>
    </>
  );
};

export default EditTripContainer;
