import { ChevronDownIcon } from '@chakra-ui/icons';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';

const FilterMenu = ({ title, options }) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {title}
      </MenuButton>
      <MenuList>
        {options.map(option => {
          return <MenuItem onClick={() => {}}>{option}</MenuItem>;
        })}
      </MenuList>
    </Menu>
  );
};
