// tripSlice

import { createSlice } from "@reduxjs/toolkit";
import { createTrip, fetchUserTrips, deleteTrip } from "./tripThunk";
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
  extraReducers: (builder) => {
    builder.addCase(createTrip.fulfilled, (state, action) => {
      state.trips.push(action.payload.data);
    });

    builder.addCase(fetchUserTrips.fulfilled, (state, action) => {
      state.trips = action.payload.data;
    });

    builder.addCase(deleteTrip.fulfilled, (state, action) => {
      state.trips = state.trips.filter(
        (trip) => trip.id !== action.payload.data.id,
      );
    });
  },
});

export const { addTrip } = tripSlice.actions;

export default tripSlice.reducer;
