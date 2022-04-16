import { PropertyForm } from './Components/Seller/PropertyForms';
import React, { useState, useEffect } from 'react';
import { useMoralis } from 'react-moralis';
import {
  ListItem,
  List,
  TableContainer,
  Table,
  Thead,
  Tr,
  Td,
} from '@chakra-ui/react';

function Seller() {
  const { user } = useMoralis();
  const [properties, setProperty] = useState([]);
  useEffect(() => getPropeties(), []);

  async function getPropeties() {
    const properties = user.relation('properties');
    const results = await properties.query().find();
    setProperty(results);
    console.log(results[0]?.get('address1'));
  }

  function PropertyList() {
    <List>
      {properties.map(property => {
        <ListItem>
          <p>
            {property.get('address1')} | Bed {property.get('beds')} | Bath{' '}
            {property.get('baths')} | Square Feet {property.get('squareFeet')}
          </p>
        </ListItem>;
      })}
    </List>;
  }

  return (
    <>
      <h1>Seller Dashboard</h1>
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
      <PropertyForm />
    </>
  );
}

export default Seller;
