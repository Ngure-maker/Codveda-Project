import React from 'react';

export default function About() {
  return (
    <section className="card info-page">
      <h2>About TaskFlow</h2>
      <p>
        TaskFlow is built with Django REST Framework and React. Users can register, authenticate via JWT, and manage
        personal tasks through a secure API.
      </p>
      <p>
        The dashboard supports creating, editing, deleting, and completing tasks. Data is user-scoped and stored in
        PostgreSQL.
      </p>
    </section>
  );
}
