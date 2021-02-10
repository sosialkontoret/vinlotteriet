import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LotteryService } from '@services/lottery/lottery.service';
import { Observable } from 'rxjs';
import { LotteryModel } from '@models/lottery.model';

@Component({
  selector: 'sk-my-lotteries',
  templateUrl: './my-lotteries.component.html',
  styleUrls: ['./my-lotteries.component.scss'],
})
export class MyLotteriesComponent implements OnInit {
  lotteries$: Observable<LotteryModel[]>;
  @Input() userId: string;

  constructor(private router: Router, private lotteryService: LotteryService) {}

  ngOnInit() {
    this.getMyLotteries();
  }

  newLottery() {
    this.router.navigate(['new-lottery']);
  }

  selectLottery(lotteryId: string) {
    this.router.navigate(['edit-lottery', lotteryId]);
  }

  private getMyLotteries() {
    this.lotteries$ = this.lotteryService.getMyLotteries(this.userId);
  }
}
