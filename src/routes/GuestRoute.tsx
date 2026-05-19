// Guest Route

import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../app/store";

interface GuestRouteProps {
  children: React.ReactNode;
}

const GuestRoute = ({ children }: GuestRouteProps) => {
  const user = useSelector(
    (state: RootState) => state.user.currentUser,
  );

  if (user) {
    return <Navigate to="/create-trip" replace />;
  }

  return children;
};

export default GuestRoute;