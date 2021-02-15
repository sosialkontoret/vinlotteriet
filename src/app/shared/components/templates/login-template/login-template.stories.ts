import { Meta } from '@storybook/angular';
import { StoryFnAngularReturnType } from '@storybook/angular/dist/client/preview/types';
import { action } from '@storybook/addon-actions';
import { LoginTemplateComponent } from './login-template.component';
import { State } from '../../../models/enums/state.enum';

export default {
  title: 'Templates/Login',
  component: LoginTemplateComponent,
} as Meta;

const Template = (args: any): StoryFnAngularReturnType => ({
  template:
    '<sk-theme-template style="height: 100vh; width: 100%; display: inline-block"><sk-login-template [state]="state" (login)="onLogin($event)"></sk-login-template></sk-theme-template>',
  props: {
    onLogin: action('onLogin'),
    ...args,
  },
});

export const example = Template.bind({});
example.args = {
  state: State.NoData,
};

export const loading = Template.bind({});
loading.args = {
  state: State.IsLoading,
};

export const withoutTheme = (args: any): StoryFnAngularReturnType => ({
  template: '<sk-login-template [state]="state" (login)="onLogin($event)"></sk-login-template>',
  props: {
    state: State.NoData,
    onLogin: action('onLogin'),
    ...args,
  },
});
