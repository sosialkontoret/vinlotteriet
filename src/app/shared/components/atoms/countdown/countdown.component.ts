import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'sk-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss'],
})
export class CountdownComponent implements OnInit, OnDestroy {
  @Input() eventDate: Date;
  @Output() countDownFinished = new EventEmitter<boolean>();
  diff: number;
  countDownResult: number;
  interval: any;
  isLoading: boolean;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  ngOnInit() {
    this.isLoading = true;
    this.interval = interval(1000)
      .pipe(
        map(() => {
          this.diff = Math.floor((this.eventDate.getTime() - new Date().getTime()) / 1000);
          if (this.diff < 0) {
            this.days = 0;
            this.hours = 0;
            this.minutes = 0;
            this.seconds = 0;
            this.countDownFinished.emit(true);
          }
        }),
      )
      .subscribe(() => {
        this.days = this.getDays(this.diff);
        this.hours = this.getHours(this.diff);
        this.minutes = this.getMinutes(this.diff);
        this.seconds = this.getSeconds(this.diff);
        this.isLoading = false;
      });
  }

  getDays(time: number): number {
    return Math.floor(time / 86400);
  }

  getHours(time: number): number {
    const days = Math.floor(time / 86400);
    const remainder = time - days * 86400;
    return Math.floor(remainder / 3600) % 24;
  }

  getMinutes(time: number): number {
    const days = Math.floor(time / 86400);
    let remainder = time - days * 86400;
    const hours = Math.floor(remainder / 3600) % 24;
    remainder -= hours * 86400;
    return Math.floor(remainder / 60) % 60;
  }

  getSeconds(time: number): number {
    const days = Math.floor(time / 86400);
    let remainder = time - days * 86400;
    const hours = Math.floor(remainder / 3600) % 24;
    remainder -= hours * 86400;
    const minutes = Math.floor(remainder / 60) % 60;
    remainder -= minutes * 60;
    return remainder % 60;
  }
}
