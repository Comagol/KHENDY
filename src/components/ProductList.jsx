import { useEffect, useState } from "react";
import { getProducts } from "../firebase/firestore";
import { Grid } from "@chakra-ui/react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Grid>
  );
};

export default ProductList;