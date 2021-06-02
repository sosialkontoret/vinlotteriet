import { Component, Input } from '@angular/core';
import { Lottery } from '@models/lottery.model';
import { DrawModel } from '@models/draw.model';

@Component({
  selector: 'sk-lottery-template',
  templateUrl: './lottery-template.component.html',
  styleUrls: ['./lottery-template.component.scss'],
})
export class LotteryTemplateComponent {
  @Input() lottery: Lottery;
  currentDrawIndex = 0;
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

  drawFinished() {
    this.winners.push(this.currentDraw.winner);
    this.currentDrawIndex += 1;
  }
}
