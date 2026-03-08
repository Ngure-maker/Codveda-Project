import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="hero card">
      <h1>TaskFlow</h1>
      <p>
        TaskFlow is a full-stack task manager that helps you organize, track, and complete your work with secure
        account-based access.
      </p>
      <div className="form-actions">
        <Link className="cta-btn" to="/register">
          Get Started
        </Link>
        <Link className="cta-btn secondary-link" to="/about">
          Learn More
        </Link>
      </div>
    </section>
  );
}
