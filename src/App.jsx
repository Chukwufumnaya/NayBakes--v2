import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./components/CartContext";
import MainPage from "./pages/MainPage";
import MenuPage from "./pages/MenuPage";
import Cart from "./pages/Cart";
import About from "./pages/AboutUs";

export default function App() {
  return (
    <HashRouter >
      <CartProvider>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </CartProvider>
    </HashRouter>
  );
}