// Routes Management

import CreateTrip from "../create-trip/CreateTrip";
import Login from "../login/Login";
import Registration from "../registration/Registration";
import ProtectedRoute from "../../routes/ProtectedRoute";
import GuestRoute from "../../routes/GuestRoute";

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
];

export default RoutesManagement;
