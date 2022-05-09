import React from 'react';

import  { RentalList }  from './RentalList';

const data = [
    {
        "id": 0,
        "currency": "ETH",
        "amount": 1.4,
        "type": "Home",
        "address1": "34 White Lily Ct",
        "listing_id": 1,
        "city": "Sacramento",
        "state": "CA",
        "zipcode": "95833",
        "price": "625000",
        "beds": "3",
        "baths": "4",
        "src": "https://bafkreidao7wigddtsp7gwxuvxcheelt5rh2uo5talgbbcvyqq6bgkk43by.ipfs.dweb.link/",
        "sqft": "3444",
        "description": "Welcome to the newest neighborhood within the Twelve Bridges master-planned community in Lincoln, CA. Envision exquisite architecture paired with flexible floorplans – designed for energetic families.",
        "coordinates": [38.610390, -121.538600]
    },
    {
        "id": 1,
        "currency": "ETH",
        "amount": 1.4,
        "address1": "2419 Linden St",
        "listing_id": 5,
        "type": "Town House",
        "city": "Oakland",
        "state": "CA",
        "zipcode": "94607",
        "price": "650000",
        "beds": "2",
        "baths": "3",
        "sqft": "2000",
        "src": "https://bafkreigfrphsofaldcuhajes7ujhc3t2clu5ucqu6eu5pco3eked4ymhsa.ipfs.dweb.link/",
        "description": "Discover a new home experience tucked away within the Solaire master-planned community in Roseville, CA. Offering single & two-story homes with unique spaces to work & play.",
        "coordinates": [37.817160, -122.281390]
    },
    {
        "id": 2,
        "currency": "ETH",
        "amount": 1.4,
        "address1": "9435 Tensil Town",
        "type": "Apartment",
        "city": "San Jose",
        "state": "CA",
        "zipcode": "95624",
        "price": "773000",
        "beds": "2",
        "listing_id": 6,
        "baths": "4",
        "sqft": "2200",
        "src": "https://bafybeiekwpovqccbj7hgy3hbgcnrt7gjwhgrz42477ykqmkn5yrhjj62aq.ipfs.dweb.link/",
        "description": "Discover a new home experience tucked away within the In SF",
        "coordinates": [37.3382, 121.8863]
    },
    {
        "id": 3,
        "currency": "ETH",
        "amount": 1.4,
        "type": "Apartment",
        "address1": "Sutter address1 Way",
        "city": "San  Francisco",
        "state": "CA",
        "zipcode": "94129",
        "price": "773000",
        "beds": "2",
        "listing_id": 7,
        "baths": "4",
        "sqft": "2200",
        "src": "https://bafkreifz4ovfmblqh7wbyapufkp4pva6vf6iuwdt7r5bf567pxg3hx6emq.ipfs.dweb.link/",
        "description": "Discover the beautiful sites",
        "coordinates": [37.7749, 122.4194]
    }
]

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Styled/RentalList',
  component: RentalList,
};

const address = '234 Everts Ct, Random, NJ 098230';
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = args => (
  <RentalList
    data={data}
  />
);

export const List = Template.bind({});
