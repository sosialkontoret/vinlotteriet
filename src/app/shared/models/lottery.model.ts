import {Timestamp} from '@firebase/firestore-types';
import {ParticipantModel} from './participant.model';

export class LotteryModel {
  id?: string;
  name: string;
  dateTime: Timestamp;
  createdDate: Timestamp;
  description: string;
  latestParticipantList?: string[];
  numberOfDraws: number;
  draws?: any[];
  userId?: string;
  participants?: ParticipantModel[];
}
