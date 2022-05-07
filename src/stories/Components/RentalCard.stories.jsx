import React from 'react';

import { RentalCard } from './RentalCard';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Styled/RentalCard',
  component: RentalCard,
};

const address = '234 Everts Ct, Random, NJ 098230';
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = args => (
  <RentalCard
    type="Home"
    currency="ETH"
    amount="0.5"
    beds="4"
    baths="5"
    address={address}
    src="https://bafybeiekwpovqccbj7hgy3hbgcnrt7gjwhgrz42477ykqmkn5yrhjj62aq.ipfs.dweb.link/"
  />
);

export const Card = Template.bind({});
