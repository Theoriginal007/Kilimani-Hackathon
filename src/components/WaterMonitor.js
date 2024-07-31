// src/components/WaterMonitor.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend);

const WaterMonitor = () => {
  // State variables
  const [waterData, setWaterData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Items per page for pagination

  // Fetch data from the API
  useEffect(() => {
    axios.get('/api/water-monitor')
      .then(response => {
        setWaterData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching water data');
        setLoading(false);
      });
  }, []);

  // Paginate the data
  const paginate = (items, pageNumber, itemsPerPage) => {
    const startIndex = (pageNumber - 1) * itemsPerPage;
    return items.slice(startIndex, startIndex + itemsPerPage);
  };

  const handlePageChange = (event, pageNumber) => {
    event.preventDefault();
    setCurrentPage(pageNumber);
  };

  // Calculate total pages
  const totalPages = Math.ceil(waterData.length / itemsPerPage);
  const paginatedData = paginate(waterData, currentPage, itemsPerPage);

  // Prepare data for the chart
  const chartData = {
    labels: paginatedData.map(item => item.timestamp), // Assuming items have a `timestamp` field
    datasets: [
      {
        label: 'Water Quality',
        data: paginatedData.map(item => item.quality), // Assuming items have a `quality` field
        fill: false,
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        tension: 0.1,
      },
    ],
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.dataset.label}: ${context.raw}`;
          },
        },
      },
    },
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Water Monitor</h2>

      {/* Chart display */}
      <div style={{ marginBottom: '20px' }}>
        <Line data={chartData} options={chartOptions} />
      </div>

      {/* List of items */}
      <ul>
        {paginatedData.length > 0 ? (
          paginatedData.map((item, index) => (
            <li key={index}>
              <strong>Timestamp:</strong> {item.timestamp} - <strong>Quality:</strong> {item.quality}
            </li>
          ))
        ) : (
          <li>No water data available</li>
        )}
      </ul>

      {/* Pagination controls */}
      <div style={{ marginTop: '20px' }}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={(event) => handlePageChange(event, index + 1)}
            style={{
              margin: '0 5px',
              padding: '10px',
              backgroundColor: currentPage === index + 1 ? '#007bff' : '#f8f9fa',
              border: '1px solid #007bff',
              color: currentPage === index + 1 ? '#fff' : '#007bff',
              cursor: 'pointer'
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default WaterMonitor;
