// EditTrip Page

import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../app/store";
import { useEffect, useState } from "react";
import { updateTrip } from "../../../redux/trip/tripThunk";
import TripFormsInput from "../components/trip-forms-input/TripFormsInput";
import TripFormsButton from "../components/trip-forms-button/TripFormsButton";

const EditTrip = () => {
  const { tripId } = useParams();
  const trips = useSelector((state: RootState) => state.trip.trips);
  const selectedTrip = trips.find((trip) => trip.id === tripId);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdateTrip = async () => {
    if (!tripId) return;

    await dispatch(
      updateTrip({
        tripId,
        tripData,
      }),
    );

    navigate("/create-trip");
  };
  const [tripData, setTripData] = useState({
    tripName: "",
    country: "",
    state: "",
    city: "",
    startDate: "",
  });
  useEffect(() => {
    if (selectedTrip) {
      setTripData({
        tripName: selectedTrip.tripName,
        country: selectedTrip.country,
        state: selectedTrip.state,
        city: selectedTrip.city,
        startDate: selectedTrip.startDate,
      });
    }
  }, [selectedTrip]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTripData({
      ...tripData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-white to-pink-100 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-800">Edit Trip ✈️</h1>

          <p className="text-gray-500 mt-2">Update your travel information.</p>
        </div>

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
          <TripFormsButton
            type="button"
            className="bg-orange-500 hover:bg-orange-600" // کلاس‌ها را بهتر است بدون حلقه اضافه بنویسید یا مدیریت کنید
            onClick={handleUpdateTrip}
          >
            Save Changes
          </TripFormsButton>
        </div>
      </div>
    </div>
  );
};

export default EditTrip;
