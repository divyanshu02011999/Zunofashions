import React from 'react';
import './BestSellers.css';

const bestSellers = [
  { name: "Classic Black Tee", image: "/Zunofashions/assets/bestseller1.jpg", price: "₹499" },
  { name: "Gold Accent Tee", image: "/Zunofashions/assets/bestseller2.jpg", price: "₹599" },
  { name: "Oversized Graphic Tee", image: "/Zunofashions/assets/bestseller3.jpg", price: "₹699" },
];

const BestSellers = () => (
  <section className="best-sellers">
    <h2>Best Sellers</h2>
    <div className="bestseller-list">
      {bestSellers.map((item) => (
        <div className="bestseller-card" key={item.name}>
          <img src={item.image} alt={item.name} className="bestseller-image" />
          <div className="bestseller-info">
            <div className="bestseller-title">{item.name}</div>
            <div className="bestseller-price">{item.price}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default BestSellers;
