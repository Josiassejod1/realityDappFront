import {
  Box,
  Button,
  Center,
  Container,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Flex,
  Wrap,
  Grid,
  Input,
  Spacer,
  Select,
} from '@chakra-ui/react';
import React, { useState } from 'react';

import { STATES } from '../../const';

export function PropertyForm() {
  const [step, setStep] = useState(1);
  const [properties, setProperties] = useState({
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipCode: '',
    baths: 0,
    beds: 0,
    squareFeet: 0,
    price: 0,
    description: '',
    images: [],
    documents: [],
  });

  const handleChange = input => e => {
    setProperties(prevProperty => ({
      ...prevProperty,
      [input]: e.target.value,
    }));
  };

  switch (step) {
    case 1:
      return (
        <AddressForm
          nextStep={nextStep}
          handleChange={handleChange}
          values={properties}
        />
      );
    case 2:
      return (
        <PropertyDetailForm
          prevStep={prevStep}
          nextStep={nextStep}
          handleChange={handleChange}
          values={properties}
        />
      );
    case 3:
      return (
        <h1>Hi</h1>
      )
    // case 4:
    //   return (
    //     <Success />
    //   )
    // never forget the default case, otherwise VS code would be mad!
    default:
    // do nothing
  }

  function prevStep() {
    console.log(properties);
    setStep(step - 1);
  }

  function nextStep() {
    console.log(properties);
    setStep(step + 1);
  }

  handleChange = input => e => {
    setProperties(prevProperty => ({
      ...prevProperty,
      [input]: e.target.value,
    }));
  };
}

function PropertyDetailForm({ handleChange, values, nextStep, prevStep }) {
  const Continue = e => {
    e.preventDefault();
    console.log(values);
    nextStep();
  };

  const Previous = e => {
    console.log(values);
    e.preventDefault();
    prevStep();
  };

  return (
    <Container>
      <Wrap spacing="12px">
        <FormControl isRequired>
          <FormLabel htmlFor="beds">Beds</FormLabel>
          <Input
            type="number"
            id="beds"
            placeholder="Beds"
            value={values.beds}
            onChange={handleChange('beds')}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="baths">Baths</FormLabel>
          <Input
            type="number"
            id="baths"
            placeholder="Baths"
            value={values.baths}
            onChange={handleChange('baths')}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="sqft">Square Feet</FormLabel>
          <Input
            type="number"
            id="sqft"
            placeholder="Sqft"
            value={values.squareFeet}
            onChange={handleChange('squareFeet')}
          />
        </FormControl>
        <Flex p={2}>
          <Button onClick={Previous}>Previous</Button>
          <Button onClick={Continue}>Continue</Button>
        </Flex>
      </Wrap>
    </Container>
  );
}

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
              return <option>{state}</option>;
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
