import { Center, Box } from '@chakra-ui/react';
import React from 'react';

function NotFound() {
  return (
    <Box>
      <Center bg="tomato" h="100px" color="white">
        The page you are looking for is not here
      </Center>
    </Box>
  );
}

export default NotFound;
