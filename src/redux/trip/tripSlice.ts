import { createSlice } from "@reduxjs/toolkit";
import { createTrip, fetchUserTrips } from "./tripThunk";
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
  },
});

export const { addTrip } = tripSlice.actions;

export default tripSlice.reducer;
