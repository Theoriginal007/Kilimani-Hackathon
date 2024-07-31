// src/components/PublicParticipation.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

// PublicParticipation component definition
const PublicParticipation = () => {
  // State variables
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Items per page for pagination

  // Fetch data from the API
  useEffect(() => {
    axios.get('/api/public-participation')
      .then(response => {
        setData(response.data);
        setFilteredData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching public participation data');
        setLoading(false);
      });
  }, []);

  // Handle search term change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter data based on search term
  useEffect(() => {
    if (searchTerm === '') {
      setFilteredData(data);
    } else {
      const filtered = data.filter(item =>
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [searchTerm, data]);

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
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = paginate(filteredData, currentPage, itemsPerPage);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Public Participation</h2>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ marginBottom: '20px', padding: '10px', width: '100%', maxWidth: '600px' }}
      />

      {/* List of items */}
      <ul>
        {paginatedData.length > 0 ? (
          paginatedData.map((item, index) => (
            <li key={index}>{item.description}</li>
          ))
        ) : (
          <li>No results found</li>
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

export default PublicParticipation;
