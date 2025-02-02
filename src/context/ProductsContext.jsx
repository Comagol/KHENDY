import { createContext, useState, useEffect, useContext } from "react";
import { fetchProducts } from "../firebase/firestore";

// Crear el contexto
const ProductsContext = createContext();

// Proveedor del contexto
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const productsFromFirestore = await fetchProducts();
      setProducts(productsFromFirestore);
      setLoading(false);
    };

    getProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products, loading }}>
      {children}
    </ProductsContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useProducts = () => {
  return useContext(ProductsContext);
};
