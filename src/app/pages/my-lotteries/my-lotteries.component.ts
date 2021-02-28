import { Component, OnInit } from '@angular/core';
import { LotteryService } from '@services/lottery/lottery.service';
import { Observable } from 'rxjs';
import { Lottery } from '@models/lottery.model';
import { State } from '@models/enums/state.enum';
import { AuthenticationService } from '@services/authentication';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'sk-my-lotteries',
  templateUrl: './my-lotteries.component.html',
  styleUrls: ['./my-lotteries.component.scss'],
})
export class MyLotteriesComponent implements OnInit {
  state: State = State.Before;
  lotteries$: Observable<Lottery[]>;

  constructor(private authService: AuthenticationService, private lotteryService: LotteryService) {}

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
