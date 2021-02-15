import { Meta } from '@storybook/angular';
import { StoryFnAngularReturnType } from '@storybook/angular/dist/client/preview/types';
import { action } from '@storybook/addon-actions';
import { InputEmailComponent } from './input-email.component';

export default {
  title: 'Atoms/Input Email',
  component: InputEmailComponent,
} as Meta;

const Template = (args: any): StoryFnAngularReturnType => ({
  template: '<sk-input-email [value]="value" [placeholder]="placeholder" (onChange)="onChange()"></sk-input-email>',
  props: {
    ...args,
    onChange: action('onChange'),
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
