import { Meta, Story } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { State } from '@models/enums/state.enum';
import { LoginTemplateComponent } from './login-template.component';

export default {
  title: 'Templates/Login',
  component: LoginTemplateComponent,
} as Meta;

const Template: Story = (args: any) => ({
  template:
    '<sk-theme-template style="height: 100vh; width: 100%; display: inline-block">' +
    '<sk-login-template [state]="state" (login)="onLogin($event)"></sk-login-template>' +
    '</sk-theme-template>',
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

export const withoutTheme = (args: any) => ({
  template: '<sk-login-template [state]="state" (login)="onLogin($event)"></sk-login-template>',
  props: {
    state: State.NoData,
    onLogin: action('onLogin'),
    ...args,
  },
});
