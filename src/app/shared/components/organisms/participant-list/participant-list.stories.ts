import { Meta, Story } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { ArrayUtils } from '@utils/array';
import { Participant } from '@models/participant.model';
import { ParticipantListComponent } from './participant-list.component';

export default {
  title: 'Organisms/Participant List',
  component: ParticipantListComponent,
  argTypes: {
    background: {
      control: {
        type: 'boolean',
      },
      defaultValue: true,
    },
  },
} as Meta;

const createParticipant = (itemNr: number): Participant => ({
  name: `Participant-${itemNr}`,
  numberOfTickets: itemNr * 2,
});

const createParticipants = (items: number): Participant[] => ArrayUtils.mapN(items, createParticipant);

const Template: Story = (args: any) => ({
  template:
    '<sk-card style="width: 100%; display: inline-block;" *ngIf="background">' +
    '<sk-participant-list style="width: 100%;" [participants]="participants"></sk-participant-list>' +
    '</sk-card>' +
    '<sk-participant-list style="width: 100%;" *ngIf="!background" [participants]="participants"></sk-participant-list>',
  props: {
    ...args,
    participants: args.participants ?? args.items ? createParticipants(args.items) : undefined,
    onChange: action('onChange'),
  },
});

export const empty = Template.bind({});
empty.args = {};

export const withItems = Template.bind({});
withItems.argTypes = {
  items: {
    control: { type: 'number', min: 0, step: 1 },
    defaultValue: 5,
  },
};

export const with100Items = Template.bind({});
with100Items.argTypes = {
  items: {
    control: { type: 'number', min: 0, step: 1 },
    defaultValue: 100,
  },
};
