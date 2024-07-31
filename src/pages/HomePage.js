// src/pages/HomePage.js

import React from 'react';
import PublicParticipation from '../components/PublicParticipation';
import MapView from '../components/MapView';
import WasteMonitor from '../components/WasteMonitor';
import PowerMonitor from '../components/PowerMonitor';
import NoiseMonitor from '../components/NoiseMonitor';
import WaterMonitor from '../components/WaterMonitor';

/**
 * HomePage Component
 * 
 * The HomePage component serves as the main landing page for the KILISMART application. It provides
 * a comprehensive view of various city management systems through different monitoring components.
 * 
 * This page includes:
 * - A welcome header
 * - A map view displaying city locations
 * - Sections for public participation, waste monitoring, power monitoring, noise monitoring, and water monitoring
 */
const HomePage = () => {
  // Example location for the map; replace with your desired coordinates.
  const mapLocation = { lat: 37.7749, lng: -122.4194 }; // San Francisco coordinates

  // Example markers data for the map
  const markersData = [
    { position: { lat: 37.7799, lng: -122.4294 }, title: 'Marker 1', name: 'Location 1' },
    { position: { lat: 37.7699, lng: -122.4894 }, title: 'Marker 2', name: 'Location 2' },
    // Add more markers as needed
  ];

  return (
    <div>
      {/* Header Section */}
      <header style={headerStyle}>
        <h1>Welcome to KILISMART</h1>
        <p>Your smart city management system</p>
        <p>Explore various aspects of city management through our interactive dashboard.</p>
      </header>
      
      {/* Map View Section */}
      <section style={sectionStyle}>
        <h2>Map View</h2>
        <p>View the geographic locations relevant to city management on the interactive map.</p>
        <MapView location={mapLocation} markersData={markersData} />
      </section>
      
      {/* Public Participation Section */}
      <section style={sectionStyle}>
        <h2>Public Participation</h2>
        <p>See how the public is engaging with various initiatives and provide feedback.</p>
        <PublicParticipation />
      </section>
      
      {/* Waste Monitor Section */}
      <section style={sectionStyle}>
        <h2>Waste Monitor</h2>
        <p>Track the status of waste management across different areas of the city.</p>
        <WasteMonitor />
      </section>
      
      {/* Power Monitor Section */}
      <section style={sectionStyle}>
        <h2>Power Monitor</h2>
        <p>Monitor the power usage and efficiency in different parts of the city.</p>
        <PowerMonitor />
      </section>
      
      {/* Noise Monitor Section */}
      <section style={sectionStyle}>
        <h2>Noise Monitor</h2>
        <p>Observe noise levels and manage noise pollution effectively.</p>
        <NoiseMonitor />
      </section>
      
      {/* Water Monitor Section */}
      <section style={sectionStyle}>
        <h2>Water Monitor</h2>
        <p>Keep track of water quality and usage to ensure sustainable management.</p>
        <WaterMonitor />
      </section>
    </div>
  );
};

// Optional: Add styles to enhance the appearance of the page
const headerStyle = {
  backgroundColor: '#f4f4f4',
  padding: '20px',
  textAlign: 'center',
};

const sectionStyle = {
  margin: '20px 0',
  padding: '10px',
  border: '1px solid #ddd',
  borderRadius: '5px',
};

export default HomePage;
