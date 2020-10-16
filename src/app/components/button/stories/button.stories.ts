import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { ButtonComponent } from '../button.component';
import {CommonModule} from '@angular/common';
// This exports the Stories group for this component
export default {
  // The title defines the name and where in the structure of
  // Storybook's menu this is going to be placed.
  // Here we add it to a "Components" section under "Link"
  title: 'Components/Button',  // The component related to the Stories
  component: ButtonComponent,  decorators: [
    // The necessary modules for the component to work on Storybook
    moduleMetadata({
      declarations: [ButtonComponent],
      imports: [CommonModule],
    }),
  ],
};
// This creates a Story for the component
const Template: Story<ButtonComponent> = () => ({
  component: ButtonComponent,
  template: `<symphonie-button></symphonie-button>`,
});
// Other stories could be added here as well, all you have to do is export them along!
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
  color: 'btn-blue'
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
  color: 'indigo'
};
