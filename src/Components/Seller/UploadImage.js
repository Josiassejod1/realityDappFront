import { Button, FormLabel, Flex, Image, Center } from '@chakra-ui/react';

import React, { useState } from 'react';
function UploadImage({ setProperties, values, nextStep, prevStep }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedDeed, setSelectedDeed] = useState(null);
  const Continue = e => {
    e.preventDefault();
    console.log(values);
    nextStep();
  };

  console.log(setProperties);

  const Previous = e => {
    console.log(values);
    e.preventDefault();
    prevStep();
  };

  const fileData = () => {
    if (selectedFile) {
      return (
        <div>
          <Center>
            <Image src={window.URL.createObjectURL(selectedFile)} />
          </Center>
        </div>
      );
    }
  };

  const fileDeed = () => {
    if (selectedDeed) {
      return (
        <div>
          <Center>
          <iframe src={selectedDeed} />
          </Center>
        </div>
      );
    }
  };

  return (
    <>
      <FormLabel htmlFor="images">Upload Property Image</FormLabel>
      <input
        required
        type="file"
        accept="image/*"
        onChange={e => {
          setProperties(prevProperty => ({
            ...prevProperty,
            images: window.URL.createObjectURL(e.target.files[0]),
          }));
          setSelectedFile(e.target.files[0]);
        }}
      />
      {fileData()}
        <br/>
      <FormLabel htmlFor="deed">Upload Property Deed</FormLabel>
      <input
        required
        type="file"
        accept="application/pdf"
        onChange={e => {
          setProperties(prevProperty => ({
            ...prevProperty,
            documents: window.URL.createObjectURL(e.target.files[0]),
          }));
          setSelectedDeed(e.target.files[0]);
        }}
      />
      {fileDeed()}

      <Flex p={2}>
        <Button onClick={Previous}>Previous</Button>
        <Button onClick={Continue}>Continue</Button>
      </Flex>
    </>
  );
}

export default UploadImage;
