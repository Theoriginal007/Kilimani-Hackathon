// src/pages/DashboardPage.js

import React from 'react';
import PublicParticipation from '../components/PublicParticipation';
import WasteMonitor from '../components/WasteMonitor';
import PowerMonitor from '../components/PowerMonitor';
import NoiseMonitor from '../components/NoiseMonitor';
import WaterMonitor from '../components/WaterMonitor';

/**
 * DashboardPage Component
 * 
 * This component serves as the main dashboard page for the KILISMART application. It aggregates
 * different monitoring components that provide insights into various aspects of city management.
 * 
 * Each section of the dashboard focuses on a specific type of data, allowing users to easily
 * access and review key metrics and information.
 */
const DashboardPage = () => {
  return (
    <div>
      {/* Header Section */}
      <header style={headerStyle}>
        <h1>Dashboard</h1>
        <p>Overview of city metrics and data</p>
        {/* Optional additional details or instructions can be added here */}
      </header>
      
      {/* Public Participation Section */}
      <section style={sectionStyle}>
        <h2>Public Participation</h2>
        <p>Review public feedback and participation statistics to gauge community involvement.</p>
        <PublicParticipation />
      </section>
      
      {/* Waste Monitor Section */}
      <section style={sectionStyle}>
        <h2>Waste Monitor</h2>
        <p>Monitor waste management data to track waste collection and disposal efficiency.</p>
        <WasteMonitor />
      </section>
      
      {/* Power Monitor Section */}
      <section style={sectionStyle}>
        <h2>Power Monitor</h2>
        <p>Check power consumption and efficiency metrics across different areas.</p>
        <PowerMonitor />
      </section>
      
      {/* Noise Monitor Section */}
      <section style={sectionStyle}>
        <h2>Noise Monitor</h2>
        <p>View noise level data to manage and mitigate noise pollution.</p>
        <NoiseMonitor />
      </section>
      
      {/* Water Monitor Section */}
      <section style={sectionStyle}>
        <h2>Water Monitor</h2>
        <p>Track water quality and usage metrics to ensure sustainable water management.</p>
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

export default DashboardPage;
