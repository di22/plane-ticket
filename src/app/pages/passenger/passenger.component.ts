import { Component } from '@angular/core';
import {Passenger} from "../../domain/passenegers/models/passenger";

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css']
})
export class PassengerComponent {
  passenger: Passenger;
  passengerToUpdate: Passenger;

  constructor() {}

  getPassenger(passenger: Passenger): void {
    this.passenger = passenger;
  }

  updatePassenger(passenger: Passenger): void {
    this.passengerToUpdate = passenger;
  }
}
