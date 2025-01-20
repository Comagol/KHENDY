import React from 'react'
import ProductCard from '../components/ProductCard'
import { VStack } from "@chakra-ui/react";

const Products = () => {
  return (
    <VStack spacing={4} mt={6}>
      <ProductCard name="Brunita" price={16000}/>
      <ProductCard name="Coin" price={12000}/>
      <ProductCard name="Ekos" price={17000}/>
      <ProductCard name="Cruzado" price={20000}/>
    </VStack>
  )
}

export default Products