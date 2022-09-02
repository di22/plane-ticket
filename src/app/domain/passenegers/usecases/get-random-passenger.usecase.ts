import { Injectable } from "@angular/core";
import {map, Observable} from "rxjs";
import {PassengersRepository} from "../passengers.repository";
import {Passenger} from "../models/passenger";


@Injectable({
  providedIn: "root",
})
export class GetRandomPassengerUsecase {
  constructor(private passengersRepository: PassengersRepository) {}

  execute(): Observable<Passenger> {
    return this.passengersRepository.getRandomPassenger().pipe(map(res => {
      const passenger = res.results[0];
      return {
        fullName: `${passenger.name.title}: ${passenger.name.first} ${passenger.name.last}`,
        email: passenger.email,
        dateOfBirth: new Date(passenger.dob.date).toISOString().split('T')[0],
        age: passenger.dob.age
      }
    }));
  }
}
