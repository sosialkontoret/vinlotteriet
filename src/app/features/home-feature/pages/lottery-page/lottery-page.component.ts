import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Lottery } from '@models/lottery.model';
import { LotteryService } from '@services/lottery/lottery.service';
import { Observable } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'sk-lottery',
  templateUrl: './lottery-page.component.html',
})
export class LotteryPageComponent {
  lottery$: Observable<Lottery>;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private lotteryService: LotteryService) {
    this.lottery$ = this.initLottery();
  }

  private initLottery(): Observable<Lottery> {
    return this.activatedRoute.paramMap.pipe(
      map(paramMap => paramMap.get('id')),
      tap(id => {
        if (id === null) {
          this.router.navigate(['home']);
        }
      }),
      filter(id => id !== null),
      switchMap(id => this.lotteryService.getLottery(id as string)),
      tap(lottery => {
        if (lottery === null) {
          this.router.navigate(['home']);
        }
      }),
      filter(lottery => lottery !== null),
      map(lottery => lottery as Lottery),
    );
  }
}
