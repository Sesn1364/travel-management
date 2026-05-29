// tripApi.ts

import apiClient from "./apiClient";

import type { CreateTripType } from "../../redux/trip/tripTypes";

export const createTripApi = async (tripData: CreateTripType) => {
  const response = await apiClient.post("/trips", tripData);

  return response.data;
};

export const fetchUserTripsApi = async () => {
  const response = await apiClient.get("/trips");

  return response.data;
};

export const deleteTripApi = async (tripId: string) => {
  const response = await apiClient.delete(`/trips/${tripId}`);

  return response.data;
};

export const updateTripApi = async (
  tripId: string,
  tripData: {
    tripName: string;
    country: string;
    state: string;
    city: string;
    startDate: string;
  },
) => {
  const response = await apiClient.put(`/trips/${tripId}`, tripData);

  return response.data;
};
