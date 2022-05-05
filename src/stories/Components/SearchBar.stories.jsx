import React from 'react';

import { SearchBar } from './SearchBar';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Styled/SearchBar',
  component: SearchBar,
};


// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <SearchBar />
export const Primary = Template.bind({});