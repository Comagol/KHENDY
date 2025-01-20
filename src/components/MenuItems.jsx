import { Menu, MenuButton, MenuList, MenuItem, Button, Stack } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { px } from "framer-motion";

const MenuItems = ({ isMobile = false }) => {
  return (
    <Stack direction={isMobile ? "column" : "row"} spacing={4} align="center">
      <Menu>
        <MenuButton variant="ghost" color="grey" mx={2} as={Button} rightIcon={<ChevronDownIcon/>}>
          Productos
        </MenuButton>
        <MenuList bg={"gray.900"}>
          <MenuItem bg={"gray.900"}>Brazaletes</MenuItem>
          <MenuItem bg={"gray.900"}>Pulsera</MenuItem>
          <MenuItem bg={"gray.900"}>Aros</MenuItem>
          <MenuItem bg={"gray.900"}>Gargantillas</MenuItem>
        </MenuList>
      </Menu>

      <Button variant="ghost" color="grey">Nosotros</Button>
      <Button variant="ghost" color= "grey">Contacto</Button>
    </Stack>
  );
};

export default MenuItems;
