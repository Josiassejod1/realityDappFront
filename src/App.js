import React from 'react';
import { MoralisProvider } from 'react-moralis';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Home from './Home';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
  },
});

const appId = "dFjUQiVswnhAiO4NdpyFWsRqL850DlhTNc4POy9b"
const serverUrl = "https://qoh9qcizymqr.usemoralis.com:2053/server"

function App() {
  return (
    <MoralisProvider appId={appId} serverUrl={serverUrl}>
      <ChakraProvider theme={theme}>
        <Home />
      </ChakraProvider>
    </MoralisProvider>
  );
}

export default App;
