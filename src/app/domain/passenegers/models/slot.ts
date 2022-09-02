import {Passenger} from "./passenger";

export interface Slot {
  seatNumber: number;
  passenger?: Passenger | null;
}
