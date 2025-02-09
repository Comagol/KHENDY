import { Box, Button, Image, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ category }) => {
    const navigate = useNavigate();

    return (
        <Box borderWidth="1px" borderRadius="md" overflow="hidden" p={4} textAlign="center">
            <VStack spacing={3}>
                <Text fontSize="xl" fontWeight="bold">{category.category}</Text>
                <Image 
                    src={category.img ?? "https://via.placeholder.com/150"} 
                    alt={category.category} 
                    boxSize="150px" 
                    objectFit="cover" 
                    borderRadius="md"
                />
                <Button colorScheme="teal" onClick={() => navigate(`/products/${category.category}`)}>Ver más</Button>
            </VStack>
        </Box>
    );
};

export default CategoryCard;
