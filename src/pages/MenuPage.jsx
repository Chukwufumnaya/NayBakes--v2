import React, { useState } from "react";
import { info, menuCategories } from "../data/data";


export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0]);

  const currentItems = info.filter(items => (
    items.tags.includes(activeCategory)
  ))

  function handleClick(category) {
    setActiveCategory(category)
  }

  const hyperlinks = menuCategories.map(category => (
    <p
      key={category}
      onClick={() => handleClick(category)} className={`capitalize cursor-pointer ${activeCategory === category ? 'underline' : ''}`}>
      {category}
    </p>
  ))


  const menuCard = currentItems.map(item => (
    <div key={item.id}>
      <img src={item.image} alt={item.name} className="w-[250px] h-[350px] object-cover" />
      <p>{item.name}</p>
      <p>{item.price}</p>
      <button>Add to Cart</button>
    </div>
  ))

  return (
    <>
      <h1>MENU</h1>
      <div className="flex gap-5">
        {hyperlinks}
      </div>
      <div>
        {menuCard}
      </div>
    </>
  )
}