import React from 'react'
import ProductCard from '../components/ProductCard'
import { VStack } from "@chakra-ui/react";

const Products = () => {
  return (
    <VStack spacing={4} mt={6}>
      <ProductCard name="Brunita" price={16000}/>
    </VStack>
  )
}

export default Products