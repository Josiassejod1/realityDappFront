import React from 'react';
import { Button, Container, Grid, List, Text, Image, ListItem } from '@chakra-ui/react';

function Confirmation({ prevStep, nextStep, values }) {
  console.log(values);
  const {
    address1,
    address2,
    city,
    state,
    zipCode,
    baths,
    beds,
    squareFeet,
    price,
    description,
    images,
    documents,
  } = values;
  const Continue = e => {
    e.preventDefault();
    nextStep();
  };

  const Previous = e => {
    e.preventDefault();
    prevStep();
  };

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <List>
          <ListItem>
            <Text>{address1}</Text>
          </ListItem>
          <ListItem>
            <Text>{address2}</Text>
          </ListItem>
          <ListItem>
            <Text>{city}</Text>
          </ListItem>
          <ListItem>
            <Text>{state}</Text>
          </ListItem>
          <ListItem>
            <Text>{zipCode}</Text>
          </ListItem>
          <ListItem>
            <Text>{baths}</Text>
          </ListItem>
          <ListItem>
            <Text>{beds}</Text>
          </ListItem>
          <ListItem>
            <Text>{squareFeet}</Text>
          </ListItem>
          <ListItem>
            <Text>{price}</Text>
          </ListItem>
          <ListItem>
            <Text>{description}</Text>
          </ListItem>
          <ListItem>
            <Image src={window.URL.createObjectURL(images)} height="250" width="250" />
          </ListItem>
          <ListItem>
            <Image src={documents} height="250" width="250" />
          </ListItem>
        </List>

        <br />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Button
              onClick={Previous}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Previous
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              onClick={Continue}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Confirm & Continue
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

export default Confirmation;
