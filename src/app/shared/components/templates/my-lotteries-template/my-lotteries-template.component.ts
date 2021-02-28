import { Component, Input, OnInit } from '@angular/core';
import { Lottery } from '@models/lottery.model';
import { State } from '@models/enums/state.enum';

@Component({
  selector: 'sk-my-lotteries-template',
  templateUrl: './my-lotteries-template.component.html',
  styleUrls: ['./my-lotteries-template.component.scss'],
})
export class MyLotteriesTemplateComponent implements OnInit {
  @Input() state: State;
  @Input() lotteries: Lottery[];

  ngOnInit(): void {}

  create() {

  }
}
