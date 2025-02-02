import { Box, Text, Button } from "@chakra-ui/react";
import Counter from "./Counter";
import { useState, useEffect } from "react";
import { fetchProducts } from "../firebase/firestore";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProducts();
      console.log("Productos en Firestore:", products);
    };

    getProducts();
  }, []);
  return (
    <Box border="1px" p={4} borderRadius="md">
      <Text></Text>
      <Text></Text>
    </Box>
  );
};
export default ProductCard
