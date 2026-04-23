import React, { useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/home/HeroSection';
import CategoriesRow from './components/home/CategoriesRow';
import BrandsRow from './components/home/BrandsRow';
import PromoBanner from './components/home/PromoBanner';
import BannerVR from './components/home/BannerVR';
import AppDownload from './components/home/AppDownload';
import SectionTitle from './components/common/SectionTitle';
import ProductCard from './components/common/ProductCard';
import Blogs from './components/blogs/Blogs';
import { smartphones, watches, furniture, kids } from './data/dummyData';
import './App.css';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const path = window.location.pathname;

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="App">
      <Header cartCount={cartCount} />
      
      <main>
        {path === '/blogs' ? (
          <Blogs />
        ) : (
          <>
            <HeroSection onAddToCart={addToCart} />
        
        <CategoriesRow />
        
        <BrandsRow />

        {/* Promo Banner */}
        <PromoBanner />

        {/* Smartphones Section */}
        <section className="products-grid-section">
          <div className="container">
            <SectionTitle title="Smartphones & Basic Mobiles" />
            <div className="products-grid">
              {smartphones.map(product => (
                <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
              ))}
            </div>
          </div>
        </section>

        {/* VR Banner */}
        <BannerVR onAddToCart={addToCart} />

        {/* Watches Section */}
        <section className="products-grid-section">
          <div className="container">
            <SectionTitle title="Top Rated Watches" />
            <div className="products-grid">
              {watches.map(product => (
                <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
              ))}
            </div>
          </div>
        </section>

        {/* Furniture Section */}
        <section className="products-grid-section">
          <div className="container">
            <SectionTitle title="Top Rated Furniture Products" />
            <div className="products-grid">
              {furniture.map(product => (
                <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
              ))}
            </div>
          </div>
        </section>

        {/* Kids Section */}
        <section className="products-grid-section kids-bg">
          <div className="container">
            <SectionTitle title="Kid's Section" />
            <div className="products-grid">
              {kids.map(product => (
                <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
              ))}
            </div>
          </div>
        </section>

        <AppDownload />
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
