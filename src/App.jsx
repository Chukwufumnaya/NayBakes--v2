import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MenuPage from "./pages/MenuPage";
import Cart from "./pages/Cart";
import { CartProvider } from "./components/CartContext";
import About from "./pages/AboutUs";

export default function App() {
  return (
    <CartProvider>
      <Router >
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}