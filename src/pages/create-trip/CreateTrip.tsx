// CreateTrip Page

import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import { useDispatch } from "react-redux";
import { clearUser } from "../../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import { addTrip } from "../../redux/trip/tripSlice";

const CreateTrip = () => {
  const user = useSelector((state: RootState) => state.user.currentUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(clearUser());
    localStorage.removeItem("user");
    navigate("/");
  };

  const createTestTrip = () => {
    dispatch(
      addTrip({
        id: crypto.randomUUID(),

        tripName: "North Trip",

        country: "Iran",

        state: "Mazandaran",

        city: "Ramsar",

        startDate: "2026-05-20",

        userId: user?.id,
      }),
    );
  };

  const trips = useSelector((state: RootState) => state.trip.trips);

  return (
    <>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={createTestTrip}>Create Test Trip</button>
      {trips.map((trip) => (
        <div key={trip.id}>
          <h2>{trip.tripName}</h2>
        </div>
      ))}
      <h1 className="text-black">Welcome {user?.username}</h1>
    </>
  );
};

export default CreateTrip;
