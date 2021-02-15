import { Meta } from '@storybook/angular';
import { StoryFnAngularReturnType } from '@storybook/angular/dist/client/preview/types';
import { action } from '@storybook/addon-actions';
import { ButtonComponent } from './button.component';

export default {
  title: 'Atoms/Button',
  component: ButtonComponent,
} as Meta;

const Template = (args: any): StoryFnAngularReturnType => ({
  template: '<sk-button (onClick)="onClick()"><div [outerHTML]="child"></div></sk-button>',
  props: {
    ...args,
    onClick: action('onClick'),
  },
});

export const primary = Template.bind({});
primary.args = {
  child: '<span>My Button</span>',
};
