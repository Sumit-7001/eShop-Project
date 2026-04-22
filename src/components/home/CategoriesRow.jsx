import React from 'react';
import CategoryCard from '../common/CategoryCard';
import { categories } from '../../data/dummyData';
import '../../styles/CategoriesRow.css';

const CategoriesRow = () => {
  return (
    <section className="categories-section">
      <div className="container">
        <div className="categories-header">
          <h2>Popular Categories</h2>
          <button className="see-all-btn">See All</button>
        </div>
        <div className="categories-scroll no-scrollbar">
          {categories.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesRow;
