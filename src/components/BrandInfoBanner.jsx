import React from 'react';
import './BrandInfoBanner.css';

const BrandInfoBanner = () => (
  <section className="brand-info-banner">
    <div className="brand-details">
      <h2>ZUNO Fashions</h2>
      <p className="brand-tagline">Premium Quality T-Shirts | Unisex | Trendy | Comfortable</p>
      <ul className="brand-features">
        <li>👕 100% Cotton | Soft Fabric | Fade-Free Prints</li>
        <li>📦 All India Delivery within 4-7 working days</li>
        <li>🚚 COD Available</li>
        <li>🔄 <b>Return Policy:</b> Only damaged or wrong product eligible for return. Request within 2 days. No return on size issues—check size chart carefully.</li>
      </ul>
    </div>
  </section>
);

export default BrandInfoBanner;
