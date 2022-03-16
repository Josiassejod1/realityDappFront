import React from 'react';
import { MoralisProvider } from "react-moralis";
import {
  ChakraProvider,
  extendTheme
} from '@chakra-ui/react';
import Home from "./Home";

const theme = extendTheme({
  config: {
    initialColorMode: 'dark'
  }
})

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Home/>
    </ChakraProvider>
  );
}

export default App;
