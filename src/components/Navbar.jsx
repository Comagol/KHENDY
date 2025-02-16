import { Box, Flex, IconButton, useDisclosure, Spacer, Button, Text } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useAuth } from "../context/AuthContext"; 
import CartIcon from "./CartIcon";
import MenuItems from "./MenuItems";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user, logout } = useAuth(); // Obtenemos el usuario autenticado
  const navigate = useNavigate();

  return (
    <Box bg="gray.900" px={4} color="white">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box fontSize="xl" fontWeight="bold">
          <Button as={Link} to="/">KHENDY</Button>
        </Box>

        {/* MOBILE MENU */}
        <IconButton 
          mx={2}
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />

        {/* WEB MENU */}
        <Box display={{ base: "none", md: "flex" }}>
          <MenuItems />
        </Box>

        <Spacer />

        {/* Mostrar email o botón de inicio de sesión */}
        {user ? (
          <Flex align="center" gap={4}>
            <Text fontSize="md">{user.email}</Text>
            <Button colorScheme="red" onClick={logout}>Cerrar sesión</Button>
          </Flex>
        ) : (
          <Button colorScheme="red" onClick={() => navigate("/login")}>Iniciar Sesión</Button>
        )}

        {/* Carrito */}
        <CartIcon as={Link} onClick={() => navigate("/cart")} />
      </Flex>

      {/* MOBILE MENU */}
      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <MenuItems isMobile={true} />
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
