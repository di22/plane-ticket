import {Directive, Output, EventEmitter, OnDestroy, OnInit} from '@angular/core';

import { Subscription, interval } from 'rxjs';
import {Time} from "../../../domain/time-counter/models/time";

@Directive({
  selector: '[timer]'
})
export class TimerDirective implements OnInit, OnDestroy {
  @Output() value = new EventEmitter<Time>();
  subscription: Subscription = new Subscription();
  targetDate = new Date('Sep 10 2022 00:00:00');
  milliSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  SecondsInAMinute  = 60;

  timeDifference: number = 0;
  seconds: number = 0;
  minutes: number = 0;
  hours: number = 0;
  days: number = 0;

  constructor() {}

   getTimeDifference () {
    this.timeDifference = this.targetDate.getTime() - new  Date().getTime();
    this.updateTime(this.timeDifference);
  }

   updateTime (timeDifference: number) {
    this.seconds = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
    this.minutes = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
    this.hours = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
    this.days = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
  }

  ngOnInit() {
    this.subscription = interval(1000).subscribe(__ => {
      this.getTimeDifference();
      this.value.emit({days: this.days, hours: this.hours, minutes: this.minutes, seconds: this.seconds})
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
