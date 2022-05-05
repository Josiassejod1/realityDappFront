import { Stack } from '@chakra-ui/react';
import { IconButton } from './IconButton';
import './IconCard.css';

export const IconCard = props => {
  return (
    <div className='icon_card_container'>
      <div className='icon_button_container'>
        <IconButton src={props.src} />
      </div>
      <div>
        <p className="icon_card_title">{props.title}</p>
      </div>
      <div>
        <p className="icon_card_description">{props.children}</p>
      </div>
    </div>
  );
};
