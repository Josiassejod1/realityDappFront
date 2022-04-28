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
import Confirmation from './Confirmation';

export default function PropertyForm() {
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
    images: undefined,
    documents: undefined,
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
          setProperties={setProperties}
          values={properties}
        />
      );
    case 4:
      return (
        <Confirmation
          prevStep={prevStep}
          nextStep={nextStep}
          values={properties}
        />
      );
    case 5:
      return (
        <div>
          <h1>Awesome, you have uploaded your property</h1>
        </div>
      );
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
