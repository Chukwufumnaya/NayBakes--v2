export const info = [
  {
    id: 1,
    name: "Espresso",
    description: "A rich, concentrated shot of our signature blend. Bold, sweet, and smooth...the pure essence of coffee. Perfect for a quick, powerful lift.",
    price: "3.00",
    image: "./images/espresso.jpg",
    tags: ["coffee"],
    availableMods: [
      {
        category: 'Size',
        options: ['Small', 'Medium', 'Large'],
        default: 'Medium',
        type: 'radio'
      },
      {
        category: 'Syrup',
        options: ['None', 'Vanilla', 'Caramel', 'Hazelnut'],
        default: 'None',
        type: 'checkbox'
      }
    ]
  },
  {
    id: 2,
    name: "Americano",
    description: "The perfect balance of strength and smoothness; espresso shots expertly diluted with hot water. Delivers a deep flavor profile without the heaviness of milk",
    price: "3.50",
    image: "./images/americano.jpg",
    tags: ["coffee"],
    availableMods: [
      {
        category: 'Size',
        options: ['Small', 'Medium', 'Large'],
        default: 'Medium',
        type: 'radio'
      },
      {
        category: 'Syrup',
        options: ['None', 'Vanilla', 'Caramel', 'Hazelnut'],
        default: 'None',
        type: 'checkbox'
      }
    ]
  },
  {
    id: 3,
    name: "Latte",
    description: "Our comforting classic. Velvety steamed milk meets a double shot of espresso, crowned with a thin layer of foam. Simple, creamy, and satisfying.",
    price: "4.50",
    image: "./images/latte.jpg",
    tags: ["coffee", "popular"],
    availableMods: [
      {
        category: 'Size',
        options: ['Small', 'Medium', 'Large'],
        default: 'Medium',
        type: 'radio'
      },
      {
        category: 'Milk',
        options: ['Whole', 'Oat', 'Almond'],
        default: 'Whole',
        type: 'radio'
      },
      {
        category: 'Syrup',
        options: ['None', 'Vanilla', 'Caramel', 'Hazelnut'],
        default: 'None',
        type: 'checkbox'
      }
    ]
  },
  {
    id: 4,
    name: "Cappuccino",
    description: "A timeless favorite. Equal parts rich espresso, hot milk, and deep, airy milk foam. It is light, frothy, and wonderfully complex.",
    price: "4.50",
    image: "./images/cappuccino.jpg",
    tags: ["coffee"],
    availableMods: [
      {
        category: 'Size',
        options: ['Small', 'Medium', 'Large'],
        default: 'Medium',
        type: 'radio'
      },
      {
        category: 'Milk',
        options: ['Whole', 'Oat', 'Almond'],
        default: 'Whole',
        type: 'radio'
      },
      {
        category: 'Syrup',
        options: ['None', 'Vanilla', 'Caramel', 'Hazelnut'],
        default: 'None',
        type: 'checkbox'
      }
    ]
  },
  {
    id: 5,
    name: "Mocha",
    description: "The ultimate indulgence. Rich dark chocolate syrup blended with espresso and steamed milk, finished with a dollop of whipped cream. A decadent treat.",
    price: "5.00",
    image: "./images/mocha.jpg",
    tags: ["coffee"],
    availableMods: [
      {
        category: 'Size',
        options: ['Small', 'Medium', 'Large'],
        default: 'Medium',
        type: 'radio'
      },
      {
        category: 'Milk',
        options: ['Whole', 'Oat', 'Almond'],
        default: 'Whole',
        type: 'radio'
      },
      {
        category: 'Syrup',
        options: ['None', 'Vanilla', 'Caramel', 'Hazelnut'],
        default: 'None',
        type: 'checkbox'

      },
      {
        category: 'Toppings',
        options: ['None', 'Whipped Cream'],
        default: 'Whipped Cream',
        type: 'radio'
      }
    ]
  },
  {
    id: 6,
    name: "Macchiato",
    description: "'Stained' with tradition. A double shot of espresso marked by a small kiss of warm, frothed milk. Bold flavor, subtle creaminess.",
    price: "4.00",
    image: "./images/macchiato.jpg",
    tags: ["coffee"],
    availableMods: [
      {
        category: 'Size',
        options: ['Small', 'Medium', 'Large'],
        default: 'Medium',
        type: 'radio'
      },
      {
        category: 'Milk',
        options: ['Whole', 'Oat', 'Almond'],
        default: 'Whole',
        type: 'radio'
      },
      {
        category: 'Syrup',
        options: ['None', 'Vanilla', 'Caramel', 'Hazelnut'],
        default: 'None',
        type: 'checkbox'

      }
    ]
  },
  {
    id: 7,
    name: "Flat White",
    description: "A smooth, modern classic. Espresso combined with micro-foamed milk for a silky, integrated texture. Stronger than a latte with a clean finish.",
    price: "4.75",
    image: "./images/flat-white.jpg",
    tags: ["coffee"],
    availableMods: [
      {
        category: 'Size',
        options: ['Small', 'Medium', 'Large'],
        default: 'Medium',
        type: 'radio'
      },
      {
        category: 'Milk',
        options: ['Whole', 'Oat', 'Almond'],
        default: 'Whole',
        type: 'radio'
      },
      {
        category: 'Syrup',
        options: ['None', 'Vanilla', 'Caramel', 'Hazelnut'],
        default: 'None',
        type: 'checkbox'

      }
    ]
  },
  {
    id: 8,
    name: "Cold Brew",
    description: "Our signature blend steeped for 16 hours, resulting in a low-acid, super-smooth, and naturally sweet coffee concentrate. Served over ice for maximum refreshment.",
    price: "4.50",
    image: "./images/cold-brew.jpg",
    tags: ["coffee"],
    availableMods: [
      {
        category: 'Size',
        options: ['Small', 'Medium', 'Large'],
        default: 'Medium',
        type: 'radio'
      },
      {
        category: 'Syrup',
        options: ['None', 'Vanilla', 'Caramel', 'Hazelnut'],
        default: 'None',
        type: 'checkbox'

      }
    ]
  },
  {
    id: 9,
    name: "Iced Coffee",
    description: "Freshly brewed daily and chilled fast. A crisp, traditional coffee served over ice. Ideal for a quick, classic,pick-me-up.",
    price: "3.00",
    image: "./images/iced-coffee.jpg",
    tags: ["coffee", "popular"],
    availableMods: [
      {
        category: 'Size',
        options: ['Small', 'Medium', 'Large'],
        default: 'Medium',
        type: 'radio'
      },
      {
        category: 'Syrup',
        options: ['None', 'Vanilla', 'Caramel', 'Hazelnut'],
        default: 'None',
        type: 'checkbox'

      }
    ]
  },
  {
    id: 10,
    name: "Earl Grey Tea",
    description: "A fragrant, traditional black tea infused with the citrus aroma of Bergamot oil. Elegant, bright, and perfect for any time of day.",
    price: "3.00",
    image: "./images/earl-grey-tea.jpg",
    tags: ["tea"],
    availableMods: [
      {
        category: 'Size',
        options: ['Small', 'Medium', 'Large'],
        default: 'Medium',
        type: 'radio'
      },
      {
        category: 'Milk',
        options: ['Whole', 'Oat', 'Almond'],
        default: 'Whole',
        type: 'radio'
      },
      {
        category: 'Sweetener',
        options: ['None', 'Honey', 'Sugar'],
        default: 'None',
        type: 'radio'
      }
    ]
  },
  {
    id: 11,
    name: "Green Tea",
    description: "Steamed whole-leaf tea that is light, clean, and packed with antioxidants. A refreshing and gently invigorating brew.",
    price: "3.00",
    image: "./images/green-tea2.jpg",
    tags: ["tea"],
    availableMods: [
      {
        category: 'Size',
        options: ['Small', 'Medium', 'Large'],
        default: 'Medium',
        type: 'radio'
      },
      {
        category: 'Milk',
        options: ['Whole', 'Oat', 'Almond'],
        default: 'Whole',
        type: 'radio'
      },
      {
        category: 'Sweetener',
        options: ['None', 'Honey', 'Sugar'],
        default: 'None',
        type: 'radio'
      }
    ]
  },
  {
    id: 12,
    name: "Chamomile Tea",
    description: "Calming herbal infusion of dried chamomile flowers. Naturally sweet, floral, and caffeine-free. Your perfect path to relaxation.",
    price: "3.00",
    image: "./images/chamomile-tea.jpg",
    tags: ["tea", "top"],
    availableMods: [
      {
        category: 'Size',
        options: ['Small', 'Medium', 'Large'],
        default: 'Medium',
        type: 'radio'
      },
      {
        category: 'Milk',
        options: ['Whole', 'Oat', 'Almond'],
        default: 'Whole',
        type: 'radio'
      },
      {
        category: 'Sweetener',
        options: ['None', 'Honey', 'Sugar'],
        default: 'None',
        type: 'radio'
      }
    ]
  },
  {
    id: 13,
    name: "Hot Chocolate",
    description: "Creamy, European-style cocoa blended with steamed milk. A velvety, decadent hug in a mug.",
    price: "4.00",
    image: "./images/hot-chocolate.jpg",
    tags: ["non-coffee"],
    availableMods: [
      {
        category: 'Size',
        options: ['Small', 'Medium', 'Large'],
        default: 'Medium',
        type: 'radio'
      },
      {
        category: 'Milk',
        options: ['Whole', 'Oat', 'Almond'],
        default: 'Whole',
        type: 'radio'
      },
      {
        category: 'Toppings',
        options: ['None', 'Whipped Cream', 'Mini Marshmallows'],
        default: 'None',
        type: 'checkbox'

      }
    ]
  },
  {
    id: 14,
    name: "Orange Juice",
    description: "100% freshly squeezed and served ice cold. Bright, tangy, and bursting with natural citrus flavor.",
    price: "5.00",
    image: "./images/orange-juice.jpg",
    tags: ["juice", "non-coffee"]
  },
  {
    id: 15,
    name: "Apple Juice",
    description: "Crisp, clean, and perfectly sweet. A refreshing classic that's cold-pressed for maximum flavor.",
    price: "5.00",
    image: "./images/apple-juice.jpg",
    tags: ["juice", "non-coffee"]
  },
  {
    id: 16,
    name: "Mango Smoothie",
    description: "A tropical escape in a cup! Ripe, sweet mango blended with a touch of yogurt for a creamy, golden treat.",
    price: "6.00",
    image: "./images/mango-smoothie.jpg",
    tags: ["smoothies", "non-coffee"],
    availableMods: [
      {
        category: 'Size',
        options: ['Small', 'Medium', 'Large'],
        default: 'Medium',
        type: 'radio'
      },
      {
        category: 'Milk',
        options: ['Whole', 'Oat', 'Almond'],
        default: 'Whole',
        type: 'radio'
      },
      {
        category: 'Yogurt',
        options: ['Greek', 'Plain', 'Almond'],
        default: 'Plain',
        type: 'radio'
      }
    ]
  },
  {
    id: 17,
    name: "Mixed-Berry Smoothie",
    description: "A vibrant blend of strawberries, blueberries, raspberries, and banana. Tart, sweet, and full of healthy goodness.",
    price: "6.00",
    image: "./images/mixed-berry-smoothie.jpg",
    tags: ["smoothies", "non-coffee", "top"],
    availableMods: [
      {
        category: 'Size',
        options: ['Small', 'Medium', 'Large'],
        default: 'Medium',
        type: 'radio'
      },
      {
        category: 'Milk',
        options: ['Whole', 'Oat', 'Almond'],
        default: 'Whole',
        type: 'radio'
      },
      {
        category: 'Yogurt',
        options: ['Greek', 'Plain', 'Almond'],
        default: 'Plain',
        type: 'radio'
      }
    ]
  },
  {
    id: 18,
    name: "Sparkling Water",
    description: "Effervescent, crisp and pure. A simple, zero-calorie way to refresh and cleanse the palate.",
    price: "2.50",
    image: "./images/sparkling-water.jpg",
    tags: ["non-coffee"]
  },
  {
    id: 19,
    name: "Croissant",
    description: "Hand-folded and baked until golden, with hundreds of delicate buttery layers. Flaky crust, soft interior...pure pastry perfection.",
    price: "3.50",
    image: "./images/croissant.jpg",
    tags: ["pastries", "popular"],
    availableMods: [
      {
        category: 'Drizzles',
        options: ['None', 'Honey', 'Chocolate', 'Butter'],
        default: 'None',
        type: 'radio'
      },
      {
        category: 'Toppings',
        options: ['None', 'Fresh Berries'],
        default: 'None',
        type: 'radio'

      },
      {
        category: 'Gluten Free',
        options: ['None', 'Gluten Free'],
        default: 'None',
        type: 'radio'
      }
    ]
  },
  {
    id: 20,
    name: "Chocolate Muffin",
    description: "Deep, dark chocolate cake studded with extra chocolate chips. Moist, rich, and intensely satisfying.",
    price: "3.75",
    image: "./images/chocolate-muffins.jpg",
    tags: ["pastries"],
    availableMods: [
      {
        category: 'Drizzles',
        options: ['None', 'Honey', 'Chocolate', 'Butter'],
        default: 'None',
        type: 'radio'
      },
      {
        category: 'Toppings',
        options: ['None', 'Fresh Berries'],
        default: 'None',
        type: 'radio'

      }
    ]
  },
  {
    id: 21,
    name: "Blueberry Muffin",
    description: "A bakery classic, packed with juicy, bursting blueberries and a crunchy streusel topping. A delightful start to your morning.",
    price: "3.75",
    image: "./images/blueberry-muffins.jpg",
    tags: ["pastries", "popular"],
    availableMods: [
      {
        category: 'Drizzles',
        options: ['None', 'Honey', 'Chocolate', 'Butter'],
        default: 'None',
        type: 'radio'
      },
      {
        category: 'Toppings',
        options: ['None', 'Fresh Berries'],
        default: 'None',
        type: 'radio'

      }
    ]
  },
  {
    id: 22,
    name: "Chocolate Chip Cookies",
    description: "Warm, gooey centers and slightly crisp edges, loaded with melted chocolate chips. Tastes just like Grandma used to make.",
    price: "3.00",
    image: "./images/chocolate-chip-cookies.jpg",
    tags: ["popular", "top", "pastries"],
    availableMods: [
      {
        category: 'Toppings',
        options: ['None', 'Vanilla Ice Cream'],
        default: 'None',
        type: 'radio'

      }
    ]
  },
  {
    id: 23,
    name: "Brownies",
    description: "Fudgy, dense, and intensely chocolatey. Our classic brownie is the definition of sweet indulgence.",
    price: "4.00",
    image: "./images/brownie.jpg",
    tags: ["pastries"],
    availableMods: [
      {
        category: 'Drizzles',
        options: ['None', 'Caramel'],
        default: 'None',
        type: 'radio'
      },
      {
        category: 'Toppings',
        options: ['None', 'Vanilla Ice Cream'],
        default: 'None',
        type: 'radio'

      },
      {
        category: 'Gluten Free',
        options: ['None', 'Gluten Free'],
        default: 'None',
        type: 'radio'
      }
    ]
  },
  {
    id: 24,
    name: "Cinnamon Rolls",
    description: "Soft, pillowy dough swirled with cinnamon sugar and topped with a generous layer of sweet cream cheese frosting. Heavenly comfort food.",
    price: "4.50",
    image: "./images/cinnamon-roll.jpg",
    tags: ["pastries"],
    availableMods: [
      {
        category: 'Drizzles',
        options: ['None', 'Caramel', 'Pecans', 'Walnuts'],
        default: 'None',
        type: 'radio'
      },
      {
        category: 'Toppings',
        options: ['None', 'Extra Cream Cheese Frosting'],
        default: 'None',
        type: 'radio'

      }
    ]
  },
  {
    id: 25,
    name: "Bagels",
    description: "New York style, chewy on the inside, lightly crispy on the outside. Served toasted with your choice of cream cheese, butter, or jam.",
    price: "2.50",
    image: "./images/bagels.jpg",
    tags: ["breakfast & lunch", "top"],
    availableMods: [
      {
        category: 'Toppings',
        options: ['None', 'Cream Cheese', 'Butter', 'Jam'],
        default: 'None',
        type: 'checkbox'
      },
      {
        category: 'Toasting',
        options: ['None', 'Toasted'],
        default: 'Toasted',
        type: 'radio'
      },
      {
        category: 'Filling',
        options: ['None', 'Tomato', 'Avocado'],
        default: 'None',
        type: 'checkbox'

      },
    ]
  },
  {
    id: 26,
    name: "Avocado Toast",
    description: "Thick-cut artisan bread toasted and topped with fresh, creamy avocado, a sprinkle of sea salt, and red pepper flakes. Simple, fresh, and filling.",
    price: "6.50",
    image: "./images/avocado-toast.jpg",
    tags: ["breakfast & lunch", "top"],
    availableMods: [
      {
        category: 'Gluten Free',
        options: ['None', 'Gluten Free'],
        default: 'None',
        type: 'radio'
      }
    ]
  },
  {
    id: 27,
    name: "Yogurt Parfait",
    description: "Layers of Greek yogurt, crunchy granola, and seasonal mixed berries. A light, healthy, and refreshing option.",
    price: "5.00",
    image: "./images/yogurt-parfait.jpg",
    tags: ["breakfast & lunch"],
    availableMods: [
      {
        category: 'Size',
        options: ['Small', 'Medium', 'Large'],
        default: 'Medium',
        type: 'radio'
      },
      {
        category: 'Yogurt',
        options: ['Greek', 'Plain', 'Almond'],
        default: 'Greek',
        type: 'radio'
      }
    ]
  },
  {
    id: 28,
    name: "Breakfast Sandwich",
    description: "Your choice of fresh eggs and melted cheese on a toasted English muffin, bagel, or croissant with savory ham or bacon. The perfect morning fuel.",
    price: "6.00",
    image: "./images/breakfast-sandwich2.jpg",
    tags: ["sandwich", "breakfast & lunch"],
    availableMods: [
      {
        category: 'Gluten Free',
        options: ['None', 'Gluten Free'],
        default: 'None',
        type: 'radio'
      },
      {
        category: 'Pastry',
        options: ['English Muffin', 'Bagel', 'Croissant'],
        default: 'Bagel',
        type: 'radio'
      },
      {
        category: 'Protein',
        options: ['None', 'Ham', 'Bacon'],
        default: 'None',
        type: 'radio'
      },
      {
        category: 'Cheese',
        options: ['None', 'American', 'Cheddar', 'Swiss'],
        default: 'None',
        type: 'checkbox'
      },
    ]
  },
  {
    id: 29,
    name: "Turkey Sandwich",
    description: "Sliced smoked turkey, crisp lettuce, tomato, and your choice of cheese on fresh whole-wheat bread. A wholesome, reliable lunch favorite.",
    price: "9.00",
    image: "./images/turkey-sandwich.jpg",
    tags: ["sandwich", "breakfast & lunch"],
    availableMods: [
      {
        category: 'Cheese',
        options: ['None', 'American', 'Cheddar', 'Swiss'],
        default: 'None',
        type: 'checkbox'
      },
      {
        category: 'Size',
        options: ['6-inch', '8-inch', '10-inch'],
        default: '8-inch',
        type: 'radio'
      },
    ]
  },
  {
    id: 30,
    name: "Caprese Sandwich",
    description: "A taste of Italy! Slices of fresh mozzarella, vine-ripened tomatoes, and basil pesto, served on a toasted baguette. Simple, vibrant, and aromatic.",
    price: "8.50",
    image: "./images/caprese-sandwich.jpg",
    tags: ["sandwich", "breakfast & lunch"],
    availableMods: [
      {
        category: 'Size',
        options: ['6-inch', '8-inch', '10-inch'],
        default: '8-inch',
        type: 'radio'
      },
    ]
  },
  {
    id: 31,
    name: "Chicken Caesar Salad",
    description: "Crisp romaine lettuce tossed in our creamy Caesar dressing, topped with grilled chicken, crunchy croutons, and aged Parmesan cheese.",
    price: "10.00",
    image: "./images/chicken-caesar-salad.jpg",
    tags: ["salad", "breakfast & lunch"],
    availableMods: [
      {
        category: 'Size',
        options: ['Side', 'Main'],
        default: 'Main',
        type: 'radio'
      },
    ]
  },
  {
    id: 32,
    name: "Greek Salad",
    description: "A bright, Mediterranean medley of cucumbers, tomatoes, bell peppers, Kalamata olives, and feta cheese, all drizzled with a fresh vinaigrette.",
    price: "9.50",
    image: "./images/greek-salad.jpg",
    tags: ["salad", "top", "breakfast & lunch"],
    availableMods: [
      {
        category: 'Size',
        options: ['Side', 'Main'],
        default: 'Main',
        type: 'radio'
      },
    ]
  },
  {
    id: 33,
    name: "Matcha Latte",
    description: "Discover the deep, velvet taste of our Emerald elixir. We whisk the finest, shade-grown Japanese matcha into a rich, slightly sweet embrace with your choice of milk. Experience the invigorating earthiness and a lush, creamy finish that elevates your everyday.",
    price: "4.50",
    image: "./images/matcha-latte.jpg",
    tags: ["coffee", "popular"],
    availableMods: [
      {
        category: 'Size',
        options: ['Small', 'Medium', 'Large'],
        default: 'Medium',
        type: 'radio'
      },
      {
        category: 'Milk',
        options: ['Whole', 'Oat', 'Almond'],
        default: 'Whole',
        type: 'radio'
      },
      {
        category: 'Syrup',
        options: ['None', 'Vanilla', 'Caramel', 'Hazelnut'],
        default: 'None',
        type: 'checkbox'

      }
    ]
  }

]

export const menuCategories = ["coffee", "tea", "pastries", "breakfast & lunch", "non-coffee"]

export const addOnCosts = {
  'Size': { 'Large': 0.75, 'Medium': 0, 'Small': 0, '6-inch': 0, '8-inch': 0, '10-inch': 0.50 },
  'Milk': { 'Oat': 0.75, 'Almond': 0.75, 'Whole': 0 },
  'Syrup': { 'None': 0, 'Vanilla': 0.50, 'Caramel': 0.50, 'Hazelnut': 0.50 },
  'Toppings': { 'None': 0, 'Whipped Cream': 0, 'Mini Marshmallows': 0.50, 'Fresh Berries': 0.50, 'Vanilla Ice Cream': 0.50, 'Extra Cream Cheese Frosting': 0.50, 'Cream Cheese': 0, 'Butter': 0, 'Jam': 0 },
  'Sweetener': { 'None': 0, 'Sugar': 0.50, 'Honey': 0.50 },
  'Gluten Free': { 'None': 0, 'Gluten Free': 1.00 },
  'Yogurt': { 'Plain': 0, 'Greek': 0.50, 'Almond': 0.50 },
  'Filling': { 'None': 0, 'Tomato': 0.75, 'Avocado': 0.75 },
  'Drizzles': { 'None': 0, 'Caramel': 0.75, 'Pecans': 0.75, 'Walnuts': 0.75, 'Honey': 0.75, 'Chocolate': 0.75, 'Butter': 0.75 }
}