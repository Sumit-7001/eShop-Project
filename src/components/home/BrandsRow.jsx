import React from 'react';
import BrandCard from '../common/BrandCard';
import { brands } from '../../data/dummyData';
import '../../styles/BrandsRow.css';

const BrandsRow = () => {
  return (
    <section className="brands-section">
      <div className="container">
        <div className="brands-header">
          <h2>Top Brands</h2>
          <button className="see-all-btn">See All</button>
        </div>
        <div className="brands-scroll no-scrollbar">
          {brands.map(brand => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsRow;
