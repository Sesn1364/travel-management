// tripThunk

import { createAsyncThunk } from "@reduxjs/toolkit";
import type { CreateTripType } from "./tripTypes";
import {
  createTripApi,
  fetchUserTripsApi,
  deleteTripApi,
  updateTripApi,
} from "../../services/api/tripApi";
import { handleApiError } from "../../services/api/handleApiError";

export const createTrip = createAsyncThunk(
  "trip/createTrip",

  async (tripData: CreateTripType, { rejectWithValue }) => {
    try {
      const response = await createTripApi(tripData);

      return response;
    } catch (error: unknown) {
      return rejectWithValue(handleApiError(error));
    }
  },
);

export const fetchUserTrips = createAsyncThunk(
  "trip/fetchUserTrips",

  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchUserTripsApi();

      return response;
    } catch (error: unknown) {
      return rejectWithValue(handleApiError(error));
    }
  },
);

export const deleteTrip = createAsyncThunk(
  "trip/deleteTrip",

  async (tripId: string, { rejectWithValue }) => {
    try {
      const response = await deleteTripApi(tripId);

      return response;
    } catch (error: unknown) {
      return rejectWithValue(handleApiError(error));
    }
  },
);

export const updateTrip = createAsyncThunk(
  "trip/updateTrip",

  async (
    {
      tripId,
      tripData,
    }: {
      tripId: string;
      tripData: {
        tripName: string;
        country: string;
        state: string;
        city: string;
        startDate: string;
      };
    },
    { rejectWithValue },
  ) => {
    try {
      const response = await updateTripApi(tripId, tripData);

      return response;
    } catch (error: unknown) {
      return rejectWithValue(handleApiError(error));
    }
  },
);
