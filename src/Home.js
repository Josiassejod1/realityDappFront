import {
  Box,
  VStack,
  Grid,
  Container,
  Heading
} from '@chakra-ui/layout';

import {
  AlertTitle,
  AlertDescription,
  Alert,
  AlertIcon,
  Button
} from '@chakra-ui/react';

import { useMoralis } from "react-moralis";

function Home() {
  const {authenticate, isAuthenticated, logout, authError} = useMoralis()

  if(isAuthenticated) {
    return(
      <Heading>Test</Heading>
    )
  }
  


  return(
    <>
      <Container>
        <Box>
          {
            authError && (
              <Alert status="error">
                <AlertIcon />
                <Box flex="1">
                  <AlertTitle>Authentication has failed</AlertTitle>
                  <AlertDescription display="block">
                    {authError.message}
                  </AlertDescription>
                </Box>
              </Alert>
            )
          }
        </Box>
        <Heading>Welcome</Heading>
        <Button onClick={() => authenticate()} isLoading={isAuthenticated}>Connect</Button>
      </Container>
    </>
  );
}

export default Home;
