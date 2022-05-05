import React from 'react';

import { IconCard } from './IconCard';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Styled/IconCard',
  component: IconCard,
};


// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <IconCard src='shield.png' title='Payment Method'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
    </IconCard>
export const Primary = Template.bind({});