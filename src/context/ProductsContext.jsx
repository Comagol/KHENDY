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

  // Obtener el primer producto de cada categoría
  const getCategoryPreviews = () => {
    if (loading) return []; // Si está cargando, no devuelve nada
  
    const categoryMap = new Map();
    products.forEach((product) => {
      if (!categoryMap.has(product.category)) {
        categoryMap.set(product.category, {
          category: product.category,
          img: product.img ?? "https://via.placeholder.com/150" // Usa una imagen por defecto si es `undefined`
        });
      }
    });
  
    return Array.from(categoryMap.values());
  };

  return (
    <ProductsContext.Provider value={{ products, loading, getCategoryPreviews }}>
      {children}
    </ProductsContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useProducts = () => useContext(ProductsContext);
