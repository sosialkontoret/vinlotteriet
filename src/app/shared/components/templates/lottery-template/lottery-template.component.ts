import { Component, Input, OnInit } from '@angular/core';
import { Lottery } from '@models/lottery.model';
import { DrawModel } from '@models/draw.model';

@Component({
  selector: 'sk-lottery-template',
  templateUrl: './lottery-template.component.html',
  styleUrls: ['./lottery-template.component.scss'],
})
export class LotteryTemplateComponent implements OnInit {
  @Input() lottery: Lottery;
  currentDrawIndex: number = 0;
  winners: string[] = [];

  get numberOfDraws(): number {
    return this.lottery?.draws?.length;
  }

  get currentDraw(): DrawModel {
    if (!this.currentDrawIndex || !this.lottery?.draws) {
      return undefined;
    }
    if (this.currentDrawIndex >= this.lottery?.draws?.length) {
      return undefined;
    }
    return this.lottery.draws[this.currentDrawIndex];
  }

  get isOngoing(): boolean {
    return !!this.currentDraw?.winner;
  }

  ngOnInit() {}

  drawFinished() {
    this.winners.push(this.currentDraw.winner);
    this.currentDrawIndex += 1;
  }
}
