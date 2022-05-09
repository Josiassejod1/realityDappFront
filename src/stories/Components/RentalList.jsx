import { Box, SimpleGrid } from "@chakra-ui/react";
import {RentalCard}  from "./RentalCard";
import './RentalList.css';

export const RentalList = ({data}) => {
    return (
       <Box className="rental_list">
        { data.map((rental) => {
            const zipcode = rental?.zipcode;
            const state = rental?.state;
            const city = rental?.city;
            const address1 = rental?.address1;
            const formattedAddress = `${address1}, ${city}, ${state} ${zipcode}`
           return <Box paddingLeft="15px" paddingRight="15px"><RentalCard {...rental} address={formattedAddress} /></Box>
        })}
       </Box>
    );
};