import { Meta } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { InputTextComponent } from './input-text.component';

export default {
  title: 'Atoms/Input Text',
  component: InputTextComponent,
} as Meta;

const Template = (args: any) => ({
  template: '<sk-input-text [value]="value" [placeholder]="placeholder" (valueChange)="valueChange()"></sk-input-text>',
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
