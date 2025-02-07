import React from 'react'
import { useCart } from '../context/CartContext'
import { Box, HStack, Image, IconButton, Text, VStack } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

const Cart = () => {
    const { cart, removeFromCart } = useCart();

  return (
    <Box p="4">
      <Text fontSize="2xl" fontWeight="bold">Carrito de Compras</Text>

      {cart.length === 0 ? (
        <Text mt="4">Tu carrito está vacío.</Text>
      ) : (
        <VStack spacing="4" align="stretch">
          {cart.map((item) => (
            <HStack key={item.id} borderWidth="1px" borderRadius="md" p="4">
              <Image src={item.img} alt={item.name} boxSize="50px"/>
              <Box flex="1">
                <Text>Producto: {item.name}</Text>
                <Text>Precio: ${item.price}</Text>
                <Text>Cantidad: {item.quantity}</Text>
              </Box>
              <IconButton onClick={() => removeFromCart(item.id)}  icon={<DeleteIcon/> }/>
            </HStack>
          ))}
        </VStack>
      )
    }
    </Box>
  );
};

export default Cart