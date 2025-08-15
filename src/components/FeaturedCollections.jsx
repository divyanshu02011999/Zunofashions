import React from 'react';
import './FeaturedCollections.css';

const collections = [
  { name: "Men's T-shirts", image: "/assets/mens.jpg" },
  { name: "Women's T-shirts", image: "/assets/womens.jpg" },
  { name: "Oversized", image: "/assets/oversized.jpg" },
  { name: "Graphic", image: "/assets/graphic.jpg" },
];

const FeaturedCollections = () => (
  <section className="featured-collections">
    <h2>Featured Collections</h2>
    <div className="collections-list">
      {collections.map((col) => (
        <div className="collection-card" key={col.name}>
          <img src={col.image} alt={col.name} className="collection-image" />
          <div className="collection-title">{col.name}</div>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturedCollections;
