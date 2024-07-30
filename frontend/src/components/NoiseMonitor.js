import React, { useState, useEffect } from 'react';
import { getData } from '../services/apiService';

const NoiseMonitor = () => {
  const [noiseLevel, setNoiseLevel] = useState('Loading...');

  useEffect(() => {
    const fetchNoiseLevel = async () => {
      try {
        const data = await getData('/noise-level');
        setNoiseLevel(data.level);
      } catch (error) {
        setNoiseLevel('Error fetching noise level');
      }
    };

    fetchNoiseLevel();
  }, []);

  return (
    <div>
      <h2>Noise Monitor</h2>
      <p>Noise level: {noiseLevel}</p>
    </div>
  );
};

export default NoiseMonitor;
