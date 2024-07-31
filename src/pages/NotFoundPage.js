import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css'; // Import specific styles for NotFoundPage

const NotFoundPage = () => {
  return (
    <div className="not-found">
      <header className="not-found-header">
        <h1>404</h1>
        <h2>Page Not Found</h2>
      </header>
      <main className="not-found-content">
        <p>Oops! The page you're looking for does not exist.</p>
        <p>It might have been moved or deleted, or you may have typed the URL incorrectly.</p>
        <Link to="/" className="home-link">Go to Home Page</Link>
        <Link to="/dashboard" className="dashboard-link">Go to Dashboard</Link>
      </main>
      <footer className="not-found-footer">
        <p>&copy; {new Date().getFullYear()} KILISMART. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default NotFoundPage;
