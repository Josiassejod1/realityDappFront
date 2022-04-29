import React from 'react';

import { StyledButton } from './StyledButton';
import { withDesign } from 'storybook-addon-designs'


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Styled/Button',
  component: StyledButton,
  decorators: [withDesign]
};

StyledButton.paramaters  = {
    design: {
        type: "figma",
        url: "https://www.figma.com/file/jBkERSANXr8R7Y6Jn7suvQ/Realty?node-id=12%3A75" // <-- paste here!
      }
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <StyledButton {...args} />;



export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    label: 'Button',
  };
