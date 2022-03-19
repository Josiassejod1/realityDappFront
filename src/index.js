import { ColorModeScript, ChakraProvider, extendTheme  } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';

import { MoralisProvider } from 'react-moralis';


const appId = "dFjUQiVswnhAiO4NdpyFWsRqL850DlhTNc4POy9b"
const serverUrl = "https://qoh9qcizymqr.usemoralis.com:2053/server"

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
  },
});


ReactDOM.render(
  <StrictMode>
    <ColorModeScript />
    <MoralisProvider appId={appId} serverUrl={serverUrl}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </MoralisProvider>
  </StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
