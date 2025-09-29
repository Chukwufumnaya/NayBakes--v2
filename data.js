const info = [
  {
    title: 'beverages',
    items: [
      {
        name: 'Espresso',
        description: 'A strong, concentrated shot of rich coffee, with a bold and aromatic flavor.',
        price: '$3.00',
        image: './images/espresso.jpg',
        type:'coffee'
      },
      {
        name: 'Americano',
        description: 'A simple yet satisfying blend of hot water and espresso, for a clean and pure coffee experience.',
        price: '$3.50',
        image: './images/americano.jpg',
        type:'coffee'
      },
      {
        name: 'Latte',
        description: 'Creamy steamed milk poured over a shot of espresso, topped with a delicate layer of foam.',
        price: '$4.50',
        image: './images/latte.jpg',
        type:'coffee'
      },
      {
        name: 'Cappuccino',
        description: 'A classic Italian favorite, featuring equal parts espresso, steamed milk, and a thick velvety foam.',
        price: '$4.50',
        image: './images/cappuccino.jpg',
        type:'coffee'
      },
      {
        name: 'Mocha',
        description: 'Rich chocolate and espresso, blended with steamed milk and a dollop of whipped cream. A decadent treat.',
        price: '$5.00',
        image: './images/mocha.jpg',
        type:'coffee'
      },
      {
        name: 'Macchiato',
        description: 'An espresso "stained" with a dash of steamed milk foam. Bold and balanced.',
        price: '$4.00',
        image: './images/macchiato.jpg',
        type:'coffee'
      },
      {
        name: 'Flat White',
        description: 'A strong, smooth espresso drink with micro-foamed milk for a velvety texture.',
        price: '$4.75',
        image: './images/flat-white.jpg',
        type:'coffee'
      },
      {
        name: 'Cold Brew',
        description: 'Our signature coffee, steeped for 24 hours to create a smooth, low-acidity, and naturally sweet drink.',
        price: '$4.50',
        image: './images/cold-brew.jpg',
        type:'coffee'
      },
      {
        name: 'Iced Coffee',
        description: 'Our house-brewed coffee, chilled and served over ice for a crisp, refreshing pick-me-up.',
        price: '$3.00',
        image: './images/iced-coffee.jpg',
        type:'coffee'
      },
      {
        name: 'Earl Grey Tea',
        description: 'A robust and flavorful brew, perfect for a cozy moment.',
        price: '$3.00',
        image: './images/earl-grey-tea.webp',
        type:'tea'
      },
      {
        name: 'Green Tea',
        description: 'A light and refreshing tea with a vibrant, earthy taste.',
        price: '$3.00',
        image: './images/green-tea.jpg',
        type:'tea'
      },
      {
        name: 'Chamomile Tea',
        description: 'A soothing, caffeine-free infusion of natural herbs and flavors',
        price: '$3.00',
        image: './images/chamomile-tea.jpg'
      },
      {
        name: 'Hot Chocolate',
        description: 'A rich, comforting blend of steamed milk and premium cocoa.',
        price: '$4.00',
        image: './images/hot-choco.jpg'
      },
      {
        name: 'Orange Juice',
        description: 'Freshly squeezed orange juice bursting with natural flavor.',
        price: '$5.00',
        image: './images/orange-juice.jpg'
      },
      {
        name: 'Apple Juice',
        description: 'Natural apple juice. A healthy and refreshing choice.',
        price: '$5.00',
        image: './images/apple-juice.jpg'
      },
      {
        name: 'Mango Smoothie',
        description: 'A thick, fruity, and nutrient-packed of fresh mangoes.',
        price: '$6.00',
        image: './images/mango-smoothie.jpg'
      },
      {
        name: 'Mixed-Berry Smoothie',
        description: 'A delicious and energizing blend of fresh strawberries, blueberries and raspberries.',
        price: '$6.00',
        image: './images/mixed-berry-smoothie.jpg'
      },
      {
        name: 'Sparkling Water',
        description: 'Crisp and bubbly, a perfect refresher.',
        price: '$2.50',
        image: './images/sparkling-water.jpg'
      }
    ]
  },
  {
    title: 'food',
    items: [
      {
        name: 'Croissant',
        description: 'A classic French pastry with a light, flaky, and buttery texture.',
        price: '$3.50',
        glutenFreePrice: '$4.00',
        image: './images/croissant.jpg'
      },
      {
        name: 'Chocolate Muffin',
        description: 'Soft, moist, and loaded with rich chocolate chips.',
        price: '$3.75',
        image: './images/chocolate-muffins.jpg'
      },
      {
        name: 'Blueberry Muffin',
        description: 'Soft, moist, and loaded with fresh juicy blueberries',
        price: '$3.75',
        image: './images/blueberry-muffins.jpg'
      },
      {
        name: 'Chocolate Chip Cookies',
        description: 'Chewy and warm, with generous chunks of rich chocolate.',
        price: '$3.00',
        image: './images/chocolate-chip-cookies.jpg'
      },
      {
        name: 'Brownies',
        description: 'A rich, fudgy, and decadent chocolate treat.',
        price: '$4.00',
        glutenFreePrice: '$4.50',
        image: './images/brownie.jpg'
      },
      {
        name: 'Cinnamon Rolls',
        description: 'A soft, fluffy pastry swirled with sweet cinnamon and topped with a creamy glaze.',
        price: '$4.50',
        image: './images/cinnamon-roll.jpg'
      },
      {
        name: 'Bagels',
        description: 'A New York classic-chewy on the inside, with a perfect crust.',
        price: '$2.50',
        image: './images/bagels.jpg'
      },
      {
        name: 'Avocado Toast',
        description: 'Toasted artisan bread topped with fresh, mashed avocado, and a sprinkle of spices.',
        price: '$6.50',
        glutenFreePrice: '$7.00',
        image: './images/avocado-toast.jpg'
      },
      {
        name: 'Yogurt Parfait',
        description: 'Layers of creamy yogurt, crunchy granola, and fresh berries for a light and healthy treat.',
        price: '$5.00',
        glutenFreePrice: '$5.50',
        image: './images/yogurt-parfait.jpg'
      },
      {
        name: 'Breakfast Sandwich',
        description: 'Your choice of egg and meat on fresh toasted bread.',
        price: '$6.00',
        glutenFreePrice: '$7.00',
        image: './images/breakfast-sandwich.jpg'
      },
      {
        name: 'Turkey Sandwich',
        description: 'Sliced turkey on toasted bread with fresh veggies.',
        price: '$9.00',
        image: './images/turkey-sandwich.jpg'
      },
      {
        name: 'Caprese Sandwich',
        description: 'Fresh mozarella, ripe tomatoes, and basil, drizzled with balsamic glaze.',
        price: '$8.50',
        image: './images/caprese-sandwich.jpg'
      },
      {
        name: 'Chicken Caesar Salad',
        description: 'Crisp romaine lettuce tossed in a creamy Caesar dressing with grilled chicken.',
        price: '$10.00',
        image: './images/chicken-caesar-salad.jpg'
      },
      {
        name: 'Greek Salad',
        description: 'Fresh lettuce, tomatoes, cucumbers, and olives with feta cheese and a zesty dressing.',
        price: '$9.50',
        image: './images/greek-salad.jpg'
      },
    ]
  }
]