import React from 'react';
import {
  Box,
  Stack,
  Image,
  SimpleGrid,
  Text,
  Button,
  Flex,
} from '@chakra-ui/react';
import './RentalCard.css';

export const RentalCard = ({
  amount,
  currency,
  type,
  beds,
  baths,
  address,
  src,
}) => {
  return (
    <Stack className="card_container">
      <Box className="rental_image">
        <Image
          src={src}
          width="100%"
          height="313"
          style={{ borderRadius: '10px' }}
        />
        <Flex justifyContent="space-between">
        <Box>
          <Text className="rental_text">{type}</Text>
        </Box>
        <Box>
          <Text className="rental_text">
            {amount} {currency}
          </Text>
        </Box>
      </Flex>
      <Box style={{ paddingTop: 16, paddingBottom: 16 }}>
        <HorizontalDivider />
      </Box>
      <SimpleGrid column={2} alignItems="center">
        <Flex justifyContent="space-between">
          <Text className="rental_text" style={{marginTop: 5}}>
            {beds} Beds {baths} Baths
          </Text>
          <ViewButton />
        </Flex>
        <Box width="225px">
          <Text className="rental_text">{address}</Text>
        </Box>
      </SimpleGrid>
      </Box>
    </Stack>
  );
};

export const HorizontalDivider = () => {
  return (
    <Box height="1px" width="100%" style={{ backgroundColor: '#C4C4C4' }} />
  );
};

export const ViewButton = () => {
  return (
    <Button
      style={{
        width: 78,
        height: 29,
        borderRadius: 8,
        border: '1px solid #E2E2E2',
        backgroundColor: 'transparent',
        color: 'white',
      }}
    >
      VIEW
    </Button>
  );
};
