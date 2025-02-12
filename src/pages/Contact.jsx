import React, { useState } from "react";
import { Box, Input, Textarea, Button, FormControl, FormLabel, useToast, Heading } from "@chakra-ui/react";
import { saveContactMessage } from "../firebase/firestore";

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const toast = useToast();

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Enviar formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación básica
    if (!formData.nombre || !formData.apellido || !formData.email || !formData.mensaje) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos obligatorios.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    try {
      await saveContactMessage(formData);
      toast({
        title: "Mensaje enviado",
        description: "Tu mensaje ha sido enviado con éxito.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      // Limpiar formulario
      setFormData({
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        mensaje: "",
      });

    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar el mensaje.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={4} maxW="500px" mx="auto">
      <Heading justifySelf="center">Contacto</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>Nombre</FormLabel>
          <Input name="nombre" value={formData.nombre} onChange={handleChange} />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Apellido</FormLabel>
          <Input name="apellido" value={formData.apellido} onChange={handleChange} />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" name="email" value={formData.email} onChange={handleChange} />
        </FormControl>

        <FormControl>
          <FormLabel>Teléfono</FormLabel>
          <Input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Mensaje</FormLabel>
          <Textarea name="mensaje" value={formData.mensaje} onChange={handleChange} />
        </FormControl>

        <Button mt={4} colorScheme="blue" type="submit">
          Enviar
        </Button>
      </form>
    </Box>
  );
};

export default Contact;
