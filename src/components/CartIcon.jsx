import { IconButton, Badge, Box } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCart} from "../context/CartContext";

const CartIcon = () => {
    const { totalItems } = useCart();
    const navigate = useNavigate();

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
            {totalItems > 0 && (
                <Badge position="absolute" top="-1" right="-1" bg="green.500" color="white" borderRadius="full" px={2} fontSize="0.8em">
                    {totalItems}
                </Badge>
            )}
        </Box>
    );
};

export default CartIcon;