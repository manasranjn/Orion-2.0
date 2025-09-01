import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import Contact from "./Components/Contact";
import Product from "./Components/Product";
import Login from "./Components/Login";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
