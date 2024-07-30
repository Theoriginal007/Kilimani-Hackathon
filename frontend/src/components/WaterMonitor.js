import React, { useState, useEffect } from 'react';
import { getData } from '../services/apiService';

const WaterMonitor = () => {
  const [waterQuality, setWaterQuality] = useState('Loading...');

  useEffect(() => {
    const fetchWaterQuality = async () => {
      try {
        const data = await getData('/water-quality');
        setWaterQuality(data.quality);
      } catch (error) {
        setWaterQuality('Error fetching water quality');
      }
    };

    fetchWaterQuality();
  }, []);

  return (
    <div>
      <h2>Water Monitor</h2>
      <p>Water quality: {waterQuality}</p>
    </div>
  );
};

export default WaterMonitor;
