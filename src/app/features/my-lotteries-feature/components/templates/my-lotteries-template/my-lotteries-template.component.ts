import { Component, Input } from '@angular/core';
import { Lottery } from '@models/lottery.model';
import { State } from '@models/enums/state.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'sk-my-lotteries-template',
  templateUrl: './my-lotteries-template.component.html',
  styleUrls: ['./my-lotteries-template.component.scss'],
})
export class MyLotteriesTemplateComponent {
  @Input() state: State;
  @Input() lotteries: Lottery[];

  constructor(private router: Router) {}

  onCreate() {
    this.router.navigate(['my-lotteries', 'new']);
  }
}
