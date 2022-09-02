import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Passenger} from "../../../domain/passenegers/models/passenger";
import {Slot} from "../../../domain/passenegers/models/slot";
import {GetSlotsUsecase} from "../../../domain/passenegers/usecases/get-slots.usecase";

@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.css']
})
export class SlotsComponent implements OnChanges, OnInit {
  @Output() changePassenger: EventEmitter<Passenger>= new EventEmitter<Passenger>();
  @Input() passenger: Passenger;
  slotToUpdate: Slot | null;
  slots: Slot[];
  passengerDetails: Passenger | null;
  viewDetails: boolean = false;

  constructor(private getSlotsUsecase: GetSlotsUsecase) {
  }

  ngOnChanges(): void {
        if (this.passenger) this.slotToUpdate ? this.updatePassengerMode() : this.pickRandomSeat2();
    }

  ngOnInit(): void {
    this.getSlots();
  }

  getSlots(): void {
    this.getSlotsUsecase.execute().subscribe(res => {
      this.slots = res;
    });
  }

  // I have 2 ways to pick a seat , the first and the easiest is to get the first free seat,
  // and the second is to pick a random one
  pickRandomSeat(): void {
   const freeSeat = this.slots.find(s => !s.passenger);
   if (freeSeat) {
     this.slots.forEach(s => {
       if (s.seatNumber === freeSeat.seatNumber) s.passenger = this.passenger;
     });
   }
   else {
     window.alert('Sorry, the plan completed')
   }
  }

  pickRandomSeat2(): void {
    const freeSeats = this.slots.filter(s => !s.passenger);
    if (freeSeats.length) {
      if (freeSeats.length === 1) {
        this.updateSlot(freeSeats[0]);
      } else {
        const random = Math.floor(Math.random() * freeSeats.length);
        this.updateSlot(freeSeats[random]);
      }
    }
    else {
      window.alert('Sorry, the plan completed')
    }
  }

  updatePassengerMode(): void {
    this.updateSlot(this.slotToUpdate as Slot);
    this.slotToUpdate = null;
  }

  updateSlot(slot: Slot): void {
    this.slots.forEach(s => {
      if (s.seatNumber === slot.seatNumber) s.passenger = this.passenger;
    });
    this.getSlotsUsecase.slot = this.slots;
  }

  updatePassenger(slot: Slot): void {
    if (slot.passenger) {
      this.changePassenger.emit(slot.passenger);
      this.slotToUpdate = slot;
    }
  }

  toggleCard(status: 'hide' | 'show', slot: Slot): void {
    if (!slot?.passenger) return
    this.viewDetails = status === 'show';
    this.passengerDetails = this.viewDetails ? slot.passenger : null;
  }
}
