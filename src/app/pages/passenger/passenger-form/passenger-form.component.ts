import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {GetRandomPassengerUsecase} from "../../../domain/passenegers/usecases/get-random-passenger.usecase";
import {Passenger} from "../../../domain/passenegers/models/passenger";

@Component({
  selector: 'app-passenger-form',
  templateUrl: './passenger-form.component.html',
  styleUrls: ['./passenger-form.component.css']
})
export class PassengerFormComponent implements OnChanges, OnInit {
  @Output() pickUpPassenger: EventEmitter<Passenger> = new EventEmitter<Passenger>();
  @Input() passengerToUpdate: Passenger | null;
  passengerForm: FormGroup;
  fullName: FormControl<string>;
  email: FormControl<string>;
  dateOfBirth: FormControl<string>;
  submitted: boolean = false;
  passenger: Passenger;

  constructor(private formBuilder: FormBuilder, private getRandomPassengerUsecase: GetRandomPassengerUsecase) {
  }

  ngOnChanges(): void {
        if (this.passengerToUpdate) {
          this.passengerForm.patchValue(this.passengerToUpdate);
        }
    }

  ngOnInit(): void {
    this.passengerForm = this.formBuilder.nonNullable.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dateOfBirth: ['', Validators.required]
    });
    this.fullName = this.passengerForm.controls['fullName'] as FormControl;
    this.email = this.passengerForm.controls['email'] as FormControl;
    this.dateOfBirth = this.passengerForm.controls['dateOfBirth'] as FormControl;
  }

  pickRandomPassenger(): void {
    this.getRandomPassengerUsecase.execute().subscribe(res => {
      this.passenger = res;
      this.passengerForm.patchValue(this.passenger);
    });
  }

  savePassenger(): void {
    this.passengerToUpdate ? this.updatePassenger() : this.addPassenger();
  }

  addPassenger(): void {
    this.submitted = true;
    if (this.passengerForm.invalid) return;
    const updatedPassenger = {...this.passenger, ...this.passengerForm.value}
    this.pickUpPassenger.emit(updatedPassenger);
    this.reset();
  }

  updatePassenger(): void {
    this.submitted = true;
    if (this.passengerForm.invalid) return;
    const updatedPassenger = {...this.passengerToUpdate, ...this.passengerForm.value};
    this.pickUpPassenger.emit(updatedPassenger);
    this.reset();
  }

  reset(): void {
    this.submitted = false;
    this.passengerToUpdate = null;
    this.passengerForm.reset();
  }
}
