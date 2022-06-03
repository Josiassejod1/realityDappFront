import { Box } from '@chakra-ui/react';
import { Map, ZoomControl } from 'pigeon-maps';
import { stamenToner } from 'pigeon-maps/providers';

export const RentalMap = ({ markers }) => {
  return (
    <Map
      height={937}
      width={598}
      defaultCenter={[37.7749, 122.4194]}
      defaultZoom={11}
    >
      <ZoomControl />
      {markers}
    </Map>
  );
};
