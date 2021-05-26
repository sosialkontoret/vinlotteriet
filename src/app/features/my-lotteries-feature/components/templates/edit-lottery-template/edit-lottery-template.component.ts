import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Lottery } from '@models/lottery.model';
import { State } from '@models/enums/state.enum';

@Component({
  selector: 'sk-edit-lottery-template',
  templateUrl: './edit-lottery-template.component.html',
  styleUrls: ['./edit-lottery-template.component.scss'],
})
export class EditLotteryTemplateComponent implements OnInit {
  @Input() state: State;
  @Input() lottery: Lottery;
  @Output() updated = new EventEmitter<Lottery>();


  get isLoading(): boolean {
    return this.state === State.IsLoading;
  }

  constructor() {
  }

  ngOnInit() {
  }
}
