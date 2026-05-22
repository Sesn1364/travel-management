// tripThunk

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { CreateTripType } from "./tripTypes";

export const createTrip = createAsyncThunk(
  "trip/createTrip",

  async (tripData: CreateTripType, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/trips",
        tripData,
      );

      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(
          error.response?.data?.message || "Create trip failed",
        );
      }
      return rejectWithValue("Something went wrong");
    }
  },
);

export const fetchUserTrips = createAsyncThunk(
  "trip/fetchUserTrips",

  async (userId: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/trips/${userId}`,
      );

      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(
          error.response?.data?.message || "Fetch trips failed",
        );
      }
      return rejectWithValue("Something went wrong");
    }
  },
);

export const deleteTrip = createAsyncThunk(
  "trip/deleteTrip",

  async (tripId: string, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/trips/${tripId}`,
      );

      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(
          error.response?.data?.message || "Delete trip failed",
        );
      }
      return rejectWithValue("Something went wrong");
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
    thunkAPI,
  ) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/api/trips/${tripId}`,
        tripData,
      );

      return response.data.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue(
          error.response?.data?.message || "Update trip failed",
        );
      }

      return thunkAPI.rejectWithValue("Something went wrong");
    }
  },
);
