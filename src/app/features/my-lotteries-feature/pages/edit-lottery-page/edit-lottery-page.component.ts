import { Component } from '@angular/core';
import { LotteryService } from '@services/lottery/lottery.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Lottery } from '@models/lottery.model';
import { State } from '@models/enums/state.enum';
import { Observable } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'sk-edit-lottery',
  templateUrl: './edit-lottery-page.component.html',
  styleUrls: ['./edit-lottery-page.component.scss'],
})
export class EditLotteryPageComponent {
  state: State = State.Before;
  lottery$: Observable<Lottery> = this.initLottery();

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private lotteryService: LotteryService) {}

  onUpdated(lottery: Lottery): void {
    this.lotteryService.updateLottery(lottery);
  }

  private initLottery(): Observable<Lottery> {
    return this.activatedRoute.paramMap.pipe(
      map(params => params.get('id')),
      tap(id => {
        if (id === null) {
          this.router.navigate(['my-lotteries']);
        }
      }),
      filter(id => id !== null),
      switchMap(id => this.lotteryService.getLottery(id as string)),
      tap(lottery => {
        if (lottery === null) {
          this.router.navigate(['my-lotteries']);
        }
      }),
      filter(lottery => lottery !== null),
      map(lottery => lottery as Lottery),
    );
  }
}
