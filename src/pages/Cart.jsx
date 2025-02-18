import React from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/authcontext'; // Importamos el contexto de autenticación
import { useNavigate } from 'react-router-dom';
import { Box, HStack, Image, IconButton, Text, VStack, Divider, Button } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import Counter from '../components/Counter';
import { saveOrder } from '../firebase/firestore';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const { user } = useAuth(); // Obtenemos el usuario autenticado
  const navigate = useNavigate();
  const total = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

  const handleCheckout = () => {
    if (!user) {
      navigate("/login"); // Si no está autenticado, lo enviamos a la página de login
    } else {
      saveOrder(cart, total); // Si está autenticado, guardamos la orden y navegamos al inicio
      navigate("/");
      clearCart();
    }
  };

  return (
    <Box p="4">
      <Text fontSize="2xl" fontWeight="bold">Carrito de Compras</Text>

      {cart.length === 0 ? (
        <Text mt="4">Tu carrito está vacío.</Text>
      ) : (
        <VStack spacing="4" align="stretch">
          {cart.map((item) => (
            <HStack key={item.id} borderWidth="1px" borderRadius="md" p="4">
              <Image src={item.img} alt={item.name} boxSize="100px" />
              <Box flex="1">
                <Text>Producto: {item.name}</Text>
                <Text>Precio: ${item.price}</Text>
                <Counter 
                  initialCount={item.quantity} 
                  onChange={(newQuantity) => updateQuantity(item.id, newQuantity)}
                />
                <Text>Subtotal: {item.quantity * item.price}</Text>
              </Box>
              <IconButton onClick={() => removeFromCart(item.id)} icon={<DeleteIcon />} />
            </HStack>
          ))}
          <Divider my="2" />
          <Box display="flex" justifyContent="space-evenly">
            <Text fontSize="xl" fontWeight="bold">Total: ${total}</Text>
            <Button onClick={handleCheckout} colorScheme="green">Finalizar compra</Button>
            <Button onClick={clearCart} colorScheme="red">Vaciar carrito</Button>
          </Box>
        </VStack>
      )}
    </Box>
  );
};

export default Cart;
