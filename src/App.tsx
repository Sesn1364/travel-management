// // //َ App

import { useRoutes } from "react-router-dom";
import "./App.css";
import RoutesManagement from "./pages/routes-management/RoutesManagement";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./redux/user/userSlice";
import { jwtDecode } from "jwt-decode";

interface JwtPayload {
  id: number;
  username: string;
  email: string;
  exp: number;
}

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decoded = jwtDecode<JwtPayload>(token);

        const currentTime = Date.now() / 1000;

        // check expiration
        if (decoded.exp < currentTime) {
          localStorage.removeItem("token");
          return;
        }

        const user = {
          id: decoded.id,
          username: decoded.username,
          email: decoded.email,
        };

        dispatch(setCurrentUser(user));
      } catch {
        console.log("Invalid token");
        localStorage.removeItem("token");
      }
    }
  }, [dispatch]);

  const routes = useRoutes(RoutesManagement);

  return routes;
}

export default App;