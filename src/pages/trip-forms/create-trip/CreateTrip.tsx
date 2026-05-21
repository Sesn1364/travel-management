// CreateTrip Page

import TripDashboard from "../components/trip-dashboard/TripDashboard";

const CreateTrip = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-indigo-100 p-6">
      {/* Container */}
      <div className="max-w-6xl mx-auto">
        <TripDashboard />
      </div>
    </div>
  );
};

export default CreateTrip;
