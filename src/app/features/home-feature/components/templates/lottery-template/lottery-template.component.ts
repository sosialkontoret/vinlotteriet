import { Component, Input } from '@angular/core';
import { Lottery } from '@models/lottery.model';

@Component({
  selector: 'sk-lottery-template',
  templateUrl: './lottery-template.component.html',
  styleUrls: ['./lottery-template.component.scss'],
})
export class LotteryTemplateComponent {
  @Input() lottery: Lottery | undefined;
}
