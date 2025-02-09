import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";  // Importamos Chakra UI
import Navbar from "../components/Navbar";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import AboutUs from "../pages/AboutUs";
import ProductList from "../components/ProductList";
import Home from "./Home";
import Footer from "../components/Footer";
import Cart from "./Cart";

function App() {
  return (
    <Router>
      <Box display="flex" flexDirection="column" minH="100vh">
        <Navbar />
        <Box flex="1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/productlist" element={<ProductList />} />
            <Route path="/products/:category" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>

        <Footer />
      </Box>
    </Router>
  );
}

export default App;
