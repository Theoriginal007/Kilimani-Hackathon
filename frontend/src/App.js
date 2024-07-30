import React from 'react';
import MapView from './components/MapView';
import PublicParticipation from './components/PublicParticipation';

function App() {
  const mockData = [
    { lat: 51.505, lng: -0.09, description: 'Test Marker' }
  ];

  return (
    <div>
      <h1>KiliSmart Application</h1>
      <PublicParticipation />
      <MapView data={mockData} />
    </div>
  );
}

export default App;
