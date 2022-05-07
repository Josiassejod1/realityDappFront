
import React from "react";
import { Stack, Text, Input, Flex, Box, Spacer } from "@chakra-ui/react";
import { StyledButton } from "./StyledButton";
import "./SearchBar.css";

export const SearchBar = () => {
    return(<Box
        direction="column"
        minH="225px"
        justifyContent="space-between"
      >
       <Stack
      spacing={5}
      p={25}
      borderRadius={10}
      direction={['column', 'row']}
      maxWidth="784px"
      bgColor="white"
    >
      <InputContainer label="Address">
      <Input placeholder="1234 Way Drive" className="search_input"/>
      </InputContainer>
      <VerticalLine />
      <InputContainer label="City">
      <Input placeholder="Atlanta, GA" className="search_input"/>
      </InputContainer>
      <Spacer />
      <StyledButton label="Search"/>
    </Stack>
    </Box>)
}


const InputContainer = props => {
  return (
    <Stack direction="column">
      <Text className="search_bar_text" as="label" fontSize="20px" width="75px">
        {props.label}
      </Text>
      <Box>
        {props.children}
      </Box>
    </Stack>
  );
}

const VerticalLine = props => {
  return(
    <div style={{borderLeft: "1px solid #C1C1C1", height: "57px", paddingRight: "42px"}}></div>
  )
}