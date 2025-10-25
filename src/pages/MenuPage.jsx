import React, { useState } from "react";
import { info, menuCategories, addOnCosts } from "../data/data";
import Header from "../components/Header";
import { useCart } from "../components/CartContext";
import { SiTicktick } from "react-icons/si";
import { FaHandPointUp } from "react-icons/fa6";


export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0]);
  const [flippedId, setFlippedId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedMods, setSelectedMods] = useState({});
  
  const isMobile = window.innerWidth < 640;

  const handleOpenModal = (item) => {
    setSelectedItem(item);

    const initialMods = {};
    if (item.availableMods) {
      item.availableMods.forEach(mod => {
        const modType = mod.type
        const defaultOption = mod.default

        if (modType === 'radio') {
          const option = defaultOption || mod.options[0];
          const cost = addOnCosts[mod.category]?.[option] || 0;
          initialMods[mod.category] = { option, cost: Number(cost) };
        } else if (modType === 'checkbox') {
          if (defaultOption && Array.isArray(defaultOption)) {
            initialMods[mod.category] = defaultOption.map(optionName => ({
              option: optionName,
              cost: Number(addOnCosts[mod.category]?.[optionName] || 0)
            }));
          } else if (defaultOption) {
            initialMods[mod.category] = [{
              option: defaultOption,
              cost: Number(addOnCosts[mod.category]?.[defaultOption] || 0)
            }];
          } else {
            initialMods[mod.category] = [];
          }
        }
      })
    }

    setSelectedMods(initialMods)
    setIsOpen(true)
  }


  const handleCloseModal = () => {
    setSelectedItem(null)
    setIsOpen(false)
    setSelectedMods({})
  }

  const noneOption = 'None';

  const handleModChange = (category, option, cost, type) => {
    setSelectedMods(prevMods => {
      const newMods = { ...prevMods };

      if (type === 'radio') {
        newMods[category] = { option, cost: Number(cost) }

      } else if (type == 'checkbox') {
        const currentOptions = Array.isArray(newMods[category]) ? newMods[category] : [];
        const isCurrentlySelected = currentOptions.some(mod => mod.option === option);

        if (option === noneOption) {
          if (isCurrentlySelected) {
            newMods[category] = currentOptions.filter(mod => mod.option !== noneOption);
          } else {
            newMods[category] = [{ option, cost: Number(cost) }];
          }
        } else {
          let updatedOptions = currentOptions.filter(mod => mod.option !== noneOption);

          if (isCurrentlySelected) {
            newMods[category] = updatedOptions.filter(mod => mod.option !== option);
          } else {
            newMods[category] = [...updatedOptions, { option, cost: Number(cost) }];
          }
        }
      }
      return newMods;
    })
  }

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

  const handleButtonClick = (item) => {
    if (item.availableMods) {
      handleOpenModal(item)
    }
    else {
      addToCart({
        ...item,
        finalPrice: Number(item.price) || 0,
        selectedMods: {},
      })
    }
  }


  const menuCard = currentItems.map((item) => {
    const isItemClicked = item.id === clickedItemId;
    const isFlipped = flippedId === item.id;

    return (
      <div key={item.id} className="bg-[#D5C4A1] p-9 w-[280px] h-[450px] rounded-xl">
        <div
          className="cursor-pointer [perspective:1000px] group"
          onClick={() => setFlippedId(isFlipped ? null : item.id)}
        >
          {isMobile && !isFlipped && (
            <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-black/70 text-white p-2 rounded-full shadow-xl`}
            >
              <FaHandPointUp size={24} className="rotate-45 animate-pulse" />
            </div>
          )}
          <div
            className={`relative h-[305px] w-full rounded-xl shadow-xl transition-all duration-1000 [transform-style:preserve-3d] ${isFlipped ? "[transform:rotateY(180deg)]" : ""
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
            className={`p-1 cursor-pointer shadow rounded-sm ${isItemClicked && !isOpen ? 'bg-green-700' : 'bg-[#E0D4BB] hover:bg-[#c2b79f]'}`}
            disabled={isItemClicked}
            onClick={() => handleButtonClick(item)}
          > {isItemClicked && !isOpen ? (
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

  const modal = () => {
    const isItemClicked = selectedItem ? selectedItem.id === clickedItemId : false;

    let finalPrice = selectedItem ? Number(selectedItem.price) : 0;

    Object.values(selectedMods).forEach(modValue => {
      if (Array.isArray(modValue)) {

        modValue.forEach(mod => {
          finalPrice += Number(mod.cost);
        });
      } else if (modValue && typeof modValue === 'object') {

        finalPrice += Number(modValue.cost);
      }
    });

    return (
      <>
        {isOpen && selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center w-[90%] sm:w-lg h-max justify-center m-auto p-3 bg-white rounded-2xl">
            <div className="relative w-full h-full max-w-lg p-3 shadow-2xl rounded-xl bg-[#D5C4A1]">
              <p className="text-xl text-center">Customize - {selectedItem.name}</p>
              {selectedItem.availableMods.map((mod, modIndex) => (
                <div key={`mod-${selectedItem.id}-${modIndex}`}>
                  <p className="font-normal">{mod.category}</p>
                  {mod.type === 'checkbox' &&
                    mod.options.map((option, optIndex) => {
                      const cost = addOnCosts[mod.category]?.[option] || 0;
                      const selected = selectedMods[mod.category];
                      const isChecked = Array.isArray(selected)
                        ? selected.some(m => m.option === option)
                        : false;

                      return (
                        <div key={`option-${selectedItem.id}-${optIndex}`}>
                          <label >
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => handleModChange(mod.category, option, cost, 'checkbox')} /> {option}
                            <span>
                              {
                                cost > 0 ?
                                  ` (+$${Number(cost).toFixed(2)})`
                                  :
                                  null
                              }
                            </span>
                            <br />
                          </label>
                        </div>
                      )
                    })
                  }
                  {mod.type === 'radio' && mod.options.map((option, optIndex) => {
                    const cost = addOnCosts[mod.category]?.[option] || 0;
                    const isChecked = selectedMods[mod.category]?.option === option;
                    return (
                      <label key={`option-${selectedItem.id}-${optIndex}`}>
                        <input
                          type="radio"
                          id={option}
                          name={mod.category}
                          checked={isChecked}
                          onChange={() => handleModChange(mod.category, option, cost, 'radio')}
                        /> {option}
                        <span>
                          {
                            cost > 0 ?
                              ` (+$${Number(cost).toFixed(2)})`
                              :
                              null
                          }
                        </span>
                        <br />
                      </label>
                    )
                  })
                  }
                </div>
              ))}
              <p className="mt-2 mb-2 text-xl font-semibold text-center">Price - ${(Number(finalPrice)).toFixed(2)}</p>
              <div className="flex flex-col gap-2">
                <button className="p-1 rounded-sm shadow cursor-pointer bg-[#E0D4BB] hover:bg-[#c2b79f] mt-2"
                  onClick={handleCloseModal}>X Close</button>
                <button
                  className={`p-1 cursor-pointer shadow rounded-sm ${isItemClicked ? 'bg-green-700' : 'bg-[#E0D4BB] hover:bg-[#c2b79f]'}`}
                  disabled={isItemClicked}
                  onClick={() => {
                    addToCart({
                      ...selectedItem,
                      finalPrice: finalPrice,
                      selectedMods: selectedMods,
                    });
                    handleCloseModal();
                  }}
                > {isItemClicked ? (
                  <>
                    <div className="flex items-center justify-center gap-2 px-1">
                      <SiTicktick />
                      <span>Added!</span>
                    </div>
                  </>
                ) : (
                  <span>+ Add to Cart (${Number(finalPrice).toFixed(2)})</span>
                )}
                </button>
              </div>
            </div>
          </div >
        )
        }
      </>

    )
  }


  return (
    <>
      <Header />
      <main id="menu">
        <h1 className="p-4 text-4xl font-normal text-center">MENU</h1>
        <div className="flex flex-wrap items-center justify-around gap-5">
          {hyperlinks}
        </div>
        <div className="flex items-center justify-center p-4 mb-5">
          <div className="grid items-center grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
            {menuCard}
          </div>
        </div>
        <div>
          {modal()}
        </div>
      </main>
    </>
  )
}
