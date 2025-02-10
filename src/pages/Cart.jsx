import React from 'react'
import { useCart } from '../context/CartContext'
import { Box, HStack, Image, IconButton, Text, VStack, Divider, Button } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import Counter from '../components/Counter'
import { saveOrder } from '../firebase/firestore';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const total = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <Box p="4">
      <Text fontSize="2xl" fontWeight="bold">Carrito de Compras</Text>

      {cart.length === 0 ? (
        <Text mt="4">Tu carrito está vacío.</Text>
      ) : (
        <VStack spacing="4" align="stretch">
          {cart.map((item) => (
            <HStack key={item.id} borderWidth="1px" borderRadius="md" p="4">
              <Image src={item.img} alt={item.name} boxSize="100px"/>
              <Box flex="1">
                <Text>Producto: {item.name}</Text>
                <Text>Precio: ${item.price}</Text>
                <Counter initialCount={item.quantity} onChange={(newQuantity) => updateQuantity(item.id, newQuantity)} 
                />
                <Text>Subtotal: {item.quantity * item.price}</Text>
              </Box>
              <IconButton onClick={() => removeFromCart(item.id)}  icon={<DeleteIcon/> }/>
            </HStack>
          ))}
          <Divider my="2" display="flex"/>
          <Box display="flex" justifyContent="space-evenly">
            <Text fontSize="xl" fontWeight="bold" >Total: ${total}</Text>
            <Button onClick={() => saveOrder(cart,total)}>Finalizar compra</Button>
          </Box>
        </VStack>
      )}
    </Box>
  );
};

export default Cart