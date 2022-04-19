import React, { useState, useEffect } from 'react';
import {
  Button,
  Container,
  Grid,
  List,
  Text,
  Image,
  ListItem,
  Stack,
  Alert,
  AlertIcon,
  FormLabel,
} from '@chakra-ui/react';
import { useNewMoralisObject, useMoralis } from 'react-moralis';
import {
    useNavigate
  } from 'react-router-dom';


function Confirmation({ prevStep, nextStep, values }) {
  const [errors, setErrors] = useState('');
  const [confirmationList, setConfirmationList] = useState([]);
  const [success, setSuccess] = useState(false);
  let navigate = useNavigate();
  console.log(values);
  const { user } = useMoralis();
  const postObject = useNewMoralisObject('Property');
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
    createProperty();
    navigate("/seller");
    nextStep();
  };

  function createProperty() {
    postObject.save(values, {
      onSuccess: property => {
        // Execute any logic that should take place after the object is saved.
        console.log('New object created with objectId: ' + property.id);
        setSuccess(true);
        const relation = user.relation('properties');
        relation.add(property);
        user.save();
      },
      onError: error => {
        // Execute any logic that should take place if the save fails.
        // error is a Moralis.Error with an error code and message.
        setErrors(error.message)
        console.error(
          'Failed to create new object, with error code: ' + error.message
        );
      },
    });
  }

  const Previous = e => {
    e.preventDefault();
    prevStep();
  };

  useEffect(() => {
    setConfirmationList(createConfirmationList);
  }, []);

  function createConfirmationList() {
    const tempList = [];
    Object.keys(values).map((key, index) => {
      if (key == 'images' && values[key]) {
        tempList.push(
          <ListItem>
            <FormLabel htmlFor={key}>{key}</FormLabel>
            <Image src={values[key]} height="250" width="250" />
          </ListItem>
        );
      }

      if (key == 'documents' && values[key]) {
        tempList.push(
          <ListItem>
            <FormLabel htmlFor={key}>{key}</FormLabel>
            <iframe src={values[key]} height="250" width="250" />
          </ListItem>
        );
      } else {
        tempList.push(
          <ListItem>
            <FormLabel htmlFor="key">{key}</FormLabel>
            <Text>{values[key]}</Text>
          </ListItem>
        );
      }

      if (!values[key] && key != 'address2') {
        tempList.push(
          <Stack>
            <Alert status="error">
              <AlertIcon />
              Value missing {key}
            </Alert>
          </Stack>
        );
      }
    });
    return tempList;
  }

  return (
    <Container component="main" maxWidth="xs">
      <div>
        {success && (
          <Alert status="success">
            <AlertIcon />
            Successfully Created Record
          </Alert>
        )}
        {errors != '' && (
          <Alert status="error">
            <AlertIcon />
            {errors}
          </Alert>
        )}
        <List>{confirmationList.map(item => item)}</List>
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
