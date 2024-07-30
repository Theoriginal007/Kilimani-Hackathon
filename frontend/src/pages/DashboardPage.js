import React from 'react';
import MapView from '../components/MapView';
import PublicParticipation from '../components/PublicParticipation';
import WasteMonitor from '../components/WasteMonitor';
import PowerMonitor from '../components/PowerMonitor';
import NoiseMonitor from '../components/NoiseMonitor';
import WaterMonitor from '../components/WaterMonitor';

const DashboardPage = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <MapView />
      <PublicParticipation />
      <WasteMonitor />
      <PowerMonitor />
      <NoiseMonitor />
      <WaterMonitor />
    </div>
  );
};

export default DashboardPage;
