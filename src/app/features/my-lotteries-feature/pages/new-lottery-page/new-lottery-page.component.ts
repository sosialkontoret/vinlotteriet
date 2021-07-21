import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '@services/authentication/authentication.service';
import { Lottery } from '@models/lottery.model';
import { LotteryService } from '@services/lottery/lottery.service';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { State } from '@models/enums/state.enum';

@Component({
  selector: 'sk-new-lottery',
  templateUrl: './new-lottery-page.component.html',
})
export class NewLotteryPageComponent {
  state: State = State.Before;
  userId$: Observable<string>;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private lotteryService: LotteryService,
    private auth: AuthenticationService,
  ) {
    this.userId$ = this.getUser();
  }

  onCreateLottery(lottery: Lottery) {
    this.state = State.IsLoading;
    this.lotteryService.createLottery(lottery).subscribe(
      id => {
        this.state = State.GotData;
        this.router.navigate(['/', 'my-lotteries', id]);
      },
      error => {
        console.error('Failed to create lottery', error);
        this.state = State.IsError;
      },
    );
  }

  private getUser(): Observable<string> {
    return this.auth.getUser().pipe(
      filter(user => user?.uid !== undefined),
      map(user => user?.uid as string),
    );
  }
}
