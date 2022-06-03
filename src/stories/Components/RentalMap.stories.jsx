import { Marker } from 'pigeon-maps';
import React from 'react';

import {RentalMap} from './RentalMap';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Styled/RentalMap',
  component: RentalMap,
};

const coordinates = [
    [37.8199, 122.4783], // golden bridge
    [37.8087, 122.4098], // fisherman’s war
    [37.7680, 122.3877], // chase center
]

const markers = coordinates.map((point) => {
    return(
        <Marker 
        width={18}
        anchor={point} 
        style={{ borderRadius: '50%', backgroundColor: '#53329A' }}
        color='#53329A' 
      />
    )
})


// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <RentalMap markers={markers}></RentalMap>
export const Primary = Template.bind({});