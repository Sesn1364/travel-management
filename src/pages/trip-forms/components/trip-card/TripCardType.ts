// Trip Card Type

import type { TripType } from "../../../../redux/trip/tripTypes";

export type TripCardProps = {
  trip: TripType;
  onDelete: (tripId: string) => void;
  isDeleting?: boolean;
};