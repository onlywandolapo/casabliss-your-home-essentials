export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  inStock: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  image: string;
}

export const categories: Category[] = [
  {
    id: 'spices',
    name: 'Spices',
    description: 'Premium spices & seasonings',
    icon: '🌿',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop',
  },
  {
    id: 'teas',
    name: 'Teas',
    description: 'Fine teas from around the world',
    icon: '🍵',
    image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400&h=300&fit=crop',
  },
  {
    id: 'canned-drinks',
    name: 'Canned Drinks',
    description: 'Refreshing canned beverages',
    icon: '🥤',
    image: 'https://images.unsplash.com/photo-1527960471264-932f39eb5846?w=400&h=300&fit=crop',
  },
  {
    id: 'juices',
    name: 'Juices',
    description: 'Fresh & natural juices',
    icon: '🧃',
    image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=300&fit=crop',
  },
  {
    id: 'pantry',
    name: 'Pantry Essentials',
    description: 'Everyday kitchen staples',
    icon: '🏠',
    image: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=400&h=300&fit=crop',
  },
  {
    id: 'snacks',
    name: 'Snacks',
    description: 'Delicious treats & snacks',
    icon: '🍪',
    image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=400&h=300&fit=crop',
  },
];

export const products: Product[] = [
  // Spices
  {
    id: 'sp-001',
    name: 'Premium Curry Powder',
    description: 'Aromatic blend of authentic curry spices',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=300&h=300&fit=crop',
    category: 'spices',
    inStock: true,
  },
  {
    id: 'sp-002',
    name: 'Dried Thyme',
    description: 'Mediterranean dried thyme leaves',
    price: 5.49,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=300&fit=crop',
    category: 'spices',
    inStock: true,
  },
  {
    id: 'sp-003',
    name: 'Bay Leaves',
    description: 'Whole dried bay leaves for soups & stews',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1599909533681-74084561e6de?w=300&h=300&fit=crop',
    category: 'spices',
    inStock: true,
  },
  {
    id: 'sp-004',
    name: 'Seasoning Cubes',
    description: 'All-purpose flavor enhancer cubes',
    price: 3.99,
    image: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=300&h=300&fit=crop',
    category: 'spices',
    inStock: true,
  },
  {
    id: 'sp-005',
    name: 'Sea Salt',
    description: 'Pure natural sea salt crystals',
    price: 6.99,
    image: 'https://images.unsplash.com/photo-1518110925495-5fe2c8f2be87?w=300&h=300&fit=crop',
    category: 'spices',
    inStock: true,
  },
  {
    id: 'sp-006',
    name: 'Ground Paprika',
    description: 'Sweet Hungarian paprika',
    price: 7.49,
    image: 'https://images.unsplash.com/photo-1599909533681-74084561e6de?w=300&h=300&fit=crop',
    category: 'spices',
    inStock: true,
  },
  {
    id: 'sp-007',
    name: 'Ground Cumin',
    description: 'Earthy aromatic cumin powder',
    price: 6.49,
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=300&h=300&fit=crop',
    category: 'spices',
    inStock: true,
  },
  {
    id: 'sp-008',
    name: 'Turmeric Powder',
    description: 'Golden turmeric with high curcumin',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=300&h=300&fit=crop',
    category: 'spices',
    inStock: true,
  },

  // Teas
  {
    id: 'tea-001',
    name: 'Organic Green Tea',
    description: 'Premium Japanese sencha green tea',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=300&h=300&fit=crop',
    category: 'teas',
    inStock: true,
  },
  {
    id: 'tea-002',
    name: 'Earl Grey Classic',
    description: 'Bergamot-infused black tea',
    price: 10.99,
    image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=300&h=300&fit=crop',
    category: 'teas',
    inStock: true,
  },
  {
    id: 'tea-003',
    name: 'Chamomile Bliss',
    description: 'Soothing caffeine-free chamomile',
    price: 9.49,
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=300&h=300&fit=crop',
    category: 'teas',
    inStock: true,
  },
  {
    id: 'tea-004',
    name: 'Matcha Powder',
    description: 'Ceremonial grade matcha',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=300&h=300&fit=crop',
    category: 'teas',
    inStock: true,
  },
  {
    id: 'tea-005',
    name: 'Jasmine Pearl Tea',
    description: 'Hand-rolled jasmine green tea pearls',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300&h=300&fit=crop',
    category: 'teas',
    inStock: true,
  },
  {
    id: 'tea-006',
    name: 'Oolong Tea',
    description: 'Traditional Taiwanese oolong',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?w=300&h=300&fit=crop',
    category: 'teas',
    inStock: true,
  },

  // Canned Drinks
  {
    id: 'cd-001',
    name: 'Sparkling Water 6-Pack',
    description: 'Refreshing natural sparkling water',
    price: 7.99,
    image: 'https://images.unsplash.com/photo-1527960471264-932f39eb5846?w=300&h=300&fit=crop',
    category: 'canned-drinks',
    inStock: true,
  },
  {
    id: 'cd-002',
    name: 'Cola Classic',
    description: 'Classic cola with real sugar',
    price: 5.99,
    image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=300&h=300&fit=crop',
    category: 'canned-drinks',
    inStock: true,
  },
  {
    id: 'cd-003',
    name: 'Ginger Ale',
    description: 'Zesty ginger ale with real ginger',
    price: 6.49,
    image: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=300&h=300&fit=crop',
    category: 'canned-drinks',
    inStock: true,
  },
  {
    id: 'cd-004',
    name: 'Energy Drink 4-Pack',
    description: 'Natural energy boost',
    price: 11.99,
    image: 'https://images.unsplash.com/photo-1622543925917-763c34d1a86e?w=300&h=300&fit=crop',
    category: 'canned-drinks',
    inStock: true,
  },

  // Juices
  {
    id: 'jc-001',
    name: 'Orange Juice 1L',
    description: 'Freshly squeezed orange juice',
    price: 6.99,
    image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=300&h=300&fit=crop',
    category: 'juices',
    inStock: true,
  },
  {
    id: 'jc-002',
    name: 'Apple Juice',
    description: 'Pure pressed apple juice',
    price: 5.99,
    image: 'https://images.unsplash.com/photo-1576673442511-7e39b6545c87?w=300&h=300&fit=crop',
    category: 'juices',
    inStock: true,
  },
  {
    id: 'jc-003',
    name: 'Mango Nectar',
    description: 'Tropical mango nectar',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?w=300&h=300&fit=crop',
    category: 'juices',
    inStock: true,
  },
  {
    id: 'jc-004',
    name: 'Cranberry Juice',
    description: 'Pure cranberry juice blend',
    price: 7.49,
    image: 'https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=300&h=300&fit=crop',
    category: 'juices',
    inStock: true,
  },

  // Pantry
  {
    id: 'pt-001',
    name: 'Olive Oil Extra Virgin',
    description: 'Cold-pressed Italian olive oil',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300&h=300&fit=crop',
    category: 'pantry',
    inStock: true,
  },
  {
    id: 'pt-002',
    name: 'Basmati Rice 2kg',
    description: 'Premium aged basmati rice',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=300&fit=crop',
    category: 'pantry',
    inStock: true,
  },
  {
    id: 'pt-003',
    name: 'Canned Tomatoes',
    description: 'Italian San Marzano tomatoes',
    price: 3.99,
    image: 'https://images.unsplash.com/photo-1558818498-28c1e002b655?w=300&h=300&fit=crop',
    category: 'pantry',
    inStock: true,
  },
  {
    id: 'pt-004',
    name: 'Pasta Penne 500g',
    description: 'Bronze-cut Italian penne',
    price: 4.49,
    image: 'https://images.unsplash.com/photo-1551462147-ff29053bfc14?w=300&h=300&fit=crop',
    category: 'pantry',
    inStock: true,
  },

  // Snacks
  {
    id: 'sn-001',
    name: 'Mixed Nuts 400g',
    description: 'Premium roasted mixed nuts',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=300&h=300&fit=crop',
    category: 'snacks',
    inStock: true,
  },
  {
    id: 'sn-002',
    name: 'Dark Chocolate Bar',
    description: '70% cacao artisan chocolate',
    price: 5.99,
    image: 'https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=300&h=300&fit=crop',
    category: 'snacks',
    inStock: true,
  },
  {
    id: 'sn-003',
    name: 'Rice Crackers',
    description: 'Crispy Japanese rice crackers',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300&h=300&fit=crop',
    category: 'snacks',
    inStock: true,
  },
];
