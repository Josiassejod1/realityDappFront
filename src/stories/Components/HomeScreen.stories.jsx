import React from 'react';

import HomeScreen from '../../Components/Buyer/HomeScreen';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Styled/HomeScreen',
  component: HomeScreen,
};


// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <HomeScreen />
export const Primary = Template.bind({});