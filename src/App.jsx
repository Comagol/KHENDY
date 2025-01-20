import { ChakraProvider, VStack } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <VStack spacing={4} mt={6}>
        <ProductCard name="Brunita" price={16000}/>
        <ProductCard name="Coin" price={12000}/>
        <ProductCard name="Ekos" price={17000}/>
        <ProductCard name="Cruzado" price={20000}/>
      </VStack>
    </ChakraProvider>
  );
}

export default App;

