import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DrawModel } from '@models/draw.model';
import { of, Subject, timer } from 'rxjs';
import { catchError, takeUntil } from 'rxjs/operators';
import { Lottery } from '@models/lottery.model';

@Component({
  selector: 'sk-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.scss'],
})
export class DrawComponent implements OnInit {
  @Input() draw: DrawModel;
  @Input() lottery: Lottery;
  @Input() currentDrawIndex: number;
  @Output() drawFinished = new EventEmitter<boolean>();

  participants: string[];
  finished: boolean;
  winner1: string;
  winner2: string;
  nameToShow: string;
  victory = new Audio();
  tick = new Audio();

  ngOnInit() {
    this.victory.src = '../../assets/sounds/victory.mp3';
    this.victory.load();
    this.tick.src = '../../assets/sounds/tick.mp3';
    this.tick.load();

    this.participants = this.createListOfParticipantsThisRound(this.lottery);
    this.start();
  }

  private createListOfParticipantsThisRound(lottery: Lottery) {
    const previousWinners = [];
    let index = 0;
    lottery.draws.forEach(result => {
      if (result.winner && index < this.currentDrawIndex) {
        previousWinners.push(result.winner);
      }
      index += 1;
    });
    return this.generateParticipantList(previousWinners);
  }

  // TODO fix eslint error in this method if we are keeping this component
  private generateParticipantList(previousWinners: any[]) {
    const drawList = [];
    this.lottery.participants.forEach(participant => {
      let { numberOfTickets } = participant;
      // remove a ticket if already won.
      const numberOfWinsBefore = previousWinners.filter(name => name === participant.name).length;
      if (numberOfWinsBefore > -1) {
        numberOfTickets -= numberOfWinsBefore;
        // eslint-disable-next-line no-param-reassign
        previousWinners = previousWinners.filter(name => name !== participant.name);
      }

      for (let i = 0; i < numberOfTickets; i += 1) {
        drawList.push(participant.name);
      }
    });
    return drawList;
  }

  private start() {
    const killTrigger: Subject<void> = new Subject();
    const refreshInterval$ = timer(0, 1000).pipe(
      takeUntil(killTrigger),
      catchError(() => of('Error')),
    );

    refreshInterval$.subscribe(() => {
      if (!this.nameToShow || this.nameToShow === 'winner2') {
        this.winner1 = this.participants[Math.floor(Math.random() * this.participants.length)];
        this.nameToShow = 'winner1';
      } else {
        this.winner2 = this.participants[Math.floor(Math.random() * this.participants.length)];
        this.nameToShow = 'winner2';
      }
    });

    setTimeout(() => {
      killTrigger.next();
      this.finished = true;
      this.winner1 = this.draw.winner;
      this.nameToShow = 'winner1';
    }, 20000);

    setTimeout(() => {
      this.drawFinished.emit(true);
    }, 30000);
  }
}
