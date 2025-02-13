import { Box, Flex, IconButton, useDisclosure, Spacer, Button } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import CartIcon from "./CartIcon";
import MenuItems from "./MenuItems";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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

        {/* WEB MEMU */}
        <Box display={{ base: "none", md: "flex" }}>
          <MenuItems />
        </Box>

        <Spacer />
        <Button colorScheme="red">Iniciar Sesión</Button>
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
