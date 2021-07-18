import { Component } from '@angular/core';
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
})
export class MyLotteriesPageComponent {
  state: State = State.Before;
  lotteries$: Observable<Lottery[]> = this.initLotteries();

  constructor(private router: Router, private authService: AuthenticationService, private lotteryService: LotteryService) {}

  private initLotteries(): Observable<Lottery[]> {
    this.state = State.IsLoading;
    return this.authService.getUser().pipe(
      switchMap(user => this.lotteryService.getUserLotteries(user?.uid)),
      tap(() => {
        this.state = State.GotData;
      }),
    );
  }
}
