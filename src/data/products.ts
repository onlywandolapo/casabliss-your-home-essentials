// Import product images
import jollofRiceImg from '@/assets/products/jollof-rice.jpg';
import friedRiceImg from '@/assets/products/fried-rice.jpg';
import semoEgusiImg from '@/assets/products/semo-egusi.jpg';
import ebaEgusiImg from '@/assets/products/eba-egusi.jpg';
import ebaEforitoImg from '@/assets/products/eba-eforiro.jpg';
import amalaEweduImg from '@/assets/products/amala-ewedu.jpg';
import ofadaRiceImg from '@/assets/products/ofada-rice.jpg';
import jollofSpaghettiImg from '@/assets/products/jollof-spaghetti.jpg';
import yamPorridgeImg from '@/assets/products/yam-porridge.jpg';
import cocaColaImg from '@/assets/products/coca-cola.jpg';
import trophyImg from '@/assets/products/trophy.jpg';
import guinnessImg from '@/assets/products/guinness.jpg';
import goldbergImg from '@/assets/products/goldberg.jpg';
import fantaImg from '@/assets/products/fanta.jpg';
import spriteImg from '@/assets/products/sprite.jpg';
import sevenUpImg from '@/assets/products/7up.jpg';
import heinekenImg from '@/assets/products/heineken.jpg';
import chiActiveImg from '@/assets/products/chi-active.jpg';
import chiExoticImg from '@/assets/products/chi-exotic.jpg';
import fearlessImg from '@/assets/products/fearless.jpg';
import maltaGuinnessImg from '@/assets/products/malta-guinness.jpg';
import boiledEggImg from '@/assets/products/boiled-egg.jpg';
import beefImg from '@/assets/products/beef.jpg';
import meatPieImg from '@/assets/products/meat-pie.jpg';
import sausageRollImg from '@/assets/products/sausage-roll.jpg';
import chickenPieImg from '@/assets/products/chicken-pie.jpg';
import eggRollImg from '@/assets/products/egg-roll.jpg';
import frankRollsImg from '@/assets/products/frank-rolls.jpg';
import snacksCategoryImg from '@/assets/products/snacks-category.jpg';
import bottledWaterImg from '@/assets/products/bottled-water.jpg';
import whiteRiceImg from '@/assets/products/white-rice.jpg';
import nigerianDishesCatImg from '@/assets/categories/nigerian-dishes.jpg';
import snacksCatImg from '@/assets/categories/snacks.jpg';
import proteinsCatImg from '@/assets/categories/proteins.jpg';

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
  image: string;
}

export const categories: Category[] = [
  {
    id: 'nigerian-dishes',
    name: 'Nigerian Dishes',
    description: 'Authentic local favorites',
    image: nigerianDishesCatImg,
  },
  {
    id: 'proteins',
    name: 'Extra Proteins',
    description: 'Add more protein to your meal',
    image: proteinsCatImg,
  },
  {
    id: 'snacks',
    name: 'Snacks',
    description: 'Tasty quick bites',
    image: snacksCatImg,
  },
  {
    id: 'beverages',
    name: 'Beverages',
    description: 'Refreshing drinks',
    image: cocaColaImg,
  },
];

export const products: Product[] = [
  // ========== NIGERIAN DISHES ==========
  {
    id: 'ng-001',
    name: 'Jollof Rice & 2 Beef',
    description: 'Smoky party-style jollof rice served with 2 pieces of tasty beef',
    price: 1500,
    image: jollofRiceImg,
    category: 'nigerian-dishes',
    inStock: true,
  },
  {
    id: 'ng-002',
    name: 'Fried Rice & 2 Beef',
    description: 'Nigerian-style fried rice with vegetables and 2 pieces of beef',
    price: 1500,
    image: friedRiceImg,
    category: 'nigerian-dishes',
    inStock: true,
  },
  {
    id: 'ng-003',
    name: 'White Rice & Stew with 2 Beef',
    description: 'Fluffy white rice with rich tomato stew and 2 pieces of beef',
    price: 1500,
    image: whiteRiceImg,
    category: 'nigerian-dishes',
    inStock: true,
  },
  {
    id: 'ng-004',
    name: 'White Rice & Stew with 1 Egg',
    description: 'Fluffy white rice with rich tomato stew and 1 fried egg',
    price: 1500,
    image: whiteRiceImg,
    category: 'nigerian-dishes',
    inStock: true,
  },
  {
    id: 'ng-005',
    name: 'Jollof Spaghetti',
    description: 'Nigerian-style jollof spaghetti cooked in rich tomato sauce',
    price: 1500,
    image: jollofSpaghettiImg,
    category: 'nigerian-dishes',
    inStock: true,
  },
  {
    id: 'ng-006',
    name: 'Semo & Egusi Soup with 2 Beef',
    description: 'Smooth semolina swallow with rich melon seed soup and 2 beef',
    price: 1500,
    image: semoEgusiImg,
    category: 'nigerian-dishes',
    inStock: true,
  },
  {
    id: 'ng-007',
    name: 'Semo & Ewedu Soup with 2 Beef',
    description: 'Smooth semolina swallow with jute leaf soup and 2 beef',
    price: 1500,
    image: amalaEweduImg,
    category: 'nigerian-dishes',
    inStock: true,
  },
  {
    id: 'ng-009',
    name: 'Eba & Egusi Soup with 2 Beef',
    description: 'Garri swallow with rich melon seed soup and 2 beef',
    price: 1500,
    image: ebaEgusiImg,
    category: 'nigerian-dishes',
    inStock: true,
  },
  {
    id: 'ng-010',
    name: 'Eba & Ewedu Soup with 2 Beef',
    description: 'Garri swallow with jute leaf soup and 2 beef',
    price: 1500,
    image: amalaEweduImg,
    category: 'nigerian-dishes',
    inStock: true,
  },
  {
    id: 'ng-011',
    name: 'Eba & Eforiro Soup with 2 Beef',
    description: 'Garri swallow with vegetable soup and 2 beef',
    price: 1500,
    image: ebaEforitoImg,
    category: 'nigerian-dishes',
    inStock: true,
  },
  {
    id: 'ng-012',
    name: 'Ofada Rice & Sauce',
    description: 'Local unpolished rice with spicy ofada sauce',
    price: 2000,
    image: ofadaRiceImg,
    category: 'nigerian-dishes',
    inStock: true,
  },
  {
    id: 'ng-013',
    name: 'Porridge Yam',
    description: 'Soft yam porridge cooked with palm oil and vegetables',
    price: 1300,
    image: yamPorridgeImg,
    category: 'nigerian-dishes',
    inStock: true,
  },
  {
    id: 'ng-014',
    name: 'Amala & Ewedu with Gbegiri',
    description: 'Soft yam flour swallow with jute leaf and bean soup',
    price: 1500,
    image: amalaEweduImg,
    category: 'nigerian-dishes',
    inStock: true,
  },
  // ========== EXTRA PROTEINS ==========
  {
    id: 'pr-001',
    name: 'Extra Beef (1 piece)',
    description: 'Additional piece of seasoned beef',
    price: 200,
    image: beefImg,
    category: 'proteins',
    inStock: true,
  },
  {
    id: 'pr-002',
    name: 'Extra Chicken (1 piece)',
    description: 'Additional piece of grilled chicken',
    price: 500,
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=400&fit=crop',
    category: 'proteins',
    inStock: true,
  },
  {
    id: 'pr-003',
    name: 'Extra Fish (1 piece)',
    description: 'Additional piece of fried or grilled fish',
    price: 800,
    image: proteinsCatImg,
    category: 'proteins',
    inStock: true,
  },
  {
    id: 'pr-004',
    name: 'Extra Egg (1 piece)',
    description: 'Additional boiled egg',
    price: 300,
    image: boiledEggImg,
    category: 'proteins',
    inStock: true,
  },

  // ========== SNACKS ==========
  {
    id: 'sn-001',
    name: 'Meat Pie',
    description: 'Flaky pastry filled with seasoned minced meat and vegetables',
    price: 800,
    image: meatPieImg,
    category: 'snacks',
    inStock: true,
  },
  {
    id: 'sn-002',
    name: 'Sausage Roll',
    description: 'Golden pastry wrapped around savory sausage',
    price: 700,
    image: sausageRollImg,
    category: 'snacks',
    inStock: true,
  },
  {
    id: 'sn-003',
    name: 'Chicken Pie',
    description: 'Flaky pastry filled with seasoned chicken and vegetables',
    price: 800,
    image: chickenPieImg,
    category: 'snacks',
    inStock: true,
  },
  {
    id: 'sn-004',
    name: 'Egg Roll',
    description: 'Boiled egg wrapped in soft dough and fried golden',
    price: 500,
    image: eggRollImg,
    category: 'snacks',
    inStock: true,
  },
  {
    id: 'sn-005',
    name: 'Frank Rolls',
    description: 'Soft bread rolls filled with savory sausage',
    price: 750,
    image: frankRollsImg,
    category: 'snacks',
    inStock: true,
  },

  // ========== BEVERAGES ==========
  {
    id: 'bv-001',
    name: 'Coca-Cola',
    description: 'Classic Coca-Cola soft drink (50cl)',
    price: 500,
    image: cocaColaImg,
    category: 'beverages',
    inStock: true,
  },
  {
    id: 'bv-002',
    name: 'Fanta Orange',
    description: 'Refreshing orange flavored soft drink (50cl)',
    price: 500,
    image: fantaImg,
    category: 'beverages',
    inStock: true,
  },
  {
    id: 'bv-003',
    name: 'Sprite',
    description: 'Lemon-lime flavored soft drink (50cl)',
    price: 500,
    image: spriteImg,
    category: 'beverages',
    inStock: true,
  },
  {
    id: 'bv-004',
    name: '7UP',
    description: 'Crisp lemon-lime soft drink (50cl)',
    price: 500,
    image: sevenUpImg,
    category: 'beverages',
    inStock: true,
  },
  {
    id: 'bv-005',
    name: 'Trophy Lager',
    description: 'Premium Nigerian lager beer',
    price: 1000,
    image: trophyImg,
    category: 'beverages',
    inStock: true,
  },
  {
    id: 'bv-006',
    name: 'Guinness Stout',
    description: 'Rich and creamy foreign extra stout',
    price: 1200,
    image: guinnessImg,
    category: 'beverages',
    inStock: true,
  },
  {
    id: 'bv-007',
    name: 'Heineken',
    description: 'Premium imported lager beer',
    price: 1200,
    image: heinekenImg,
    category: 'beverages',
    inStock: true,
  },
  {
    id: 'bv-008',
    name: 'Goldberg Lager',
    description: 'Premium Nigerian lager with a smooth taste',
    price: 1200,
    image: goldbergImg,
    category: 'beverages',
    inStock: true,
  },
  {
    id: 'bv-009',
    name: 'Chi Active',
    description: 'Refreshing fruit juice drink',
    price: 800,
    image: chiActiveImg,
    category: 'beverages',
    inStock: true,
  },
  {
    id: 'bv-010',
    name: 'Chi Exotic',
    description: 'Exotic fruit juice blend',
    price: 800,
    image: chiExoticImg,
    category: 'beverages',
    inStock: true,
  },
  {
    id: 'bv-011',
    name: 'Fearless Energy Drink',
    description: 'Energy drink to keep you going',
    price: 400,
    image: fearlessImg,
    category: 'beverages',
    inStock: true,
  },
  {
    id: 'bv-012',
    name: 'Malta Guinness',
    description: 'Chilled malt beverage with vitamins',
    price: 700,
    image: maltaGuinnessImg,
    category: 'beverages',
    inStock: true,
  },
  {
    id: 'bv-014',
    name: 'Bottled Water',
    description: 'Premium bottled water (75cl)',
    price: 200,
    image: bottledWaterImg,
    category: 'beverages',
    inStock: true,
  },
];
