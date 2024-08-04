import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import header-specific styles

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">KILISMART</Link> {/* Brand or logo */}
        </div>
        <nav>
          <ul className="nav-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/about">About</Link></li> {/* Example additional link */}
            <li><Link to="/contact">Contact</Link></li> {/* Example additional link */}
            {/* Add more navigation links as needed */}
          </ul>
        </nav>
        <div className="user-menu">
          <button className="user-button">User</button> {/* Example user button */}
          <div className="dropdown-menu">
            <Link to="/profile">Profile</Link>
            <Link to="/settings">Settings</Link>
            <Link to="/logout">Logout</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
