import { Menu, MenuButton, MenuList, MenuItem, Button, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";

const MenuItems = ({ isMobile = false }) => {
  return (
    <Stack direction={isMobile ? "column" : "row"} spacing={4} align="center">
      <Menu>
        <MenuButton variant="ghost" color="grey" mx={2} as={Button} rightIcon={<ChevronDownIcon/>}>
          Productos
        </MenuButton>
        <MenuList bg={"gray.900"}>
          <MenuItem as={Link} to="/products" bg={"gray.900"}>Brazaletes</MenuItem>
          <MenuItem as={Link} to="/products" bg={"gray.900"}>Pulsera</MenuItem>
          <MenuItem as={Link} to="/products" bg={"gray.900"}>Aros</MenuItem> 
          <MenuItem as={Link} to="/products" bg={"gray.900"}>Gargantillas</MenuItem>
          <MenuItem as={Link} to="/products" bg={"gray.900"}>Ver Todos</MenuItem>
        </MenuList>
      </Menu>

      <Button as={Link} to="/aboutUs" variant="ghost" color="grey">Nosotros</Button>
      <Button as={Link} to="/contact" variant="ghost" color= "grey">Contacto</Button>
    </Stack>
  );
};

export default MenuItems;
