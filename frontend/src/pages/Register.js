import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../services/api';

export default function Register() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    try {
      await api.post('/register', formData);
      setSuccess('Registration successful. Redirecting to login...');
      setTimeout(() => navigate('/login'), 1200);
    } catch (err) {
      const detail = err.response?.data;
      if (typeof detail === 'object') {
        const firstError = Object.values(detail)[0];
        setError(Array.isArray(firstError) ? firstError[0] : 'Registration failed.');
      } else {
        setError('Registration failed.');
      }
    }
  };

  return (
    <section className="card auth-card">
      <h2>Register</h2>
      <p className="muted">Create your space and start planning with clarity.</p>
      <form onSubmit={handleSubmit} className="auth-form">
        <label>
          Username
          <input
            type="text"
            value={formData.username}
            onChange={(e) => setFormData((prev) => ({ ...prev, username: e.target.value }))}
            required
          />
        </label>
        <label>
          Email
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={formData.password}
            onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
            minLength="8"
            required
          />
        </label>
        {error ? <span className="error">{error}</span> : null}
        {success ? <span className="success">{success}</span> : null}
        <button type="submit">Create my account</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </section>
  );
}
