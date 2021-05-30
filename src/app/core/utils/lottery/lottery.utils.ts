import { Lottery } from '@models/lottery.model';
import { ArrayUtils } from '../array';

export class LotteryUtils {
  public static countNumberOfTickets(lottery: Lottery): number {
    const participants = lottery?.participants ?? [];
    return ArrayUtils.sumSelect(participants, participant => participant.numberOfTickets ?? 0);
  }
}
