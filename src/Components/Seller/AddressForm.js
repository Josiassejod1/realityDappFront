import {
    Box,
    Button,
    Container,
    FormControl,
    FormLabel,
    Input,
    Select,
    Wrap,
  } from '@chakra-ui/react';

import { STATES } from '../../const';


function AddressForm({ handleChange, values, nextStep }) {
    const Continue = e => {
      e.preventDefault();
      nextStep();
    };
  
    return (
      <Container>
        <Wrap spacing="30px" align="center">
          <FormControl isRequired>
            <FormLabel htmlFor="address1">Address 1</FormLabel>
            <Input
              id="address1"
              placeholder="Address"
              value={values.address1}
              onChange={handleChange('address1')}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="address2">Address 2</FormLabel>
            <Input
              id="address2"
              placeholder="Address"
              value={values.address2}
              onChange={handleChange('address2')}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="city">City</FormLabel>
            <Input
              id="city"
              placeholder="City"
              value={values.city}
              onChange={handleChange('city')}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="state">State</FormLabel>
            <Select
              id="state"
              placeholder="State"
              value={values.state}
              onChange={handleChange('state')}
            >
              {STATES.map(state => {
                return <option key={state}>{state}</option>;
              })}
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="zip-code">City</FormLabel>
            <Input
              id="zip-code"
              placeholder="Zip Code"
              value={values.zipCode}
              onChange={handleChange('zipCode')}
            />
          </FormControl>
          <Button onClick={Continue}>Next</Button>
        </Wrap>
      </Container>
    );
  }

export default AddressForm;