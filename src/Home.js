import {
  Box,
  VStack,
  Grid,
  Container,
  Heading
} from '@chakra-ui/layout';

import { useMoralis } from "react-moralis";

function Home() {
  const {authenticate, isAuthenticated, logout} = useMoralis()

  if(isAuthenticated) {
    return(
      <>
        <Container>
          <Heading>Welcome</Heading>
        </Container>
      </>
    );
  }
  


  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <VStack spacing={8}>
          <Heading>Login</Heading>
        </VStack>
      </Grid>
    </Box>
  );
}

export default Home;
