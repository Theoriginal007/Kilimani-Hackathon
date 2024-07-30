import React, { useState, useEffect } from 'react';
import { getData } from '../services/apiService';

const WasteMonitor = () => {
  const [wasteData, setWasteData] = useState('Loading...');

  useEffect(() => {
    const fetchWasteData = async () => {
      try {
        const data = await getData('/waste-data');
        setWasteData(data.status);
      } catch (error) {
        setWasteData('Error fetching waste data');
      }
    };

    fetchWasteData();
  }, []);

  return (
    <div>
      <h2>Waste Monitor</h2>
      <p>Waste status: {wasteData}</p>
    </div>
  );
};

export default WasteMonitor;
