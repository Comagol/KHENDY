import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // 🔹 Importamos useParams
import { fetchProducts } from "../firebase/firestore";
import ProductCard from "./ProductCard";
import { Box, Grid, Text } from "@chakra-ui/react";

const ProductList = () => {
  const { category } = useParams(); // 🔹 Capturamos la categoría desde la URL
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const productsFromFirestore = await fetchProducts();
      setProducts(productsFromFirestore);
  
      if (category) {
        setFilteredProducts(productsFromFirestore.filter((p) => p.category === category));
      } else {
        setFilteredProducts(productsFromFirestore); // 🔹 Si no hay categoría, muestra todo
      }
  
      setLoading(false);
    };
  
    getProducts();
  }, [category]);

  return (
    <Box p={4}>
      {loading ? (
        <Text>Cargando productos...</Text>
      ) : (
        <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={4}> 
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)
          ) : (
            <Text>No hay productos en esta categoría</Text>
          )}
        </Grid>
      )}
    </Box>
  );
};

export default ProductList;
