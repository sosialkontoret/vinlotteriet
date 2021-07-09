import { Meta } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { InputEmailComponent } from './input-email.component';

export default {
  title: 'Atoms/Input Email',
  component: InputEmailComponent,
} as Meta;

const Template = (args: any) => ({
  template: '<sk-input-email [value]="value" [placeholder]="placeholder" (valueChange)="valueChange()"></sk-input-email>',
  props: {
    ...args,
    valueChange: action('valueChange'),
  },
});

export const empty = Template.bind({});
empty.args = {
  placeholder: 'Email',
};

export const filled = Template.bind({});
filled.args = {
  placeholder: 'Email',
  value: 'welcome@vinlotteriet.no',
};
