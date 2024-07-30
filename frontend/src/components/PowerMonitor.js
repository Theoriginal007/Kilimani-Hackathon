import React, { useState, useEffect } from 'react';
import { getData } from '../services/apiService';

const PowerMonitor = () => {
  const [powerStatus, setPowerStatus] = useState('Loading...');

  useEffect(() => {
    const fetchPowerStatus = async () => {
      try {
        const data = await getData('/power-status');
        setPowerStatus(data.status);
      } catch (error) {
        setPowerStatus('Error fetching power status');
      }
    };

    fetchPowerStatus();
  }, []);

  return (
    <div>
      <h2>Power Monitor</h2>
      <p>Power status: {powerStatus}</p>
    </div>
  );
};

export default PowerMonitor;
