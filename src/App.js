// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import NotFoundPage from './pages/NotFoundPage'; // New page for handling 404 errors
import Header from './components/Header'; // New component for header
import Footer from './components/Footer'; // New component for footer
import './styles/App.css'; // Import global styles
import './styles/index.css'; // Import additional global styles

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Include Header component */}
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="*" element={<NotFoundPage />} /> {/* Catch-all route for 404 errors */}
            {/* Add other routes here */}
          </Routes>
        </main>
        <Footer /> {/* Include Footer component */}
      </div>
    </Router>
  );
};

export default App;
