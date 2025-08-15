import React, { useState } from 'react';
import './Checkout.css';

const paymentGateways = [
  { name: 'UPI', url: 'https://paytm.com/' },
  { name: 'Credit/Debit Card', url: 'https://razorpay.com/' },
  { name: 'Netbanking', url: 'https://payu.in/' },
  { name: 'Wallets', url: 'https://phonepe.com/' },
];

const Checkout = () => {
  const [address, setAddress] = useState('');
  const [showPayments, setShowPayments] = useState(false);
  const [codSelected, setCodSelected] = useState(false);

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    setShowPayments(true);
  };

  const handlePaymentClick = (url) => {
    window.location.href = url;
  };

  const handleCOD = () => {
    setCodSelected(true);
    alert('Order placed with Cash on Delivery!');
  };

  return (
    <section className="checkout-section">
      <h2>Checkout</h2>
      <form onSubmit={handleAddressSubmit} className="address-form">
        <input
          type="text"
          placeholder="Enter your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <button type="submit">Update</button>
      </form>
      {showPayments && !codSelected && (
        <div className="payment-options">
          <h3>Select Payment Method</h3>
          {paymentGateways.map((pg) => (
            <button key={pg.name} onClick={() => handlePaymentClick(pg.url)}>
              {pg.name}
            </button>
          ))}
          <button onClick={handleCOD} className="cod-btn">Cash on Delivery (COD)</button>
        </div>
      )}
      {codSelected && <div className="cod-confirm">Thank you! Your COD order is placed.</div>}
    </section>
  );
};

export default Checkout;
