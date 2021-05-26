import { Component, OnInit } from '@angular/core';
import { LotteryService } from '@services/lottery/lottery.service';
import { ActivatedRoute } from '@angular/router';
import { Lottery } from '@models/lottery.model';
import { State } from '@models/enums/state.enum';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'sk-edit-lottery',
  templateUrl: './edit-lottery-page.component.html',
  styleUrls: ['./edit-lottery-page.component.scss'],
})
export class EditLotteryPageComponent implements OnInit {
  state: State = State.Before;
  lottery$: Observable<Lottery>;
  isLoading: boolean;

  constructor(private activatedRoute: ActivatedRoute, private lotteryService: LotteryService) {}

  ngOnInit() {
    this.initLottery();
  }

  onUpdated(lottery: Lottery): void {
    this.lotteryService.updateLottery(lottery);
  }

  private initLottery() {
    this.lottery$ = this.activatedRoute.params.pipe(
      map(params => params.id),
      switchMap(id => this.lotteryService.getLottery(id)),
    );
  }
}
