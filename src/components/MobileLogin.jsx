import React, { useState, useRef } from 'react';
import './MobileLogin.css';
import { auth } from '../firebaseConfig';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

const MobileLogin = () => {
  const [mobile, setMobile] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [enteredOtp, setEnteredOtp] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState(null);
  const recaptchaRef = useRef(null);

  const handleSendOtp = async (e) => {
    e.preventDefault();
    if (!window.recaptchaVerifier) {
      if (!auth) {
        alert('Firebase Auth is not initialized. Check your firebaseConfig.js.');
        return;
      }
      window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
        size: 'normal', // Make reCAPTCHA visible for debugging
        callback: (response) => {},
      }, auth);
    }
    try {
      const appVerifier = window.recaptchaVerifier;
      const result = await signInWithPhoneNumber(auth, '+91' + mobile, appVerifier);
      setConfirmationResult(result);
      setOtpSent(true);
      alert('OTP sent to ' + mobile);
    } catch (error) {
      alert('Error sending OTP: ' + error.message);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    if (!confirmationResult) return;
    try {
      await confirmationResult.confirm(enteredOtp);
      setLoginSuccess(true);
    } catch (error) {
      alert('Invalid OTP. Please try again.');
    }
  };

  return (
    <section className="mobile-login-section">
      <h2>Login by Mobile</h2>
      <div id="recaptcha-container" ref={recaptchaRef}></div>
      {!otpSent && !loginSuccess && (
        <form onSubmit={handleSendOtp} className="mobile-form">
          <input
            type="tel"
            placeholder="Enter mobile number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            pattern="[0-9]{10}"
            required
          />
          <button type="submit">Send OTP</button>
        </form>
      )}
      {otpSent && !loginSuccess && (
        <form onSubmit={handleVerifyOtp} className="otp-form">
          <input
            type="text"
            placeholder="Enter OTP"
            value={enteredOtp}
            onChange={(e) => setEnteredOtp(e.target.value)}
            maxLength={6}
            required
          />
          <button type="submit">Verify OTP</button>
        </form>
      )}
      {loginSuccess && <div className="login-success">Login successful! Welcome to ZUNO FASHION.</div>}
    </section>
  );
};

export default MobileLogin;
