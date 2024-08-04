// src/App.test.js

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import NotFoundPage from './pages/NotFoundPage';

test('renders HomePage component and its content', () => {
  render(
    <Router>
      <App />
    </Router>
  );

  // Check if "Welcome to KILISMART" text is present on the HomePage
  const homePageText = screen.getByText(/Welcome to KILISMART/i);
  expect(homePageText).toBeInTheDocument();
});

test('renders DashboardPage component when navigating to /dashboard', async () => {
  render(
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );

  // Navigate to /dashboard route
  window.history.pushState({}, 'Dashboard Page', '/dashboard');

  // Wait for DashboardPage to be rendered
  await waitFor(() => {
    expect(screen.getByText(/Overview of city metrics and data/i)).toBeInTheDocument();
  });
});

test('renders 404 page for unknown routes', async () => {
  render(
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );

  // Navigate to an unknown route
  window.history.pushState({}, '404 Page', '/unknown-route');

  // Wait for NotFoundPage to be rendered
  await waitFor(() => {
    expect(screen.getByText(/404 Not Found/i)).toBeInTheDocument();
  });
});

test('checks navigation links in Header', async () => {
  render(
    <Router>
      <App />
    </Router>
  );

  // Check if Home and Dashboard links are present
  const homeLink = screen.getByText(/Home/i);
  const dashboardLink = screen.getByText(/Dashboard/i);

  expect(homeLink).toBeInTheDocument();
  expect(dashboardLink).toBeInTheDocument();

  // Simulate navigation to Dashboard page
  homeLink.click();

  await waitFor(() => {
    expect(screen.getByText(/Welcome to KILISMART/i)).toBeInTheDocument();
  });
  
  dashboardLink.click();

  await waitFor(() => {
    expect(screen.getByText(/Overview of city metrics and data/i)).toBeInTheDocument();
  });
});
