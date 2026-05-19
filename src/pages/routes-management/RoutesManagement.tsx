// Routes Management

import CreateTrip from "../create-trip/CreateTrip";
import Login from "../login/Login";
import Registration from "../registration/Registration";
import ProtectedRoute from "../../routes/ProtectedRoute";

const RoutesManagement = [
  { path: "/", element: <Login /> },
  { path: "/registration", element: <Registration /> },
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
