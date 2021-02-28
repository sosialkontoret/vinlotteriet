import {Component, Input, OnInit} from '@angular/core';
import {Lottery} from '@models/lottery.model';

@Component({
  selector: 'sk-lottery-list',
  templateUrl: './lottery-list.component.html',
  styleUrls: ['./lottery-list.component.scss']
})
export class LotteryListComponent implements OnInit {

  @Input() lotteries: Lottery[];

  constructor() { }

  ngOnInit(): void {
  }

  trackLottery(index: number, lottery: Lottery): string {
    return lottery.id;
  }

}
