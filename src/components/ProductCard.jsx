import { Box, Text, Button } from "@chakra-ui/react";
import Counter from "./Counter";
import { useState } from "react";

const ProductCard = ({ product }) => {
    const [quantity, setQuantity] = useState(0);

  return (
    <Box border="1px" p={4} borderRadius="md">
      <Text></Text>
      <Text></Text>
    </Box>
  );
};
export default ProductCard
