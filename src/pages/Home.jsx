import React, { useEffect } from "react";
import Carrousel from "../components/Carrousel";
import { fetchProducts } from "../firebase/firestore";

const Home = () => {
  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProducts();
      console.log("Productos en Firestore:", products);
    };

    getProducts();
  }, []);


  return <Carrousel />;
};

export default Home;
