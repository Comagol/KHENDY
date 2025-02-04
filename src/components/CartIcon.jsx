import { useState } from "react";
import { IconButton, Badge, Box } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CartIcon = () => {
    const [cartCount, setCartCount] = useState(3);
    const navigate = useNavigate()

    return (
        <Box position="relative">
            <IconButton
            icon={<FaShoppingCart/>}
            onClick={() => navigate("/cart")}
            aria-label="Carrito de Compras"
            variant="ghost"
            colorScheme="teal"
            size="lg"
            />
            {cartCount > 0 && (
                <Badge position="absolute" top="-1" right="-1" bg="green.500" color="white" borderRadius="full" px={2} fontSize="0.8em">
                    {cartCount}
                </Badge>
            )}
        </Box>
    );
};

export default CartIcon;