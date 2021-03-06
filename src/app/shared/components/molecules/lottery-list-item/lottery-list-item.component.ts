import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Lottery } from '@models/lottery.model';
import { LotteryUtils } from '@utils/lottery';

@Component({
  selector: 'sk-lottery-list-item',
  templateUrl: './lottery-list-item.component.html',
  styleUrls: ['./lottery-list-item.component.scss'],
})
export class LotteryListItemComponent implements OnInit, OnChanges {
  @Input() lottery: Lottery | undefined;

  routerLink: string[] = [];
  numberOfTickets: number = 0;

  ngOnInit(): void {
    this.numberOfTickets = LotteryUtils.countNumberOfTickets(this.lottery);
    this.routerLink = ['/', 'my-lotteries', this.lottery?.id ?? ''];
  }

  ngOnChanges(): void {
    this.numberOfTickets = LotteryUtils.countNumberOfTickets(this.lottery);
    this.routerLink = ['/', 'my-lotteries', this.lottery?.id ?? ''];
  }
}
