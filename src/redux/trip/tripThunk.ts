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
