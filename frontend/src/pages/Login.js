import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../services/api';

export default function Login() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    try {
      const response = await api.post('/login', credentials);
      localStorage.setItem('accessToken', response.data.access);
      localStorage.setItem('refreshToken', response.data.refresh);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.detail || 'Invalid credentials.');
    }
  };

  return (
    <section className="card auth-card">
      <h2>Login</h2>
      <p className="muted">Welcome back. Pick up where you left off.</p>
      <form onSubmit={handleSubmit} className="auth-form">
        <label>
          Username
          <input
            type="text"
            value={credentials.username}
            onChange={(e) => setCredentials((prev) => ({ ...prev, username: e.target.value }))}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={credentials.password}
            onChange={(e) => setCredentials((prev) => ({ ...prev, password: e.target.value }))}
            required
          />
        </label>
        {error ? <span className="error">{error}</span> : null}
        <button type="submit">Continue</button>
      </form>
      <p>
        Need an account? <Link to="/register">Register</Link>
      </p>
    </section>
  );
}
