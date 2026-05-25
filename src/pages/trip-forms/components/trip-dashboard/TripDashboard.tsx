// Trip Dashboard Component

import { useSelector, useDispatch } from "react-redux";
import type { AppDispatch, RootState } from "../../../../app/store";
import { clearUser } from "../../../../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createTrip } from "../../../../redux/trip/tripThunk";
import { fetchUserTrips } from "../../../../redux/trip/tripThunk";
import { useEffect } from "react";
import { deleteTrip } from "../../../../redux/trip/tripThunk";
import TripFormsInput from "../../components/trip-forms-input/TripFormsInput";
import Button from "../../../../components/common/button/Button";
import TripFormsHeader from "../../components/trip-forms-header/TripFormsHeader";
import Modal from "../../../../components/common/modal/Modal";
import toast from "react-hot-toast";
import TripCard from "../trip-card/TripCard";

const TripDashboard = () => {
  const user = useSelector((state: RootState) => state.user.currentUser);
  const { trips, isCreating, isFetching, error, isDeleting } = useSelector(
    (state: RootState) => state.trip,
  );
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTripId, setSelectedTripId] = useState<string | null>(null);
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
  const [searchInput, setSearchInput] = useState("");
  const [appliedSearch, setAppliedSearch] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTripData({
      ...tripData,
      [e.target.name]: e.target.value,
    });
  };
  const handleCreateTrip = async () => {
    if (!user) return;

    const resultAction = await dispatch(
      createTrip({
        ...tripData,
        userId: user.id,
      }),
    );

    if (createTrip.fulfilled.match(resultAction)) {
      toast.success(resultAction.payload.message);

      dispatch(fetchUserTrips(user.id));

      setTripData({
        tripName: "",
        country: "",
        state: "",
        city: "",
        startDate: "",
      });
    }
  };

  useEffect(() => {
    if (user?.id) {
      dispatch(fetchUserTrips(user.id));
    }
  }, [dispatch, user]);

  const openDeleteModal = (tripId: string) => {
    setSelectedTripId(tripId);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTripId(null);
  };
  const confirmDeleteTrip = async () => {
    if (!selectedTripId) return;

    await dispatch(deleteTrip(selectedTripId));

    closeModal();
  };

  const handleSearchTrips = () => {
    setAppliedSearch(searchInput);
  };

  const displayedTrips = appliedSearch
    ? trips.filter((trip) =>
        trip.tripName.toLowerCase().includes(appliedSearch.toLowerCase()),
      )
    : trips;

  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <TripFormsHeader
          title="Welcome back"
          subtitle="Plan your next adventure with ease."
          username={user?.username}
        />

        {/* Logout Button */}
        <Button
          type="button"
          onClick={handleLogout}
          className="px-5 py-2 rounded-xl bg-red-500 font-medium hover:bg-red-600 shadow-md"
        >
          Logout
        </Button>
      </div>

      {/* Create Trip Card */}
      <div className="bg-white/70 backdrop-blur-xl border border-white/50 rounded-3xl shadow-xl p-8 mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Create New Trip
        </h2>

        {/* Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Trip Name */}
          <TripFormsInput
            lableText="Trip Name"
            type="text"
            name="tripName"
            value={tripData.tripName}
            onChange={handleChange}
            placeholder="Summer Vacation"
            className={` focus:ring-sky-400`}
          />

          {/* Country */}
          <TripFormsInput
            lableText="Country"
            type="text"
            name="country"
            value={tripData.country}
            onChange={handleChange}
            placeholder="Italy"
            className={` focus:ring-sky-400`}
          />

          {/* State */}
          <TripFormsInput
            lableText="State"
            type="text"
            name="state"
            value={tripData.state}
            onChange={handleChange}
            placeholder="Tuscany"
            className={` focus:ring-sky-400`}
          />

          {/* City */}
          <TripFormsInput
            lableText="City"
            type="text"
            name="city"
            value={tripData.city}
            onChange={handleChange}
            placeholder="Florence"
            className={` focus:ring-sky-400`}
          />

          {/* Start Date */}
          <TripFormsInput
            lableText="Start Date"
            type="date"
            name="startDate"
            value={tripData.startDate}
            onChange={handleChange}
            className={` focus:ring-sky-400`}
          />
        </div>

        {/* Button */}
        <Button
          type="button"
          className="bg-sky-500 hover:bg-sky-600"
          onClick={handleCreateTrip}
          isLoading={isCreating}
        >
          Create Trip
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Search by trip name..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="
      flex-1
      px-4
      py-3
      rounded-2xl
      border
      border-gray-200
      bg-white/80
      focus:outline-none
      focus:ring-2
      focus:ring-sky-400
    "
        />

        <Button
          type="button"
          onClick={handleSearchTrips}
          className="bg-sky-500 hover:bg-sky-600"
        >
          Search
        </Button>
      </div>

      {/* Trips Section */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">My Trips</h2>

        {/* Empty State */}
        {isFetching ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((item) => (
              <div
                key={item}
                className="bg-white/70 backdrop-blur-xl border border-white/50 rounded-3xl shadow-lg p-6 animate-pulse"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  {/* Fake Title */}
                  <div className="h-8 w-40 bg-gray-200 rounded-xl"></div>

                  {/* Fake Buttons */}
                  <div className="flex gap-3">
                    <div className="h-10 w-20 bg-sky-100 rounded-xl"></div>

                    <div className="h-10 w-20 bg-red-100 rounded-xl"></div>
                  </div>
                </div>

                {/* Fake Location */}
                <div className="h-5 w-52 bg-gray-200 rounded-lg mb-4"></div>

                {/* Fake Date */}
                <div className="h-5 w-36 bg-gray-200 rounded-lg"></div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 rounded-3xl p-10 text-center shadow-lg">
            <h3 className="text-2xl font-bold text-red-500 mb-3">
              Failed to load trips
            </h3>

            <p className="text-red-400">
              Something went wrong while fetching your trips.
            </p>
            <button
              onClick={() => {
                if (user?.id) {
                  dispatch(fetchUserTrips(user.id));
                }
              }}
              className="mt-6 px-6 py-3 rounded-2xl bg-red-500 text-white font-semibold hover:bg-red-600 transition-all duration-300 shadow-lg"
            >
              Try Again
            </button>
          </div>
        ) : displayedTrips.length === 0 ? (
          <div className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-3xl shadow-lg p-10 text-center">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No trips yet ✈️
            </h3>

            <p className="text-gray-500">Start by creating your first trip.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {displayedTrips.map((trip) => (
              <TripCard
                key={trip.id}
                trip={trip}
                onDelete={openDeleteModal}
                isDeleting={isDeleting}
              />
            ))}
          </div>
        )}
      </div>
      <Modal
        isOpen={isModalOpen}
        title="Delete Trip"
        message="Are you sure you want to delete this trip?"
        confirmText="Yes Delete"
        cancelText="Cancel"
        onConfirm={confirmDeleteTrip}
        onCancel={closeModal}
      />
    </>
  );
};

export default TripDashboard;
