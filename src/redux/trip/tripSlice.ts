// tripSlice

import { createSlice } from "@reduxjs/toolkit";
import {
  createTrip,
  fetchUserTrips,
  deleteTrip,
  updateTrip,
} from "./tripThunk";
import type { TripState } from "./tripTypes";

const initialState: TripState = {
  trips: [],
  isCreating: false,
  isFetching: false,
  isDeleting: false,
  isUpdating: false,
  error: null,
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
    builder.addCase(createTrip.pending, (state) => {
      state.isCreating = true;
    });

    builder.addCase(createTrip.fulfilled, (state, action) => {
      state.trips.push(action.payload.data);
      state.isCreating  = false;
    });
    builder.addCase(createTrip.rejected, (state) => {
      state.isCreating  = false;
      state.error = "Failed to create trip";
    });

    builder.addCase(fetchUserTrips.pending, (state) => {
      state.isFetching = true;
    });

    builder.addCase(fetchUserTrips.fulfilled, (state, action) => {
      state.trips = action.payload.data;
      state.isFetching = false;
    });

    builder.addCase(fetchUserTrips.rejected, (state) => {
      state.isFetching = false;
      state.error = "Failed to fetch trips";
    });

    builder.addCase(deleteTrip.fulfilled, (state, action) => {
      state.trips = state.trips.filter(
        (trip) => trip.id !== action.payload.data.id,
      );
    });

    builder.addCase(updateTrip.fulfilled, (state, action) => {
      state.trips = state.trips.map((trip) =>
        trip.id === action.payload.id ? action.payload : trip,
      );
    });
  },
});

export const { addTrip } = tripSlice.actions;

export default tripSlice.reducer;
