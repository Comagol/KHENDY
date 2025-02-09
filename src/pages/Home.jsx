import React from "react";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import Carrousel from "../components/Carrousel";
import { useProducts } from "../context/ProductsContext";
import CategoryCard from "../components/CategoryCard";

const Home = () => {
  const { getCategoryPreviews } = useProducts();
  const categoryPreviews = getCategoryPreviews();

  return (
    <Box>
      {/* Carrousel en la parte superior */}
      <Carrousel />

      {/* Sección de Categorías */}
      <Box p={4}>
        <Text fontSize="2xl" fontWeight="bold" mb={4} textAlign="center">
          Categorías
        </Text>

        <SimpleGrid columns={[1, 2, 3]} spacing={6}>
          {categoryPreviews.map((category) => (
            <CategoryCard key={category.category} category={category} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Home;
