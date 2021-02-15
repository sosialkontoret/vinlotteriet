import { Meta } from '@storybook/angular';
import { StoryFnAngularReturnType } from '@storybook/angular/dist/client/preview/types';
import { action } from '@storybook/addon-actions';
import { InputPasswordComponent } from './input-password.component';

export default {
  title: 'Atoms/Input Password',
  component: InputPasswordComponent,
} as Meta;

const Template = (args: any): StoryFnAngularReturnType => ({
  template: '<sk-input-password [value]="value" [placeholder]="placeholder" (onChange)="onChange()"></sk-input-password>',
  props: {
    ...args,
    onChange: action('onChange'),
  },
});

export const empty = Template.bind({});
empty.args = {
  placeholder: 'Password',
};

export const filled = Template.bind({});
filled.args = {
  placeholder: 'Password',
  value: 'ThereIsNoSpoon',
};
