import React from "react";
import { Box, Text, Image, Flex, Heading } from "@chakra-ui/react";

const AboutUs = () => {
  return (
    <Box maxW="900px" mx="auto" my="8" p={6}>
      <Flex direction={{ base: "column", md: "row" }} align="center" gap={6}>
        {/* Texto de la dueña */}
        <Box flex="1">
          <Heading as="h2" size="xl" mb={4} color="blue.700">
            Sobre Nosotros
          </Heading>
          <Text fontSize="lg" mb={4}>
            Nuestra historia comienza con una visión clara: brindar elegancia y calidad en cada detalle. 
            Fundada por una joven apasionada de 19 años, enfocada en la calidad de los productos, la 
            atención al cliente y las últimas tendencias de moda.
          </Text>
          <Text fontSize="lg" fontWeight="bold">
            "Queremos que cada persona se vea bien y elegante en todo momento."
          </Text>
        </Box>

        {/* Imagen de la dueña */}
        <Box flex="1">
          <Image
            src="https://media-eze1-1.cdn.whatsapp.net/v/t61.24694-24/468234177_623541230102522_2298172484094551090_n.jpg?ccb=11-4&oh=01_Q5AaIAkJNGoahALj0CyTq3zLd9Mpch3DLCDQkg16Tw2TDUOp&oe=67BA2C2D&_nc_sid=5e03e0&_nc_cat=107"
            alt="Dueña del emprendimiento"
            borderRadius="lg"
            boxShadow="lg"
          />
        </Box>
      </Flex>

      {/* Mapa de ubicación */}
      <Box mt={10}>
        <Heading as="h3" size="lg" mb={4} color="blue.700">
          Nuestra Ubicación
        </Heading>
        <iframe
          title="Mapa de ubicación"
          width="100%"
          height="300"
          style={{ border: 0, borderRadius: "10px" }}
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13149.049854074318!2d-58.7339037!3d-34.5439055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb8f2e05eac6d%3A0xa1b62d1ea2de6e5d!2sSan%20Miguel%2C%20Buenos%20Aires!5e0!3m2!1sen!2sar!4v1648653075238!5m2!1sen!2sar"
        ></iframe>
      </Box>
    </Box>
  );
};

export default AboutUs;
