import { Component, Input, OnChanges } from '@angular/core';
import { Lottery } from '@models/lottery.model';

@Component({
  selector: 'sk-waiting-to-start',
  templateUrl: './waiting-to-start.component.html',
  styleUrls: ['./waiting-to-start.component.scss'],
})
export class WaitingToStartComponent implements OnChanges {
  @Input() lottery: Lottery;
  @Input() winners: string[];
  countdownFinished: boolean;
  tickets: number;

  ngOnChanges() {
    this.tickets = 0;
    if (this.lottery.participants) {
      this.lottery.participants.forEach(participant => {
        this.tickets += participant.numberOfTickets;
      });
    }
  }

  setCountDownFinished(event: boolean) {
    this.countdownFinished = event;
  }
}
