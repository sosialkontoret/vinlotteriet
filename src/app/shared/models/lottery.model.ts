import { Participant } from './participant.model';
import { DrawModel } from '@models/draw.model';

export type Lottery = {
  id?: string;
  userId?: string;
  title?: string;
  description?: string;
  startDate?: Date;
  createdDate?: Date;
  numberOfDraws?: number;
  draws?: DrawModel[];
  participants?: Participant[];
};
