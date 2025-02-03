import React from 'react'
import ProductCard from '../components/ProductCard'
import { VStack } from "@chakra-ui/react";

const Products = () => {
  return (
    <VStack spacing={4} mt={6}>
      <ProductCard/>
    </VStack>
  )
}

export default Products