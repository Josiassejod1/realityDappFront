import React from 'react';
import { Icon, Center, Box, Image } from '@chakra-ui/react';
import './IconButton.css';

export const IconButton = props => {
  return (
    <div className="icon_button">
      <img className="icon_button_image" src={props.src} />
    </div>
  );
};
