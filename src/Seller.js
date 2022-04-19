import { PropertyForm } from './Components/Seller/PropertyForms';
import React, { useState, useEffect } from 'react';
import { useMoralis } from 'react-moralis';
import {
  ListItem,
  List,
  TableContainer,
  Table,
  Thead,
  Button,
  Center,
  Tr,
  Td,
} from '@chakra-ui/react';
import { useNavigate, Outlet } from 'react-router-dom';

function Seller() {
  const { user } = useMoralis();
  const [properties, setProperty] = useState([]);
  useEffect(() => getProperties(), []);
  let navigate = useNavigate();

  async function getProperties() {
    const properties = user.relation('properties');
    const results = await properties.query().find();
    setProperty(results);
    console.log(results);
    console.log(results[0]?.get('address1'));
  }

  return (
    <>
      <h1>Seller Dashboard</h1>
      {properties ? (
        <>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Td>Address</Td>
                  <Td isNumeric>Beds</Td>
                  <Td isNumeric>Baths</Td>
                  <Td isNumeric>Square Feet</Td>
                </Tr>
              </Thead>
              {properties.map(property => {
                return (
                  <Tr>
                    <Td>{property.get('address1')}</Td>
                    <Td>{property.get('beds')}</Td>
                    <Td>{property.get('baths')}</Td>
                    <Td>{property.get('squareFeet')}</Td>
                  </Tr>
                );
              })}
            </Table>
          </TableContainer>
          <br/>
          <Center>
            <Button onClick={() => navigate('/seller/property')}>
              Add Property
            </Button>
          </Center>
        </>
      ) : (
        <div>
          <h1>No Properties Available</h1>
        </div>
      )}
      <Outlet />
    </>
  );
}

export default Seller;
