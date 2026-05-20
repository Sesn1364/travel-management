// tripTypes

export interface CreateTripType {
  tripName: string;
  country: string;
  state: string;
  city: string;
  startDate: string;
  userId: string;
}

export interface TripType extends CreateTripType {
  id: string;
}

export interface TripState {
  trips: TripType[];
}