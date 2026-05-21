// Routes Management

import CreateTrip from "../trip-forms/create-trip/CreateTrip";
import Login from "../auths/login/Login";
import Registration from "../auths/registration/Registration";
import ProtectedRoute from "../../routes/ProtectedRoute";
import GuestRoute from "../../routes/GuestRoute";
import EditTrip from "../trip-forms/edit-trip/EditTrip";

const RoutesManagement = [
  {
    path: "/",
    element: (
      <GuestRoute>
        <Login />
      </GuestRoute>
    ),
  },

  {
    path: "/registration",
    element: (
      <GuestRoute>
        <Registration />
      </GuestRoute>
    ),
  },
  {
    path: "/create-trip",
    element: (
      <ProtectedRoute>
        <CreateTrip />
      </ProtectedRoute>
    ),
  },
  {
    path: "/edit-trip/:tripId",
    element: (
      <ProtectedRoute>
        <EditTrip />
      </ProtectedRoute>
    ),
  },
];

export default RoutesManagement;
