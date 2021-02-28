import { Component, Input, OnInit } from '@angular/core';
import { Lottery } from '@models/lottery.model';

@Component({
  selector: 'sk-lottery-list-item',
  templateUrl: './lottery-list-item.component.html',
  styleUrls: ['./lottery-list-item.component.scss'],
})
export class LotteryListItemComponent implements OnInit {
  @Input() lottery: Lottery;

  get url(): string {
    return '#';
  }

  ngOnInit(): void {}

  get numberOfTickets(): number {
    const tickets = this.lottery?.participants?.flatMap(participant => participant?.numberOfTickets);
    return tickets?.reduce((a,b) => a + b, 0) ?? 0;
  }
}
