import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'sk-home-template',
  templateUrl: './home-template.component.html',
  styleUrls: ['./home-template.component.scss'],
})
export class HomeTemplateComponent {
  @Output() joinLottery = new EventEmitter<string>();

  private lotteryCode: string | null = null;

  onLotteryCodeChanged(lotteryCode: string): void {
    this.lotteryCode = lotteryCode;
  }

  onJoinLotteryClicked(): void {
    if (this.lotteryCode !== null) {
      this.joinLottery.emit(this.lotteryCode);
    }
  }
}
