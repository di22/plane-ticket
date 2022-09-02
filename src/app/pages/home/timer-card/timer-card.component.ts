import {Component, OnDestroy, OnInit} from '@angular/core';
import {Time} from "../../../domain/time-counter/models/time";
import {interval, Subscription} from "rxjs";
import {GetSlotsUsecase} from "../../../domain/passenegers/usecases/get-slots.usecase";

@Component({
  selector: 'app-timer-card',
  templateUrl: './timer-card.component.html',
  styleUrls: ['./timer-card.component.css']
})
export class TimerCardComponent implements OnInit, OnDestroy {
  totalTickets: number;
  remainingTickets: number;
  remainingPercentage: number;
  progress: boolean[];
  progressLength: number = 50;
  percentageValue: number = 100;
  percentage: Subscription;
  timeCounter: Time = {days: 0, hours: 0, minutes: 0, seconds: 0};

  constructor(private getSlotsUsecase: GetSlotsUsecase) {
  }
  updateTime(time: Time): void {
    this.timeCounter = time;
  }

  ngOnInit(): void {
   this.percentage = this.getSlotsUsecase.execute().subscribe(res => {
      this.totalTickets = res.length;
      this.remainingTickets = res.filter(s => !s.passenger).length;
      this.updateProgressBar();
    });
  }

  updateProgressBar(): void {
    this.remainingPercentage = Math.floor((this.remainingTickets/this.totalTickets) * this.percentageValue);
    const remainingProgressBarPercentage = Math.floor((this.remainingTickets/this.totalTickets) * this.progressLength);
    this.progress = new Array(this.progressLength).fill(false);
    new Array(remainingProgressBarPercentage).fill(null).forEach((item, index) => {
      this.progress[index] = true;
    });
  }

  ngOnDestroy(): void {
    this.percentage.unsubscribe();
  }
}
