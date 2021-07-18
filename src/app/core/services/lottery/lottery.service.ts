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
    const id = this.afs.createId();
    const insert: Lottery = {
      ...lottery,
      id,
      createdDate: new Date(),
    };
    const promise = this.afs.collection<Lottery>(this.collectionName).doc(id).set(insert);
    return fromPromise(promise).pipe(map(() => id));
  }

  public getLottery(id: string): Observable<Lottery | null> {
    return this.afs
      .collection<Lottery>(this.collectionName)
      .doc(id)
      .valueChanges()
      .pipe(map(val => (val === undefined ? null : val)));
  }

  public lotteryExists(id: string): Observable<boolean> {
    return this.afs
      .collection<Lottery>(this.collectionName)
      .doc(id)
      .get()
      .pipe(map(doc => doc.exists));
  }

  public updateLottery(lottery: Lottery): Observable<void> {
    const promise = this.afs.collection<Lottery>(this.collectionName).doc(lottery.id).update(lottery);
    return fromPromise(promise);
  }

  public getUserLotteries(userId: string = ''): Observable<Lottery[]> {
    return this.afs.collection<Lottery>('lotteries', ref => ref.where('userId', '==', userId)).valueChanges();
  }
}
