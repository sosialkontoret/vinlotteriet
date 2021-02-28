import {Meta} from '@storybook/angular';
import {StoryFnAngularReturnType} from '@storybook/angular/dist/client/preview/types';
import {action} from '@storybook/addon-actions';
import {LotteryListComponent} from './lottery-list.component';
import {Lottery} from '../../../models/lottery.model';
import {ArrayUtils} from '../../../../core/utils/array';
import firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;
import {Participant} from '../../../models/participant.model';

export default {
  title: 'Organisms/Lottery List',
  component: LotteryListComponent,
  argTypes: {
    background: {
      control: {
        type: 'boolean',
      },
      defaultValue: true,
    }
  }
} as Meta;

const createParticipant = (itemNr: number): Participant => ({
  name: `Participant-${itemNr}`,
  numberOfTickets: itemNr * 2,
});

const createParticipants = (items: number): Participant[] => ArrayUtils.mapN(items, createParticipant);

const createLottery = (itemNr: number): Lottery => ({
  id: `${itemNr}`,
  name: `lottery-${itemNr}`,
  createdDate: Timestamp.now(),
  dateTime: Timestamp.now(),
  description: `description-${itemNr}`,
  numberOfDraws: itemNr,
  participants: createParticipants(1 + itemNr),
});

const createLotteries = (items: number): Lottery[] => ArrayUtils.mapN(items, createLottery);

const Template = (args: any): StoryFnAngularReturnType => ({
  template: '<sk-card style="width: 100%; display: inline-block;" *ngIf="background"><sk-lottery-list style="width: 100%;" [lotteries]="lotteries"></sk-lottery-list></sk-card>' +
    '<sk-lottery-list style="width: 100%;" *ngIf="!background" [lotteries]="lotteries"></sk-lottery-list>',
  props: {
    ...args,
    lotteries: args.lotteries ?? args.items ? createLotteries(args.items) : undefined,
    onChange: action('onChange'),
  },
});

export const empty = Template.bind({});
empty.args = {
  placeholder: 'Email',
};

export const withItems = Template.bind({});
withItems.argTypes = {
  items: {
    control: {type: 'number', min: 0, step: 1},
    defaultValue: 5,
  },
};
