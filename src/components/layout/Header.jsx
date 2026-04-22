import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';
import '../../styles/Header.css';

const Header = ({ cartCount }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header">
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-bar-left">
            <span>English <ChevronDown size={14} /></span>
            <span>USD <ChevronDown size={14} /></span>
          </div>
          <div className="top-bar-right">
            <span>Sign In / Sign Up</span>
          </div>
        </div>
      </div>

      <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
        <div className="container navbar-content">
          <div className="logo">
            <span className="logo-icon">e</span>
            <span className="logo-text">Shop</span>
          </div>

          <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <li><a href="/" className="active">Home</a></li>
            <li><a href="/sellers">Sellers</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/faqs">FAQs</a></li>
            <li><a href="/blogs">Blogs</a></li>
          </ul>

          <div className="nav-actions">
            <button className="nav-icon-btn"><Search size={20} /></button>
            <button className="nav-icon-btn cart-btn">
              <ShoppingCart size={20} />
              <span className="cart-count" key={cartCount}>{cartCount}</span>
            </button>
            <button 
              className="menu-toggle" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
