//َ App

import { useRoutes } from "react-router-dom";
import "./App.css";
import RoutesManagement from "./pages/routes-management/RoutesManagement";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./redux/user/userSlice";

function App() {
  const SESSION_DURATION = 6 * 60 * 60 * 1000;
  const dispatch = useDispatch();

  useEffect(() => {
    const savedUser = localStorage.getItem("user");

    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);

      const currentTime = Date.now();

      const isSessionExpired =
        currentTime - parsedUser.loginTime > SESSION_DURATION;

      if (isSessionExpired) {
        localStorage.removeItem("user");
      } else {
        dispatch(setCurrentUser(parsedUser.user));
      }
    }
  }, []);

  const routs = useRoutes(RoutesManagement);

  return routs;
}

export default App;
