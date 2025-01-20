import { Box, Text, Button } from "@chakra-ui/react";
import Counter from "./Counter";
import { useState } from "react";

const ProductCard = ({name, price}) => {
    const [quantity, setQuantity] = useState(0);

  return (
    <Box borderWidth="1px" p={4} borderRadius="md">
        <Text fontWeight="bold">{name}</Text>
        <Text fontWeight="bold">${price}</Text>
        <Counter initialCount={1} onChange={setQuantity}/>
        <Button mt={2} colorScheme="blue" isDisabled={quantity===0}>
            Agregar al carrito
        </Button>
    </Box>
  );
};
export default ProductCard
