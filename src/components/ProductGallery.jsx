import React from 'react';
import './ProductGallery.css';

// Example product data structure. Replace image URLs and details with actual data.
const products = [
  {
    name: 'ZUNO Classic Black Tee',
    price: '₹499',
    image: 'https://lunyx-prints.blinkstore.in/assets/images/products/black-tee.jpg', // Replace with actual URL
  },
  {
    name: 'Gold Accent Tee',
    price: '₹599',
    image: 'https://lunyx-prints.blinkstore.in/assets/images/products/gold-accent.jpg', // Replace with actual URL
  },
  {
    name: 'Oversized Graphic Tee',
    price: '₹699',
    image: 'https://lunyx-prints.blinkstore.in/assets/images/products/oversized-graphic.jpg', // Replace with actual URL
  },
  // Add more products as needed
];

const ProductGallery = () => (
  <section className="product-gallery">
    <h2>Shop All T-Shirts</h2>
    <div className="gallery-list">
      {products.map((product) => (
        <div className="gallery-card" key={product.name}>
          <img src={product.image} alt={product.name} className="gallery-image" />
          <div className="gallery-info">
            <div className="gallery-title">{product.name}</div>
            <div className="gallery-price">{product.price}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ProductGallery;
