import { Participant } from './participant.model';

export type Lottery = {
  id?: string;
  userId?: string;
  title?: string;
  startDate?: Date;
  createdDate?: Date;
  description?: string;
  latestParticipantList?: string[];
  numberOfDraws?: number;
  draws?: any[];
  participants?: Participant[];
}
