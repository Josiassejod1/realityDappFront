import React from 'react';

import { IconButton } from './IconButton';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Styled/IconButton',
  component: IconButton,
};


// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <IconButton src='shield.png'/>
export const Shield = Template.bind({});