import { Box, Grid, Text } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import { useProducts } from "../context/ProductsContext"; // Importamos el hook

const ProductList = () => {
  const { products, loading } = useProducts(); // Obtenemos los datos del contexto

  return (
    <Box p={4}>
      {loading ? (
        <Text>Cargando productos...</Text>
      ) : (
        <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={4}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default ProductList;
