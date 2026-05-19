//َ App

import { useRoutes } from "react-router-dom";
import "./App.css";
import RoutesManagement from "./pages/routes-management/RoutesManagement";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./redux/user/userSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const savedUser = localStorage.getItem("user");

    if (savedUser) {
      dispatch(setCurrentUser(JSON.parse(savedUser)));
    }
  }, []);

  const routs = useRoutes(RoutesManagement);

  return routs;
}

export default App;
