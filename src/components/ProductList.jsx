import { useEffect, useState } from "react";
import { fetchProducts } from "../firebase/firestore"; // Ajusta la ruta si es necesario

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      console.log("Productos obtenidos:", data); // Verifica en la consola si llegan los datos
      setProducts(data);
    };

    getProducts();
  }, []);

  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {products.length > 0 ? (
          products.map((product) => (
            <li key={product.id}>
              {product.nombre} - ${product.precio}
            </li>
          ))
        ) : (
          <p>No hay productos disponibles</p>
        )}
      </ul>
    </div>
  );
};

export default ProductList;
