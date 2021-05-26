import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Lottery } from '@models/lottery.model';
import { Observable } from 'rxjs';
import { fromPromise } from 'rxjs/internal-compatibility';
import { map } from 'rxjs/operators';

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
  public createLottery(lottery: Lottery): Observable<string> {
    lottery.id = this.afs.createId();
    lottery.createdDate = new Date();
    const promise = this.afs.collection<Lottery>(this.collectionName).doc(lottery.id).set(lottery);
    return fromPromise(promise).pipe(map(() => lottery.id));
  }

  public setWinnerAndStart(lottery: Lottery, winner: string, drawIndex: number): Observable<void> {
    const draw = lottery.draws[drawIndex];
    draw.winner = winner;
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
}
