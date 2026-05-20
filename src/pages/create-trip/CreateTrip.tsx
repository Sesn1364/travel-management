// CreateTrip Page

import { useSelector, useDispatch } from "react-redux";
import type { AppDispatch, RootState } from "../../app/store";
import { clearUser } from "../../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createTrip } from "../../redux/trip/tripThunk";
import { fetchUserTrips } from "../../redux/trip/tripThunk";
import { useEffect } from "react";
import { deleteTrip } from "../../redux/trip/tripThunk";

const CreateTrip = () => {
  const user = useSelector((state: RootState) => state.user.currentUser);
  const trips = useSelector((state: RootState) => state.trip.trips);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(clearUser());
    localStorage.removeItem("user");
    navigate("/");
  };
  const [tripData, setTripData] = useState({
    tripName: "",
    country: "",
    state: "",
    city: "",
    startDate: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTripData({
      ...tripData,
      [e.target.name]: e.target.value,
    });
  };
  const handleCreateTrip = async () => {
    if (!user) return;

    await dispatch(
      createTrip({
        ...tripData,
        userId: user.id,
      }),
    );
  };

  useEffect(() => {
    if (user?.id) {
      dispatch(fetchUserTrips(user.id));
    }
  }, [dispatch, user]);

  const handleDeleteTrip = async (tripId: string) => {
    await dispatch(deleteTrip(tripId));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-indigo-100 p-6">
      {/* Container */}
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">
              Welcome back, {user?.username} 👋
            </h1>

            <p className="text-gray-500 mt-2">
              Plan your next adventure with ease.
            </p>
          </div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="px-5 py-2 rounded-xl bg-red-500 text-white font-medium hover:bg-red-600 transition-all duration-300 shadow-md"
          >
            Logout
          </button>
        </div>

        {/* Create Trip Card */}
        <div className="bg-white/70 backdrop-blur-xl border border-white/50 rounded-3xl shadow-xl p-8 mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Create New Trip
          </h2>

          {/* Form Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Trip Name */}
            <div>
              <label className="block text-sm text-gray-600 mb-2">
                Trip Name
              </label>
              <input
                type="text"
                name="tripName"
                value={tripData.tripName}
                onChange={handleChange}
                placeholder="Summer Vacation"
                className="w-full px-4 py-3 rounded-2xl border border-gray-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all"
              />
            </div>

            {/* Country */}
            <div>
              <label className="block text-sm text-gray-600 mb-2">
                Country
              </label>
              <input
                type="text"
                name="country"
                value={tripData.country}
                onChange={handleChange}
                placeholder="Italy"
                className="w-full px-4 py-3 rounded-2xl border border-gray-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all"
              />
            </div>

            {/* State */}
            <div>
              <label className="block text-sm text-gray-600 mb-2">State</label>
              <input
                type="text"
                name="state"
                value={tripData.state}
                onChange={handleChange}
                placeholder="Tuscany"
                className="w-full px-4 py-3 rounded-2xl border border-gray-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all"
              />
            </div>

            {/* City */}
            <div>
              <label className="block text-sm text-gray-600 mb-2">City</label>
              <input
                type="text"
                placeholder="Florence"
                name="city"
                value={tripData.city}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-2xl border border-gray-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all"
              />
            </div>

            {/* Start Date */}
            <div>
              <label className="block text-sm text-gray-600 mb-2">
                Start Date
              </label>
              <input
                type="date"
                name="startDate"
                value={tripData.startDate}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-2xl border border-gray-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all"
              />
            </div>
          </div>

          {/* Button */}
          <div className="mt-8">
            <button
              className="px-8 py-3 rounded-2xl bg-sky-500 text-white font-semibold hover:bg-sky-600 transition-all duration-300 shadow-lg"
              onClick={handleCreateTrip}
            >
              Create Trip
            </button>
          </div>
        </div>

        {/* Trips Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            My Trips
          </h2>

          {/* Empty State */}
          {trips.length === 0 ? (
            <div className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-3xl shadow-lg p-10 text-center">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No trips yet ✈️
              </h3>

              <p className="text-gray-500">
                Start by creating your first trip.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {trips.map((trip) => (
                <div
                  key={trip.id}
                  className="bg-white/70 backdrop-blur-xl border border-white/50 rounded-3xl shadow-lg p-6"
                >
                  <div className="flex items-start justify-between mb-5">
                    <h3 className="text-2xl font-bold text-gray-800">
                      {trip.tripName}
                    </h3>

                    <button
                      onClick={() => handleDeleteTrip(trip.id)}
                      className="px-4 py-2 rounded-xl bg-red-100 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 shadow-sm"
                    >
                      Delete
                    </button>
                  </div>

                  <p className="text-gray-600">
                    📍 {trip.city}, {trip.state}, {trip.country}
                  </p>

                  <p className="text-gray-500 mt-2">📅 {trip.startDate}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateTrip;
