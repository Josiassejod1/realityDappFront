import React from 'react';
import Home from './Home';
import {
  Box,
  Breadcrumb,
  Button,
  BreadcrumbItem,
  BreadcrumbLink,
  Grid,
} from '@chakra-ui/react';
import { useMoralis } from 'react-moralis';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  const { isAuthenticated, logout } = useMoralis();

  return (
    <Router>
      <Box
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          padding: '10px',
        }}
      >
        <Grid p={3}>
          {isAuthenticated && (
            <div>
              <Breadcrumb separator="|">
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
              <ColorModeSwitcher justifySelf="flex-end" />
              <Button onClick={() => logout()}>Logout</Button>
            </div>
          )}
        </Grid>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
