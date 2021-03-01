import { Timestamp } from '@firebase/firestore-types';
import { Participant } from './participant.model';

export type Lottery = {
  id: string;
  name?: string;
  dateTime?: Timestamp;
  createdDate: Timestamp;
  description?: string;
  latestParticipantList?: string[];
  numberOfDraws?: number;
  draws?: any[];
  userId?: string;
  participants?: Participant[];
}
