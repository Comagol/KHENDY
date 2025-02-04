import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import AboutUs from "../pages/AboutUs";
import ProductList from "../components/ProductList"
import Home from "./Home";
import Footer from "../components/Footer";
import Cart from "./Cart";

function App() {
  return (
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products/>}/>
            <Route path="/productlist" element={<ProductList/>}/>
            <Route path="/products/:category" element={<ProductList/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer/>
        </Router>
  );
}

export default App;

