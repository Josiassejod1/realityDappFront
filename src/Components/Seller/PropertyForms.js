import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Grid,
  Input,
  Select,
  Spacer,
  Textarea,
  Wrap,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Formik } from 'formik';

import { InputControl } from 'formik-chakra-ui';
import AddressForm from './AddressForm';
import PropertyDetailForm from './PropertyDetailForm';
import UploadImage from './UploadImage';

export function PropertyForm() {
  const [step, setStep] = useState(1);
  const [properties, setProperties] = useState({
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipCode: '',
    baths: undefined,
    beds: undefined,
    squareFeet: undefined,
    price: undefined,
    description: '',
    images: '',
    documents:'',
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
        <UploadImage
          prevStep={prevStep}
          nextStep={nextStep}
          handleChange={handleChange}
          values={properties}
        />
      );
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

