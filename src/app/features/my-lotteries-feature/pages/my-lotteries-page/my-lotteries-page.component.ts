import { Component, OnInit } from '@angular/core';
import { LotteryService } from '@services/lottery/lottery.service';
import { Observable } from 'rxjs';
import { Lottery } from '@models/lottery.model';
import { State } from '@models/enums/state.enum';
import { AuthenticationService } from '@services/authentication';
import { switchMap, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'sk-my-lotteries',
  templateUrl: './my-lotteries-page.component.html',
  styleUrls: ['./my-lotteries-page.component.scss'],
})
export class MyLotteriesPageComponent implements OnInit {
  state: State = State.Before;
  lotteries$: Observable<Lottery[]>;

  constructor(private router: Router, private authService: AuthenticationService, private lotteryService: LotteryService) {}

  ngOnInit() {
    this.initLotteries();
  }

  private initLotteries() {
    this.state = State.IsLoading;
    this.lotteries$ = this.authService.getUser().pipe(
      switchMap(user => this.lotteryService.getUserLotteries(user.uid)),
      tap(() => (this.state = State.GotData)),
    );
  }
}
