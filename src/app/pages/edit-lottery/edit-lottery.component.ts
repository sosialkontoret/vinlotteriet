import { Component, OnInit } from '@angular/core';
import { LotteryService } from '@services/lottery/lottery.service';
import { ActivatedRoute } from '@angular/router';
import { Lottery } from '@models/lottery.model';
import {State} from '@models/enums/state.enum';
import {Observable} from 'rxjs';

@Component({
  selector: 'sk-edit-lottery',
  templateUrl: './edit-lottery.component.html',
  styleUrls: ['./edit-lottery.component.scss'],
})
export class EditLotteryComponent implements OnInit {
  state: State = State.Before;
  lotteryOngoing: boolean;
  lotteryId: string;
  lottery$: Observable<Lottery>;
  addParticipantError: string;
  isLoading: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private lotteryService: LotteryService,
  ) {
  }

  ngOnInit() {
    this.lotteryId = this.activatedRoute.snapshot.paramMap.get('id');
    this.initLottery(this.lotteryId);
  }

  onUpdated(lottery: Lottery): void {
    this.lotteryService.updateLottery(lottery);
  }

  startLottery(lottery: Lottery) {
    const previousWinners = [];
    for (let i = 0; i < lottery.draws.length; i++) {
      const draw = lottery.draws[i];

      if (draw.started) {
        previousWinners.push(draw.winner);
      }

      if (!draw.started) {
        this.startLotteryTimer();
        const participants = this.generateParticipantList(lottery, previousWinners);
        if (participants.length > 0) {
          const winnerIndex = Math.floor(Math.random() * participants.length - 1 + 1);
          const winner = participants[winnerIndex];
          this.lotteryService.setWinnerAndStart(lottery, winner, i);
          break;
        }
      }
    }
  }

  private startLotteryTimer() {
    this.lotteryOngoing = true;
    setTimeout(() => {
      this.lotteryOngoing = false;
    }, 30000);
  }

  private generateParticipantList(lottery: Lottery, previousWinners: any[]) {
    const drawList = [];
    lottery.participants.forEach(participant => {
      let { numberOfTickets } = participant;
      // remove a ticket if already won.
      const numberOfWinsBefore = previousWinners.filter(name => name === participant.name).length;
      if (numberOfWinsBefore > -1) {
        numberOfTickets -= numberOfWinsBefore;
        previousWinners = previousWinners.filter(name => name !== participant.name);
      }
      for (let i = 0; i < numberOfTickets; i++) {
        drawList.push(participant.name);
      }
    });
    return drawList;
  }

  private initLottery(lotteryId: string) {
    this.lottery$ = this.lotteryService.getLottery(lotteryId);
  }
}
