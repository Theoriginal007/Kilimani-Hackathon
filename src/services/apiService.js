// src/services/apiService.js

import axios from 'axios';

// Base URL for API requests. Update this to match your API endpoint.
const API_BASE_URL = '/api'; // Example base URL, adjust as necessary

/**
 * Create an instance of axios with predefined configuration
 */
const apiService = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // Timeout in milliseconds for API requests
  headers: {
    'Content-Type': 'application/json', // Default content type for requests
  },
});

/**
 * Add request and response interceptors
 */
apiService.interceptors.request.use(
  (config) => {
    // Add Authorization token if available
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

apiService.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle response errors
    const formattedError = handleError(error);
    return Promise.reject(formattedError);
  }
);

/**
 * Handles errors from API calls
 * 
 * @param {Object} error - Error object from axios
 * @returns {Object} - Returns a formatted error response
 */
const handleError = (error) => {
  // Log the error for debugging purposes
  console.error('API call error:', error);

  // Format the error response
  return {
    status: error.response?.status || 500,
    message: error.response?.data?.message || 'An unexpected error occurred',
  };
};

/**
 * Makes a GET request to fetch public participation data
 * 
 * @returns {Promise} - Promise resolving to the response data
 */
export const getPublicParticipation = async () => {
  try {
    const response = await apiService.get('/public-participation');
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

/**
 * Makes a GET request to fetch waste monitor data
 * 
 * @returns {Promise} - Promise resolving to the response data
 */
export const getWasteMonitorData = async () => {
  try {
    const response = await apiService.get('/waste-monitor');
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

/**
 * Makes a GET request to fetch power monitor data
 * 
 * @returns {Promise} - Promise resolving to the response data
 */
export const getPowerMonitorData = async () => {
  try {
    const response = await apiService.get('/power-monitor');
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

/**
 * Makes a GET request to fetch noise monitor data
 * 
 * @returns {Promise} - Promise resolving to the response data
 */
export const getNoiseMonitorData = async () => {
  try {
    const response = await apiService.get('/noise-monitor');
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

/**
 * Makes a GET request to fetch water monitor data
 * 
 * @returns {Promise} - Promise resolving to the response data
 */
export const getWaterMonitorData = async () => {
  try {
    const response = await apiService.get('/water-monitor');
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

export default apiService;
