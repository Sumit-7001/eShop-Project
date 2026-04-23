import React from 'react';
import { blogsData } from '../../data/blogsData';
import './Blogs.css';

const Blogs = () => {
  return (
    <div className="blogs-page">
      {/* Breadcrumb Area */}
      <div className="breadcrumb">
        <div className="container breadcrumb-content">
          <a href="/">Home</a>
          <span className="breadcrumb-separator">&gt;</span>
          <span>Blogs</span>
        </div>
      </div>

      <div className="blogs-container">
        {/* Filters Area */}
        <div className="blogs-filters">
          <select className="filter-select" defaultValue="">
            <option value="" disabled>Select Category</option>
            <option value="fashion">Fashion</option>
            <option value="sports">Sports</option>
            <option value="food">Food</option>
            <option value="tech">Technology</option>
          </select>
          
          <input 
            type="text" 
            className="filter-input" 
            placeholder="Search Blog" 
          />
          
          <div className="filter-show">
            <span>Show:</span>
            <select className="filter-select" defaultValue="12">
              <option value="6">6</option>
              <option value="12">12</option>
              <option value="16">16</option>
              <option value="20">20</option>
              <option value="24">24</option>
            </select>
          </div>
        </div>

        {/* Blogs Grid */}
        <div className="blogs-grid">
          {blogsData.map((blog) => (
            <div className="blog-card" key={blog.id}>
              <div className="blog-image-wrapper">
                <img src={blog.image} alt={blog.title} className="blog-image" />
              </div>
              <div className="blog-content">
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-description">{blog.description}</p>
                <div className="blog-footer">
                  <span className="blog-footer-icon"></span>
                  <span>{blog.date}</span>
                </div>
                <div>
                  <a href={`/blogs/view_detail/${blog.id}`} className="blog-read-more">Read More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
