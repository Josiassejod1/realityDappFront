
import React from "react";
import { Stack, Text, Input } from "@chakra-ui/react";
import { StyledButton } from "./StyledButton";

export const SearchBar = () => {
    return( <Stack
      spacing={4}
      p={6}
      borderRadius={3}
      direction={['column', 'row']}
      maxWidth="862px"
      alignItems="flex-end"
      bgColor="white"
    >
      <InputContainer label="Address">
      <input />
      </InputContainer>
      <InputContainer label="City">
      <input />
      </InputContainer>
      <StyledButton label="Search"/>
    </Stack>)
}


const InputContainer = props => {
  return (
    <Stack direction="column" spacing={2}>
      <Text as="label" fontSize="large" fontWeight="bold">
        {props.label}
        {props.children}
      </Text>
    </Stack>
  );
}