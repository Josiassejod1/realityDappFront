import React from "react";
import "./StyledButton.css";
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Text } from "@chakra-ui/react";


export const StyledButton = ({ primary, label, ...props }) => {
    return (
      <button
        type="button"
        className="styled_button"
        {...props}
      >
        {label}
      </button>
    );
  };

  export function ViewAllButton() {
    return (
      <Text className="screen_text">
        View All <ArrowForwardIcon w={24} h={18} color="white" />
      </Text>
    );
  }
  