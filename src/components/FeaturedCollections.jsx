import React from 'react';
import './FeaturedCollections.css';

const collections = [
  { name: "Men's T-shirts", image: "/Zunofashions/assets/mens.jpg" },
  { name: "Women's T-shirts", image: "/Zunofashions/assets/womens.jpg" },
  { name: "Oversized", image: "/Zunofashions/assets/oversized.jpg" },
  { name: "Graphic", image: "/Zunofashions/assets/graphic.jpg" },
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
