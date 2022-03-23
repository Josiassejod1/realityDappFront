import { Stack, Box } from '@chakra-ui/layout';
import React, { useState } from 'react';

import {
  AlertTitle,
  AlertDescription,
  Alert,
  AlertIcon,
  Input,
  Text,
  Button,
} from '@chakra-ui/react';

import { useMoralis } from 'react-moralis';

const SignUp = () => {
  const { signup, authError } = useMoralis();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Stack spacing={4}>
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <Button onClick={() => {
          signup(email, password, email)
          if (!authError) {
              navigator("/")
          }
      }}>Sign Up</Button>
    </Stack>
  );
};

const Login = () => {
  const { login, authError } = useMoralis();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Stack spacing={4}>
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <Button onClick={() => {
          login(email, password)
          if (!authError) {
              navigator("/")
          }
      }}>Login</Button>
    </Stack>
  );
};

const Auth = () => {
  const { authError, authenticate, isAuthenticating } = useMoralis();
  return (
    <Stack spacing={6}>
      <Box>
        {authError && (
          <Alert status="error">
            <AlertIcon />
            <Box flex="1">
              <AlertTitle>Authentication has failed</AlertTitle>
              <AlertDescription display="block">
                {authError.message}
              </AlertDescription>
            </Box>
          </Alert>
        )}
      </Box>
      <Button onClick={() => authenticate()} isLoading={isAuthenticating}>
        Connect to Wallet
      </Button>
      <Text textAlign="center">
        <em>or</em>
      </Text>
      <SignUp />
      <Text textAlign="center">
        <em>or</em>
      </Text>
      <Login />
    </Stack>
  );
}

export default Auth;
