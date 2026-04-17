import Hero from '@/components/home/Hero';
import MealCarousel from '@/components/home/MealCarousel';
import CategoryShowcase from '@/components/home/CategoryShowcase';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import Features from '@/components/home/Features';

const Index = () => {
  return (
    <main className="page-transition">
      <Hero />
      <MealCarousel />
      <CategoryShowcase />
      <FeaturedProducts />
      <Features />
    </main>
  );
};

export default Index;
