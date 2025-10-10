import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MenuPage from "./pages/MenuPage";
import Cart from "./pages/Cart";
import { CartProvider } from "./components/CartContext";
import About from "./pages/AboutUs";

export default function App() {
  return (
    <CartProvider>

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </CartProvider>
  );
}