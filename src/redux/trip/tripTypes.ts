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
  isCreating: boolean;
  isFetching: boolean;
  isDeleting: boolean;
  isUpdating: boolean;
  error: string | null;
}