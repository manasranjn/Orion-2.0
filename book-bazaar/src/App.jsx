import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Screens/User/Home";
import About from "./Screens/User/About";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Common/Footer";
import SellYourBook from "./Screens/User/SellYourBook";
import ProductDetails from "./Screens/User/ProductDetails";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sell-your-books" element={<SellYourBook />} />
          <Route path="/product-details" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
