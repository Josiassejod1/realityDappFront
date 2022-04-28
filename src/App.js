import React from 'react';
import Home from './Home';
import Auth from './Auth';
import Seller from "./Seller"
import NotFound from './NotFound';
import {
  Box,
  Breadcrumb,
  Button,
  BreadcrumbItem,
  BreadcrumbLink,
  Grid,
} from '@chakra-ui/react';
import { useMoralis } from 'react-moralis';
import {
  BrowserRouter,
  Router,
  Routes,
  Route,
  Navigate,
  useNavigate
} from 'react-router-dom';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import PropertyInfo from "./Components/PropertyInfo";
import PropertyForms from './Components/Seller/PropertyForms';

function App() {
  const { isAuthenticated, logout, isAuthUndefined } = useMoralis();

  return (
    <BrowserRouter>
      {isAuthenticated ? (

        <Box
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px',
          }}
        >
          <Grid p={4}>
            <div>
              <Breadcrumb separator="|">
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
              <ColorModeSwitcher justifySelf="flex-end" />
              <Button onClick={() => logout()}>Logout</Button>
            </div>
          </Grid>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="seller" element={<Seller />}>
              <Route path="property" element={<PropertyForms />} />
              <Route path=":sellerId" element={<PropertyInfo />}/>
            </Route>
          </Routes>
        </Box>
      ) : (
        <>
          {!isAuthUndefined && <Navigate to="/login" />}
          <Auth />
        </>
      )}
   </BrowserRouter>
  );
}

export default App;
