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

// New product images (generated)
import friedriceJollofImg from '@/assets/products/friedrice-jollof.jpg';
import whitericeSpagImg from '@/assets/products/whiterice-spag.jpg';
import friedriceSpagImg from '@/assets/products/friedrice-spag.jpg';
import spaghettiImg from '@/assets/products/spaghetti.jpg';
import ebaBitterleafImg from '@/assets/products/eba-bitterleaf.jpg';
import semoEfoImg from '@/assets/products/semo-efo.jpg';
import ebaPlainImg from '@/assets/products/eba.jpg';
import semovitaImg from '@/assets/products/semovita.jpg';
import poundedYamImg from '@/assets/products/pounded-yam.jpg';
import boiledYamImg from '@/assets/products/boiled-yam.jpg';
import soupSmallImg from '@/assets/products/soup-small.jpg';
import soupLargeImg from '@/assets/products/soup-large.jpg';
import extraSwallowImg from '@/assets/products/extra-swallow.jpg';
import ofadaSauceImg from '@/assets/products/ofada-sauce.jpg';
import beansPorridgeImg from '@/assets/products/beans-porridge.jpg';
import ewaAgoyinImg from '@/assets/products/ewa-agoyin.jpg';
import papImg from '@/assets/products/pap.jpg';
import indomieImg from '@/assets/products/indomie.jpg';
import indomieHotdogImg from '@/assets/products/indomie-hotdog.jpg';
import friedFishImg from '@/assets/products/fried-fish.jpg';

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

  // ========== NEW MENU ADDITIONS — Nigerian Dishes ==========
  { id: 'ng-101', name: 'Jollof Rice (Plain)', description: 'Smoky party-style jollof rice (plain portion, no protein)', price: 1400, image: jollofRiceImg, category: 'nigerian-dishes', inStock: true },
  { id: 'ng-102', name: 'Fried Rice (Plain)', description: 'Nigerian fried rice with vegetables (plain portion)', price: 1400, image: friedRiceImg, category: 'nigerian-dishes', inStock: true },
  { id: 'ng-103', name: 'White Rice (Plain)', description: 'Fluffy white rice (plain portion)', price: 900, image: whiteRiceImg, category: 'nigerian-dishes', inStock: true },
  { id: 'ng-104', name: 'Jollof Rice (Half)', description: 'Half portion of party-style jollof rice', price: 500, image: jollofRiceImg, category: 'nigerian-dishes', inStock: true },
  { id: 'ng-105', name: 'Fried Rice (Half)', description: 'Half portion of Nigerian fried rice', price: 500, image: friedRiceImg, category: 'nigerian-dishes', inStock: true },
  { id: 'ng-106', name: 'White Rice (Half)', description: 'Half portion of fluffy white rice', price: 500, image: whiteRiceImg, category: 'nigerian-dishes', inStock: true },
  { id: 'ng-107', name: 'Friedrice & Jollof Combo', description: 'Half jollof and half fried rice on one plate', price: 1400, image: friedriceJollofImg, category: 'nigerian-dishes', inStock: true },
  { id: 'ng-108', name: 'Jollof Rice & Spaghetti', description: 'Jollof rice combined with Nigerian jollof spaghetti', price: 900, image: jollofSpaghettiImg, category: 'nigerian-dishes', inStock: true },
  { id: 'ng-109', name: 'White Rice & Spaghetti', description: 'White rice combined with spaghetti and stew', price: 900, image: whitericeSpagImg, category: 'nigerian-dishes', inStock: true },
  { id: 'ng-110', name: 'Fried Rice & Spaghetti', description: 'Fried rice combined with jollof spaghetti', price: 1400, image: friedriceSpagImg, category: 'nigerian-dishes', inStock: true },
  { id: 'ng-111', name: 'Spaghetti', description: 'Nigerian style spaghetti in rich tomato sauce', price: 1400, image: spaghettiImg, category: 'nigerian-dishes', inStock: true },
  { id: 'ng-112', name: 'Spaghetti (Half)', description: 'Half portion of Nigerian spaghetti', price: 500, image: spaghettiImg, category: 'nigerian-dishes', inStock: true },
  { id: 'ng-113', name: 'Eba & Bitterleaf Soup', description: 'Garri swallow served with rich bitterleaf soup', price: 900, image: ebaBitterleafImg, category: 'nigerian-dishes', inStock: true },
  { id: 'ng-114', name: 'Eba & Efo Riro', description: 'Garri swallow with vegetable efo riro soup', price: 900, image: ebaEforitoImg, category: 'nigerian-dishes', inStock: true },
  { id: 'ng-115', name: 'Eba & Egusi Soup', description: 'Garri swallow with melon seed egusi soup', price: 900, image: ebaEgusiImg, category: 'nigerian-dishes', inStock: true },
  { id: 'ng-116', name: 'Semo & Efo Riro', description: 'Semolina swallow with vegetable efo riro soup', price: 900, image: semoEfoImg, category: 'nigerian-dishes', inStock: true },
  { id: 'ng-117', name: 'Semo & Egusi', description: 'Semolina swallow with rich egusi soup', price: 900, image: semoEgusiImg, category: 'nigerian-dishes', inStock: true },
  { id: 'ng-118', name: 'Eba', description: 'Plain garri swallow', price: 500, image: ebaPlainImg, category: 'nigerian-dishes', inStock: true },
  { id: 'ng-119', name: 'Semovita', description: 'Plain semovita swallow', price: 300, image: semovitaImg, category: 'nigerian-dishes', inStock: true },
  { id: 'ng-120', name: 'Pounded Yam', description: 'Smooth pounded yam swallow', price: 600, image: poundedYamImg, category: 'nigerian-dishes', inStock: true },
  { id: 'ng-121', name: 'Boiled Yam', description: 'Tender boiled yam slices', price: 500, image: boiledYamImg, category: 'nigerian-dishes', inStock: true },
  { id: 'ng-122', name: 'Soup (Small Bowl)', description: 'Small bowl of Nigerian soup', price: 500, image: soupSmallImg, category: 'nigerian-dishes', inStock: true },
  { id: 'ng-123', name: 'Soup (Large Bowl)', description: 'Large bowl of Nigerian soup', price: 1000, image: soupLargeImg, category: 'nigerian-dishes', inStock: true },
  { id: 'ng-124', name: 'Extra Swallow', description: 'Additional portion of swallow', price: 500, image: extraSwallowImg, category: 'nigerian-dishes', inStock: true },
  { id: 'ng-125', name: 'Extra Ofada Rice', description: 'Additional portion of ofada rice', price: 1000, image: ofadaRiceImg, category: 'nigerian-dishes', inStock: true },
  { id: 'ng-126', name: 'Ofada Sauce', description: 'Spicy ofada pepper sauce', price: 1500, image: ofadaSauceImg, category: 'nigerian-dishes', inStock: true },
  { id: 'ng-127', name: 'Beans Porridge', description: 'Soft Nigerian beans porridge with palm oil', price: 1400, image: beansPorridgeImg, category: 'nigerian-dishes', inStock: true },
  { id: 'ng-128', name: 'Ewa Agoyin', description: 'Mashed beans with peppery stew', price: 500, image: ewaAgoyinImg, category: 'nigerian-dishes', inStock: true },
  { id: 'ng-129', name: 'Pap (Akamu)', description: 'Smooth corn pap', price: 500, image: papImg, category: 'nigerian-dishes', inStock: true },
  { id: 'ng-130', name: 'Indomie Noodles', description: 'Tasty Nigerian-style indomie noodles', price: 2000, image: indomieImg, category: 'nigerian-dishes', inStock: true },
  { id: 'ng-131', name: 'Indomie with Hotdog', description: 'Indomie noodles topped with hotdog sausage', price: 2500, image: indomieHotdogImg, category: 'nigerian-dishes', inStock: true },

  // ========== NEW MENU ADDITIONS — Proteins / Sides ==========
  { id: 'pr-101', name: 'Fried Fish', description: 'Crispy seasoned fried fish', price: 1500, image: friedFishImg, category: 'proteins', inStock: true },
  { id: 'pr-102', name: 'Fish Head', description: 'Tasty fried fish head', price: 800, image: friedFishImg, category: 'proteins', inStock: true },
  { id: 'pr-103', name: 'Round Fish', description: 'Whole round fried fish', price: 700, image: friedFishImg, category: 'proteins', inStock: true },
  { id: 'pr-104', name: 'Fish Tail', description: 'Fried fish tail piece', price: 2000, image: friedFishImg, category: 'proteins', inStock: true },
  { id: 'pr-105', name: 'Turkey', description: 'Smoked or grilled turkey piece', price: 3000, image: 'https://images.unsplash.com/photo-1574672280600-4accfa5b6f98?w=600&h=600&fit=crop', category: 'proteins', inStock: true },
  { id: 'pr-106', name: 'Turkey (Small)', description: 'Smaller piece of grilled turkey', price: 2000, image: 'https://images.unsplash.com/photo-1574672280600-4accfa5b6f98?w=600&h=600&fit=crop', category: 'proteins', inStock: true },
  { id: 'pr-107', name: 'Grilled Chicken (Small)', description: 'Small piece of grilled chicken', price: 500, image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=400&fit=crop', category: 'proteins', inStock: true },
  { id: 'pr-108', name: 'Grilled Chicken (Medium)', description: 'Medium piece of grilled chicken', price: 1000, image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=400&fit=crop', category: 'proteins', inStock: true },
  { id: 'pr-109', name: 'Grilled Chicken (Large)', description: 'Large piece of grilled chicken', price: 1500, image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=400&fit=crop', category: 'proteins', inStock: true },
  { id: 'pr-110', name: 'Grilled Chicken (Extra Large)', description: 'Extra large grilled chicken portion', price: 2000, image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=400&fit=crop', category: 'proteins', inStock: true },
  { id: 'pr-111', name: 'Sausage', description: 'Grilled sausage piece', price: 700, image: sausageRollImg, category: 'proteins', inStock: true },
  { id: 'pr-112', name: 'Hotdog', description: 'Grilled hotdog sausage', price: 700, image: sausageRollImg, category: 'proteins', inStock: true },
  { id: 'pr-113', name: 'Ponmo', description: 'Cooked cow skin in spicy sauce', price: 500, image: beefImg, category: 'proteins', inStock: true },
  { id: 'pr-114', name: 'Big Meat', description: 'Extra large beef piece', price: 1000, image: beefImg, category: 'proteins', inStock: true },
  { id: 'pr-115', name: 'Small Meat', description: 'Small beef piece', price: 300, image: beefImg, category: 'proteins', inStock: true },
  { id: 'pr-116', name: 'Fried Egg', description: 'Sunny side up fried egg', price: 500, image: boiledEggImg, category: 'proteins', inStock: true },
  { id: 'pr-117', name: 'Moi Moi', description: 'Steamed bean pudding', price: 700, image: beansPorridgeImg, category: 'proteins', inStock: true },
  { id: 'pr-118', name: 'Fried Plantain (Dodo)', description: 'Sweet fried plantain slices', price: 500, image: 'https://images.unsplash.com/photo-1599050751790-d4ec03402d18?w=600&h=600&fit=crop', category: 'proteins', inStock: true },
  { id: 'pr-119', name: 'Beans', description: 'Cooked Nigerian honey beans', price: 500, image: beansPorridgeImg, category: 'proteins', inStock: true },
  { id: 'pr-120', name: 'Salad', description: 'Fresh garden salad', price: 500, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop', category: 'proteins', inStock: true },

  // ========== NEW MENU ADDITIONS — Snacks / Pastries ==========
  { id: 'sn-101', name: 'Donut', description: 'Soft glazed donut', price: 500, image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&h=600&fit=crop', category: 'snacks', inStock: true },
  { id: 'sn-102', name: 'Jam Donut', description: 'Donut filled with sweet jam', price: 600, image: 'https://images.unsplash.com/photo-1559620192-032c4bc4674e?w=600&h=600&fit=crop', category: 'snacks', inStock: true },
  { id: 'sn-103', name: 'Metro Roll', description: 'Signature Metro Munch pastry roll', price: 700, image: frankRollsImg, category: 'snacks', inStock: true },
  { id: 'sn-104', name: 'Chin Chin (Small)', description: 'Crunchy Nigerian chin chin snack', price: 200, image: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=600&h=600&fit=crop', category: 'snacks', inStock: true },
  { id: 'sn-105', name: 'Chin Chin (Large)', description: 'Large pack of crunchy chin chin', price: 600, image: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=600&h=600&fit=crop', category: 'snacks', inStock: true },
  { id: 'sn-106', name: 'Puff Puff', description: 'Soft fluffy Nigerian puff puff', price: 200, image: 'https://images.unsplash.com/photo-1604152135912-04a022e23696?w=600&h=600&fit=crop', category: 'snacks', inStock: true },
  { id: 'sn-107', name: 'Fish Roll', description: 'Pastry filled with seasoned fish', price: 600, image: frankRollsImg, category: 'snacks', inStock: true },
  { id: 'sn-108', name: 'Small Chops', description: 'Assorted Nigerian party finger foods', price: 1500, image: 'https://images.unsplash.com/photo-1625938145744-533e82dc8d4d?w=600&h=600&fit=crop', category: 'snacks', inStock: true },
  { id: 'sn-109', name: 'Cheese Steak', description: 'Beef and cheese sandwich', price: 3000, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop', category: 'snacks', inStock: true },
  { id: 'sn-110', name: 'Tightnut Pastry', description: 'Premium nut pastry treat', price: 2700, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=600&fit=crop', category: 'snacks', inStock: true },
  { id: 'sn-111', name: 'Parfait (Small)', description: 'Layered yogurt and fruit parfait', price: 2000, image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=400&fit=crop', category: 'snacks', inStock: true },
  { id: 'sn-112', name: 'Parfait (Big)', description: 'Large yogurt and fruit parfait', price: 3700, image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=400&fit=crop', category: 'snacks', inStock: true },
  { id: 'sn-113', name: 'Small Cake', description: 'Single serving cake slice', price: 500, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop', category: 'snacks', inStock: true },
  { id: 'sn-114', name: 'Big Cake', description: 'Whole small cake', price: 2000, image: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=400&h=400&fit=crop', category: 'snacks', inStock: true },
  { id: 'sn-115', name: 'Small Plantain Chips', description: 'Crunchy plantain chips (small pack)', price: 500, image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=600&h=600&fit=crop', category: 'snacks', inStock: true },
  { id: 'sn-116', name: 'Big Plantain Chips', description: 'Crunchy plantain chips (large pack)', price: 2000, image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=600&h=600&fit=crop', category: 'snacks', inStock: true },
  { id: 'sn-117', name: 'Small Potato Chips', description: 'Crispy potato chips (small)', price: 500, image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=600&h=600&fit=crop', category: 'snacks', inStock: true },
  { id: 'sn-118', name: 'Big Potato Chips', description: 'Crispy potato chips (large)', price: 1500, image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=600&h=600&fit=crop', category: 'snacks', inStock: true },

  // ========== NEW MENU ADDITIONS — Beverages / Hot Drinks ==========
  { id: 'bv-101', name: 'Pepsi', description: 'Classic Pepsi soft drink (50cl)', price: 500, image: cocaColaImg, category: 'beverages', inStock: true },
  { id: 'bv-102', name: 'Schweppes', description: 'Schweppes tonic soft drink', price: 500, image: cocaColaImg, category: 'beverages', inStock: true },
  { id: 'bv-103', name: 'American Cola', description: 'Refreshing American-style cola', price: 500, image: cocaColaImg, category: 'beverages', inStock: true },
  { id: 'bv-104', name: 'Predator Energy', description: 'Predator energy drink', price: 700, image: fearlessImg, category: 'beverages', inStock: true },
  { id: 'bv-105', name: 'Pulpy Juice', description: 'Pulpy orange juice with real pulp', price: 800, image: chiActiveImg, category: 'beverages', inStock: true },
  { id: 'bv-106', name: 'Pulpy Juice (Big)', description: 'Large bottle of Pulpy juice', price: 1500, image: chiActiveImg, category: 'beverages', inStock: true },
  { id: 'bv-107', name: 'Sosa Juice', description: 'Sosa fruit juice drink', price: 600, image: chiExoticImg, category: 'beverages', inStock: true },
  { id: 'bv-108', name: 'Zobo Drink', description: 'Refreshing hibiscus zobo drink', price: 850, image: 'https://images.unsplash.com/photo-1546171753-97d7676e4602?w=400&h=400&fit=crop', category: 'beverages', inStock: true },
  { id: 'bv-109', name: 'Fresh Fruit Juice', description: 'Freshly blended fruit juice', price: 2700, image: chiExoticImg, category: 'beverages', inStock: true },
  { id: 'bv-110', name: 'Fresh Orange Juice', description: 'Freshly squeezed orange juice', price: 2800, image: chiActiveImg, category: 'beverages', inStock: true },
  { id: 'bv-111', name: 'Smoothie', description: 'Fresh blended fruit smoothie', price: 2700, image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&h=400&fit=crop', category: 'beverages', inStock: true },
  { id: 'bv-112', name: 'Chivita Exotic (Big)', description: 'Large pack of Chivita Exotic juice', price: 2500, image: chiExoticImg, category: 'beverages', inStock: true },
  { id: 'bv-113', name: 'Guinness (Big)', description: 'Large bottle of Guinness stout', price: 1500, image: guinnessImg, category: 'beverages', inStock: true },
  { id: 'bv-114', name: 'Smirnoff Ice', description: 'Smirnoff Ice flavored vodka drink', price: 1500, image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=400&h=400&fit=crop', category: 'beverages', inStock: true },
  { id: 'bv-115', name: 'Smirnoff Bullet', description: 'Smirnoff Ice Bullet (small premix)', price: 1500, image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=400&h=400&fit=crop', category: 'beverages', inStock: true },
  { id: 'bv-116', name: 'Hollandia Milk', description: 'Hollandia evaporated milk drink', price: 500, image: maltaGuinnessImg, category: 'beverages', inStock: true },
  { id: 'bv-117', name: 'Nescafe', description: 'Hot Nescafe coffee', price: 1000, image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop', category: 'beverages', inStock: true },
  { id: 'bv-118', name: 'Black Coffee', description: 'Hot black coffee', price: 1000, image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop', category: 'beverages', inStock: true },
  { id: 'bv-119', name: 'Hot Chocolate', description: 'Rich hot chocolate drink', price: 1000, image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=400&h=400&fit=crop', category: 'beverages', inStock: true },
];
