import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Lottery } from '@models/lottery.model';
import { State } from '@models/enums/state.enum';

@Component({
  selector: 'sk-new-lottery-template',
  templateUrl: './new-lottery-template.component.html',
  styleUrls: ['./new-lottery-template.component.scss'],
})
export class NewLotteryTemplateComponent implements OnInit {
  @Input() state: State;
  @Input() userId: string;
  @Output() createLottery = new EventEmitter<Lottery>();

  private title = '';
  private description = '';
  private date: Date = new Date();
  private numberOfDraws = 1;

  ngOnInit() {
    this.setupForm();
  }

  titleUpdated(title: string) {
    this.title = title;
  }

  descriptionUpdated(description: string) {
    this.description = description;
  }

  dateUpdated(date: Date) {
    this.date = date;
  }

  numberOfDrawsUpdated(numberOfDraws: number) {
    this.numberOfDraws = numberOfDraws;
  }

  create() {
    this.createLottery.emit({
      userId: this.userId,
      title: this.title,
      description: this.description,
      startDate: this.date,
      numberOfDraws: this.numberOfDraws,
    });
  }

  private setupForm() {}
}
