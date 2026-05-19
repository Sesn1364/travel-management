// Store

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/auth/authSlice";
import userReducer from "../redux/user/userSlice"
import tripReducer from "../redux/trip/tripSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    trip: tripReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
