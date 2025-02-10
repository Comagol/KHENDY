import React, { useState } from "react";
import { Box, Input, Textarea, Button, FormControl, FormLabel, Select, Checkbox, VStack, Heading } from "@chakra-ui/react";

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
    preferencia: "email",
    aceptaTerminos: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
  };

  return (
    <Box maxW="500px" mx="auto" p="4" my="12" boxShadow="md" borderRadius="lg" bg="white">
      <Heading mb={4} textAlign="center">Contacto</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
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
          <FormControl>
            <FormLabel>Asunto</FormLabel>
            <Select name="asunto" value={formData.asunto} onChange={handleChange}>
              <option value="">Seleccionar...</option>
              <option value="consulta">Consulta general</option>
              <option value="pedido">Problema con un pedido</option>
              <option value="colaboracion">Colaboraciones</option>
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Mensaje</FormLabel>
            <Textarea name="mensaje" value={formData.mensaje} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Preferencia de contacto</FormLabel>
            <Select name="preferencia" value={formData.preferencia} onChange={handleChange}>
              <option value="email">Email</option>
              <option value="whatsapp">WhatsApp</option>
              <option value="telefono">Teléfono</option>
            </Select>
          </FormControl>
          <Checkbox name="aceptaTerminos" isChecked={formData.aceptaTerminos} onChange={handleChange}>
            Acepto ser contactado por los medios seleccionados
          </Checkbox>
          <Button type="submit" colorScheme="blue" width="full">Enviar</Button>
        </VStack>
      </form>
    </Box>
  );
};

export default Contact;