import { Meta, Story } from '@storybook/angular';
import { State } from '@models/enums/state.enum';
import { ThemeTemplateComponent } from './theme-template.component';

export default {
  title: 'Templates/Theme',
  component: ThemeTemplateComponent,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story = (args: any) => ({
  template: '<sk-theme-template style="height: 100vh; width: 100%; display: inline-block;"></sk-theme-template>',
  props: {
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
