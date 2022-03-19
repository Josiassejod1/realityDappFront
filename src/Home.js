import { Container, Heading } from '@chakra-ui/layout';

import Auth from './Auth';

import { useMoralis } from 'react-moralis';

function Home() {
  const { isAuthenticated } = useMoralis();

  if (isAuthenticated) {
    return <Heading>Test</Heading>;
  }

  return (
    <>
      <Container>
        <Heading>Reality Dapp</Heading>
        <Auth />
      </Container>
    </>
  );
}

export default Home;
