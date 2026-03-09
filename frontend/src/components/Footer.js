import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            TaskFlow
          </Link>
          <p className="footer-tagline">Make a little plan. Keep a little promise. Repeat.</p>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <h4>Product</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/dashboard">Dashboard</Link>
          </div>
          <div className="footer-col">
            <h4>Support</h4>
            <Link to="/contact">Contact</Link>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              Community
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} TaskFlow. All rights reserved.</span>
      </div>
    </footer>
  );
}
