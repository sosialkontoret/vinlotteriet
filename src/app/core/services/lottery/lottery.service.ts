import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Lottery } from '@models/lottery.model';
import { Observable } from 'rxjs';
import { DrawModel } from '@models/draw.model';
import firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;

@Injectable({
  providedIn: 'root',
})
export class LotteryService {
  private lotteryCollection: AngularFirestoreCollection<Lottery>;

  constructor(private afs: AngularFirestore) {}

  /**
   * Create a lottery.
   *
   * @param lottery model to save
   * @return id of the lottery object.
   */
  public createLottery(lottery: Lottery): Promise<string> {
    const generatedId = this.afs.createId();
    lottery.id = generatedId;
    lottery.createdDate = Timestamp.now();
    lottery.draws = this.addDraws(lottery).map(obj => {
      return { ...obj };
    });
    return new Promise<string>(resolve => {
      this.afs
        .collection<Lottery>('lotteries')
        .doc(generatedId)
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

  public setWinnerAndStart(lottery: Lottery, winner: string, drawIndex: number) {
    const draw = lottery.draws[drawIndex];
    draw.winner = winner;
    draw.started = true;
    this.afs.doc<Lottery>(`lotteries/${lottery.id}`).update(lottery);
  }

  /**
   * Get a spesific lottery based on its id
   *
   * @param lotteryId
   */
  public getLottery(lotteryId: string) {
    return this.afs.doc<Lottery>(`lotteries/${lotteryId}`).valueChanges();
  }

  /**
   * Update a lotterymodel
   *
   * @param updatedLotteryModel
   */
  public updateLottery(updatedLotteryModel: Lottery) {
    this.afs.doc<Lottery>(`lotteries/${updatedLotteryModel.id}`).update(updatedLotteryModel);
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
   * Create draw model for each amount of lotteries that should be drawed
   *
   * @param lottery
   */
  private addDraws(lottery: Lottery): DrawModel[] {
    const draws: DrawModel[] = [];
    if (lottery.numberOfDraws > 0) {
      for (let i = 0; i < lottery.numberOfDraws; i += 1) {
        const draw: DrawModel = new DrawModel();
        draw.started = false;
        draws.push(draw);
      }
      return draws;
    }
    throw new Error('Cant create order without any draws');
  }
}
