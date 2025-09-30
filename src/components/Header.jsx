import React from "react";

export default function Header() {
  return(
    <header className="flex justify-center items-center gap-7">
      <p className="font-mont text-3xl">NAYBAKES</p>
      <img 
      src="/src/assets/images/sourdough-icon.png" 
      alt="icon"
      className="w-[70px]" />
    </header>
  )
}