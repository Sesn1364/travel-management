import { createSlice } from "@reduxjs/toolkit";

import type { TripState } from "./tripTypes";

const initialState: TripState = {
  trips: [],
};

const tripSlice = createSlice({
  name: "trip",

  initialState,

  reducers: {
    addTrip: (state, action) => {
      state.trips.push(action.payload);
    },
  },
});

export const { addTrip } = tripSlice.actions;

export default tripSlice.reducer;