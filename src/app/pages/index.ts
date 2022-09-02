import {HomeComponent} from "./home/home.component";
import {TimerCardComponent} from "./home/timer-card/timer-card.component";
import {PassengerComponent} from "./passenger/passenger.component";
import {PassengerFormComponent} from "./passenger/passenger-form/passenger-form.component";
import {SlotsComponent} from "./passenger/slots/slots.component";
import {BookingStepsComponent} from "./home/booking-steps/booking-steps.component";
import {TimerDirective} from "./home/timer-card/timer.directive";
import {SpaceShipAnimationDirective} from "./home/space-ship-animation.directive";
import {ViewSeatDetailsDirective} from "./passenger/slots/view-seat-details.directive";

export const PagesComponents = [
  HomeComponent,
  TimerCardComponent,
  PassengerComponent,
  PassengerFormComponent,
  SlotsComponent,
  BookingStepsComponent,
  TimerDirective,
  SpaceShipAnimationDirective,
  ViewSeatDetailsDirective
]
