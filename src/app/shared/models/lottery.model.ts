import { DrawModel } from '@models/draw.model';
import { Participant } from './participant.model';

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
