import { Injectable } from "@angular/core";
import {Observable, of} from "rxjs";
import {Slot} from "../models/slot";

@Injectable({
  providedIn: "root",
})
export class GetSlotsUsecase {
  private slots: Slot[] = [
    {seatNumber: 30, passenger: null},
    {seatNumber: 31, passenger: null},
    {seatNumber: 1, passenger: null},
    {seatNumber: 6, passenger: null},
    {seatNumber: 7, passenger: null},
    {seatNumber: 8, passenger: null},
    {seatNumber: 13, passenger: null},
    {seatNumber: 14, passenger: null},
    {seatNumber: 15, passenger: null},
    {seatNumber: 20, passenger: null},
    {seatNumber: 21, passenger: null},
    {seatNumber: 22, passenger: null},
    {seatNumber: 27, passenger: null},
    {seatNumber: 28, passenger: null},
    {seatNumber: 29, passenger: null},
  ];

  constructor() {}

  execute(): Observable<Slot[]> {
    return of(this.slots);
  }

  set slot(slots: Slot[]) {
    this.slots = slots;
  }
}
