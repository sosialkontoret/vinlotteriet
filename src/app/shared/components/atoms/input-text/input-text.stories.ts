import { Meta } from '@storybook/angular';
import { StoryFnAngularReturnType } from '@storybook/angular/dist/client/preview/types';
import { action } from '@storybook/addon-actions';
import { InputTextComponent } from './input-text.component';

export default {
  title: 'Atoms/Input Text',
  component: InputTextComponent,
} as Meta;

const Template = (args: any): StoryFnAngularReturnType => ({
  template: '<sk-input-text [value]="value" [placeholder]="placeholder" (onChange)="onChange()"></sk-input-text>',
  props: {
    ...args,
    onChange: action('onChange'),
  },
});

export const empty = Template.bind({});
empty.args = {
  placeholder: 'Email'
};

export const filled = Template.bind({});
filled.args = {
  placeholder: 'Email',
  value: 'welcome@vinlotteriet.no'
};
