import {
    Button,
    FormLabel,
    Flex,
    Image
  } from '@chakra-ui/react';

  import React, {useState} from "react";
function UploadImage({ setProperties, values, nextStep, prevStep }) {
    const [selectedFile, setSelectedFile] = useState(null);
    const Continue = e => {
      e.preventDefault();
      console.log(values);
      nextStep();
    };
    
    console.log(setProperties)
  
    const Previous = e => {
      console.log(values);
      e.preventDefault();
      prevStep();
    };

    const fileData = () => {
        if (selectedFile) {
            return (
                <div>
                    {/* <h2>File Details:</h2>

                    <p>File Name: {selectedFile.name}</p>


                    <p>File Type: {selectedFile.type}</p>


                    <p>
                        Last Modified:{" "}
                        {selectedFile.lastModifiedDate.toDateString()}
                    </p> */}
                    <Image src={window.URL.createObjectURL(selectedFile)} height="250" width="250" />
                </div>
            );
        }
    };
  
    return(
        <>
        <FormLabel htmlFor="images">Upload Images</FormLabel>
        <input
          required
          type="file"
          onChange={e => {
            setProperties(prevProperty => ({
                ...prevProperty,
                "images": e.target.files[0],
              }))
              setSelectedFile(e.target.files[0])
          }}
        />
        <Flex p={2}>
          <Button onClick={Previous}>Previous</Button>
          <Button onClick={Continue}>Continue</Button>
        </Flex>
        {fileData()}
      </>
    )
  }
  

export default UploadImage;