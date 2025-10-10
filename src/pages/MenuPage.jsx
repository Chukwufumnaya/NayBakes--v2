import React, { useState } from "react";
import { info, menuCategories } from "../data/data";
import Header from "../components/Header";
import { useCart } from "../components/CartContext";
import { SiTicktick } from "react-icons/si";


export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0]);
  const [flippedId, setFlippedId] = useState(null); // Add this state

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

  const { addToCart, clickedItemId } = useCart();

  const menuCard = currentItems.map((item) => {
    const isItemClicked = item.id === clickedItemId;
    const isFlipped = flippedId === item.id;

    return (
      <div key={item.id} className="bg-[#D5C4A1] p-9 w-[280px] h-[450px] rounded-xl">
        <div
          className="cursor-pointer [perspective:1000px] group"
          onClick={() => setFlippedId(isFlipped ? null : item.id)} // Toggle flip on click/tap
        >
          <div
            className={`relative h-[305px] w-full rounded-xl shadow-xl transition-all duration-1000 [transform-style:preserve-3d] ${
              isFlipped ? "[transform:rotateY(180deg)]" : ""
            } group-hover:[transform:rotateY(180deg)]`}
          >
            <div className="absolute inset-0 h-[320px] w-[210px] rounded-xl [backface-visibility:hidden] overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="object-cover w-full h-full" />
            </div>
            <div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col items-center justify-center p-4 text-center text-sm">
              <p>{item.description}</p>
            </div>
          </div>
        </div>
        <div className="py-4 text-right">
          <p>{item.name}</p>
          <p>${item.price}</p>
          <button
            className={`p-1 cursor-pointer shadow rounded-sm ${isItemClicked ? 'bg-green-700' : 'bg-[#E0D4BB] hover:bg-[#c2b79f]'}`}
            disabled={isItemClicked}
            onClick={() => addToCart(item)}
          > {isItemClicked ? (
            <>
              <div className="flex items-center justify-center gap-2 px-1">
                <SiTicktick />
                <span>Added!</span>
              </div>
            </>
          ) : (
            <span>+ Add to Cart</span>
          )}
          </button>
        </div>
      </div>
    )
  });

  return (
    <>
      <Header />
      <main>
        <h1 className="p-4 text-4xl font-normal text-center">MENU</h1>
        <div className="flex flex-wrap items-center justify-around gap-5">
          {hyperlinks}
        </div>
        <div className="flex items-center justify-center p-4 mb-5">
          <div className="grid items-center grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
            {menuCard}
          </div>
        </div>
      </main>
    </>
  )
}