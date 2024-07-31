// src/components/WasteMonitor.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend);

const WasteMonitor = () => {
  // State variables
  const [wasteData, setWasteData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Items per page for pagination

  // Fetch data from the API
  useEffect(() => {
    axios.get('/api/waste-monitor')
      .then(response => {
        setWasteData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching waste data');
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
  const totalPages = Math.ceil(wasteData.length / itemsPerPage);
  const paginatedData = paginate(wasteData, currentPage, itemsPerPage);

  // Prepare data for the chart
  const chartData = {
    labels: paginatedData.map(item => item.date), // Assuming items have a `date` field
    datasets: [
      {
        label: 'Waste Level',
        data: paginatedData.map(item => item.level), // Assuming items have a `level` field
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 1,
      },
    ],
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Waste Monitor</h2>

      {/* Chart display */}
      <div style={{ marginBottom: '20px' }}>
        <Line data={chartData} />
      </div>

      {/* List of items */}
      <ul>
        {paginatedData.length > 0 ? (
          paginatedData.map((item, index) => (
            <li key={index}>
              <strong>Date:</strong> {item.date} - <strong>Status:</strong> {item.status} - <strong>Level:</strong> {item.level}
            </li>
          ))
        ) : (
          <li>No waste data available</li>
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

export default WasteMonitor;
