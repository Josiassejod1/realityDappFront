import React from 'react';

import { IconList } from './IconList';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Styled/IconList',
  component: IconList,
};


// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <IconList/>
export const List = Template.bind({});