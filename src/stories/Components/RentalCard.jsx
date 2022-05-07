import React from "react";
import { Box, Stack, Image, SimpleGrid, Text, Button, Flex } from "@chakra-ui/react";
import "./RentalCard.css";

export const RentalCard = ({ amount, currency, type, bed, bath, address, src }) => {
    return (
      <Stack width="298" height="647">
          <Box className="rental_image">
                <Image src={src}  width="100%" height="313" style={{borderRadius: "10px"}} />
          </Box>
          <Flex justifyContent="space-between">
                <Box>
                    {type}
                </Box>
                <Box>
                    <Text>{amount}</Text>
                    <Text>{currency}</Text>
                </Box>
          </Flex>
          <Box style={{paddingTop: 16, paddingBottom: 16}}>
            <HorizontalDivider/>
          </Box>
          <SimpleGrid column={2}>
            <Flex justifyContent="space-between">
                <Text>
                    {bed} Beds {bath} Baths
                </Text>
                <ViewButton />
            </Flex>
            <Box>
                <Text>
                    {address}
                </Text>
            </Box>
          </SimpleGrid>
      </Stack>
    );
  };

export const HorizontalDivider = () => {
   return(
    <Box height="1px" width="100%" style={{backgroundColor: "#C4C4C4"}} />
   )
}

export const ViewButton = () => {
    return(
        <Button style={{borderRadius: 8, border: "1px solid #E2E2E2", backgroundColor: "transparent"}}>VIEW</Button>
    )
 }