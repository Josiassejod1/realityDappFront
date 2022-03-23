import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Select,
  Container,
} from '@chakra-ui/react';
import React, { useState } from 'react';

import {STATES} from '../../const';

export function AddressForm() {
  const [address, setAddress] = useState();
  const [address2, setAddress2] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [zip, setZip] = useState();

  return (
    <Container>
      <FormControl isRequired>
        <FormLabel htmlFor="address1">Address 1</FormLabel>
        <Input id="address1" placeholder="Address" onChange={(e) => setAddress(e.target.value)}/>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="address2">Address 2</FormLabel>
        <Input id="address2" placeholder="Address" onChange={(e) => setAddress2(e.target.value)}/>
      </FormControl>
      <FormControl isRequired>
        <FormLabel htmlFor="city">City</FormLabel>
        <Input id="city" placeholder="City" onChange={(e) => setCity(e.target.value)}/>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="state">State</FormLabel>
        <Select id="state" placeholder="State" onChange={(e) => setState(e.target.value)}>
          {STATES.map(state => {
            return <option>{state}</option>;
          })}
        </Select>
      </FormControl>
      <FormControl isRequired>
        <FormLabel htmlFor="zip-code">City</FormLabel>
        <Input id="zip-code" placeholder="Zip Code" onChange={(e) => setZip(e.target.value)}/>
      </FormControl>
      <FormControl></FormControl>
    </Container>
  );
}