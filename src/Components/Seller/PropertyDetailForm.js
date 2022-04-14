import {
    Box,
    Button,
    Container,
    FormControl,
    FormLabel,
    Input,
    Select,
    Textarea,
    Flex,
    Wrap,
  } from '@chakra-ui/react';

export default function PropertyDetailForm({ handleChange, values, nextStep, prevStep }) {
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
          <FormControl isRequired>
            <FormLabel htmlFor="price">Price</FormLabel>
            <Input
              type="number"
              id="price"
              placeholder="Price"
              value={values.price}
              onChange={handleChange('price')}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="description">Description</FormLabel>
            <Textarea
              id="description"
              placeholder="Description"
              value={values.description}
              onChange={handleChange('description')}
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