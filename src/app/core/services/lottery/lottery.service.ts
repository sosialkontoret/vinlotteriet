import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Lottery } from '@models/lottery.model';
import { Observable } from 'rxjs';
import { DrawModel } from '@models/draw.model';
import { ArrayUtils } from '@utils/array';
import { fromPromise } from 'rxjs/internal-compatibility';

@Injectable({
  providedIn: 'root',
})
export class LotteryService {
  private readonly collectionName = 'lotteries';

  constructor(private afs: AngularFirestore) {}

  /**
   * Create a lottery.
   *
   * @param lottery model to save
   * @return id of the lottery object.
   */
  public createLottery(lottery: Lottery): Promise<string> {
    lottery.id = this.afs.createId();
    lottery.createdDate = new Date();
    lottery.draws = LotteryService.addDraws(lottery.numberOfDraws);
    return new Promise<string>(resolve => {
      this.afs
        .collection<Lottery>(this.collectionName)
        .doc(lottery.id)
        .set(lottery)
        .then(
          () => {
            resolve(lottery.id);
          },
          error => {
            resolve(error);
            console.error('something went wrong creating a new lottery');
          },
        );
    });
  }

  public setWinnerAndStart(lottery: Lottery, winner: string, drawIndex: number): Observable<void> {
    const draw = lottery.draws[drawIndex];
    draw.winner = winner;
    draw.started = true;
    const promise = this.afs.collection<Lottery>(this.collectionName).doc(lottery.id).update(lottery);
    return fromPromise(promise);
  }

  /**
   * Get a specific lottery based on its id
   *
   * @param id
   */
  public getLottery(id: string): Observable<Lottery> {
    return this.afs.collection<Lottery>(this.collectionName).doc(id).valueChanges();
  }

  /**
   * Update a lottery
   *
   * @param lottery
   */
  public updateLottery(lottery: Lottery): Observable<void> {
    const promise = this.afs.collection<Lottery>(this.collectionName).doc(lottery.id).update(lottery);
    return fromPromise(promise);
  }

  /**
   * Get all ids by user ID.
   *
   * @param userId
   */
  public getUserLotteries(userId: string): Observable<Lottery[]> {
    return this.afs
      .collection<Lottery>('lotteries', ref => ref.where('userId', '==', userId))
      .valueChanges();
  }

  /**
   * Create draw model for each amount of lotteries that should be drawn
   */
  private static addDraws(numberOfDraws: number): DrawModel[] {
    const draws = numberOfDraws > 0 ? numberOfDraws : 1;
    return ArrayUtils.mapN(draws, () => ({
      started: false,
    }));
  }
}
