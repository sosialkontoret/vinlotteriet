import { Meta, Story } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { InputPasswordComponent } from './input-password.component';

export default {
  title: 'Atoms/Input Password',
  component: InputPasswordComponent,
} as Meta;

const Template: Story = (args: any) => ({
  template: '<sk-input-password [value]="value" [placeholder]="placeholder" (valueChange)="valueChange()"></sk-input-password>',
  props: {
    ...args,
    valueChange: action('valueChange'),
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
