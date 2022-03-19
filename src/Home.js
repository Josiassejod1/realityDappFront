import { Container, Heading } from '@chakra-ui/layout';

import { useMoralis } from 'react-moralis';

function Home() {
  const { isAuthenticated, user } = useMoralis();

  if (isAuthenticated) {
    return (
      <Container>
        <Heading>Welcome to Reality Dapp {user.attributes.username}</Heading>
      </Container>
    )
  }

  return (
    <>
      <Container>
        <Heading>Reality Dapp</Heading>
      </Container>
    </>
  );
}

export default Home;
