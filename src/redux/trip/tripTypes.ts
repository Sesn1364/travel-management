export interface Trip {
  id: string;

  tripName: string;

  country: string;

  state: string;

  city: string;

  startDate: string;

  userId: string;
}

export interface TripState {
  trips: Trip[];
}