import { Component, Input, OnInit, EventEmitter, Output, OnChanges } from '@angular/core';
import { Lottery } from '@models/lottery.model';
import { State } from '@models/enums/state.enum';
import { Participant } from '@models/participant.model';
import { LotteryUtils } from '@utils/lottery';

@Component({
  selector: 'sk-edit-lottery-template',
  templateUrl: './edit-lottery-template.component.html',
  styleUrls: ['./edit-lottery-template.component.scss'],
})
export class EditLotteryTemplateComponent implements OnInit, OnChanges {
  @Input() state: State;
  @Input() lottery: Lottery;
  @Output() updated = new EventEmitter<Lottery>();

  numberOfTickets: number;
  isLoading: boolean;

  ngOnInit() {
    this.isLoading = this.state === State.IsLoading;
    this.numberOfTickets = LotteryUtils.countNumberOfTickets(this.lottery);
  }

  ngOnChanges(): void {
    this.isLoading = this.state === State.IsLoading;
    this.numberOfTickets = LotteryUtils.countNumberOfTickets(this.lottery);
  }

  onAddParticipant(participant: Participant): void {
    if (this.lottery.participants === undefined) {
      this.lottery.participants = [];
    }
    this.lottery.participants.push(participant);
    this.numberOfTickets = LotteryUtils.countNumberOfTickets(this.lottery);
  }
}
