import { Menu, MenuButton, MenuList, MenuItem, Button, Stack } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";
import { fetchProducts } from "../firebase/firestore";

const MenuItems = ({ isMobile = false }) => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate(); // 🔹 Para redirigir al usuario

  useEffect(() => {
    const getCategories = async () => {
      const products = await fetchProducts();
      const uniqueCategories = [...new Set(products.map((p) => p.category))]; // 🔹 Elimina duplicados
      setCategories(uniqueCategories);
    };

    getCategories();
  }, []);

  return (
    <Stack direction={isMobile ? "column" : "row"} spacing={4} align="center">
      <Menu>
        <MenuButton variant="ghost" color="grey" mx={2} as={Button} rightIcon={<ChevronDownIcon />}>
          Productos
        </MenuButton>
        <MenuList bg={"gray.900"}>
          {categories.map((category) => (
            <MenuItem key={category} onClick={() => navigate(`/products/${category}`)} bg={"gray.900"}>
              {category}
            </MenuItem>
          ))}
          <MenuItem as={Link} to="/productlist" onClick={() => navigate("/products")} bg={"gray.900"}>Ver Todos</MenuItem>
        </MenuList>
      </Menu>

      <Button as={Link} to="/aboutUs" variant="ghost" color="grey">Nosotros</Button>
      <Button as={Link} to="/contact" variant="ghost" color="grey">Contacto</Button>
    </Stack>
  );
};

export default MenuItems;
