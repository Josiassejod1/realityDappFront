import {
    Button,
    FormLabel,
    Flex,
  } from '@chakra-ui/react';

function UploadImage({ handleChange, values, nextStep, prevStep }) {
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
  
    <>
      <FormLabel htmlFor="sqft">Upload Images</FormLabel>
      <input
        required
        type="file"
        value={values.images}
        onChange={e => handleChange('images')}
      />
      <Flex p={2}>
        <Button onClick={Previous}>Previous</Button>
        <Button onClick={Continue}>Continue</Button>
      </Flex>
    </>;
  }
  

export default UploadImage;