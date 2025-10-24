import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { BiHomeAlt2, BiFoodMenu } from "react-icons/bi";
import { TbMessageStar } from "react-icons/tb";
import { useCart } from "./CartContext";

export default function Header() {
  const { cartItems } = useCart();
  const cartQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <header className="flex items-center justify-between px-6 shadow h-11 py-9">
      <Link to="/"
        className="text-lg sm:text-3xl font-mont">NAYBAKES</Link>
      <div className="items-center justify-center hidden gap-6 sm:flex">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <HashLink to="/#reviews">Reviews</HashLink>
        <div className="relative">
          <Link to="/cart">
            <IoCartOutline
              className="w-6 h-6" />
          </Link>
          <div className="absolute font-semibold text-red-900 left-2 bottom-4">{cartQuantity}</div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-6 sm:hidden">
        <Link to="/">
          <BiHomeAlt2
            className="w-5 h-5" />
        </Link>
        <Link to="/menu">
          <BiFoodMenu
            className="w-5 h-5" />
        </Link>
        <HashLink to="/#reviews">
          <TbMessageStar
            className="w-5 h5" />
        </HashLink>
        <div className="relative">
          <Link to="/cart">
            <IoCartOutline
              className="w-5 h-5 " />
          </Link>
          <div className="absolute font-semibold text-red-900 left-2 bottom-3">{cartQuantity}</div>
        </div>

      </div>

    </header>
  )
}