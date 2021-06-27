import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Lottery } from '@models/lottery.model';
import { LotteryService } from '@services/lottery/lottery.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'sk-lottery',
  templateUrl: './lottery-page.component.html',
})
export class LotteryPageComponent implements OnInit {
  lottery$: Observable<Lottery>;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private lotteryService: LotteryService) {}

  ngOnInit() {
    const lotteryId = this.activatedRoute.snapshot.paramMap.get('id');
    this.initLottery(lotteryId);
  }

  private initLottery(lotteryId: string) {
    this.lottery$ = this.lotteryService.getLottery(lotteryId).pipe(
      tap(lottery => {
        if (!lottery) {
          this.router.navigate(['home']);
        }
      }),
    );
  }
}
