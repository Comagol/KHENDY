import React, { useEffect } from "react";
import Carrousel from "../components/Carrousel";
import { fetchProducts } from "../firebase/firestore";

const Home = () => {
  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProducts();
    };

    getProducts();
  }, []);


  return <Carrousel />;
};

export default Home;
