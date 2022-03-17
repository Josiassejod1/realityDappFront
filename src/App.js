import React from 'react';
import Home from './Home';
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Grid
} from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
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
          <Breadcrumb separator="|">
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <ColorModeSwitcher justifySelf="flex-end" />
        </Grid>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
