import { Box, Text, Button, Image, Skeleton } from "@chakra-ui/react";
import Counter from "./Counter";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(0);

  // Si el producto no está disponible, muestra un loader
  if (!product) {
    return <Skeleton height="250px" width="200px" />;
  }

  return (
    <Box border="1px solid #ddd" p={4} borderRadius="md" boxShadow="md">
      {product.imageUrl ? (
        <Image src={product.imageUrl} alt={product.name} borderRadius="md" mb={2} />
      ) : (
        <Skeleton height="150px" width="100%" borderRadius="md" mb={2} />
      )}
      <Text fontSize="lg" fontWeight="bold">{product.name}</Text>
      <Text color="gray.500">
        {new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS" }).format(product.price)}
      </Text>
      <Counter quantity={quantity} setQuantity={setQuantity} />
      <Button mt={2} colorScheme="blue">Agregar al carrito</Button>
    </Box>
  );
};

export default ProductCard;
