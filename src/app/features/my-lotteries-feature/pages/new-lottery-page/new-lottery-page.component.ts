import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '@services/authentication/authentication.service';
import { Lottery } from '@models/lottery.model';
import { LotteryService } from '@services/lottery/lottery.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { State } from '@models/enums/state.enum';

@Component({
  selector: 'sk-new-lottery',
  templateUrl: './new-lottery-page.component.html',
  styleUrls: ['./new-lottery-page.component.scss'],
})
export class NewLotteryPageComponent implements OnInit {
  state: State;
  userId$: Observable<string>;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private lotteryService: LotteryService,
    private auth: AuthenticationService,
  ) {}

  ngOnInit() {
    this.getUser();
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

  private getUser() {
    this.userId$ = this.auth.isLoggedIn().pipe(map(user => user.uid));
  }
}
