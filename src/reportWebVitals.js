// src/reportWebVitals.js

/**
 * Function to report web vital metrics to an analytics endpoint or logging service.
 * Web Vitals are a set of performance metrics that measure the quality of user experience.
 * 
 * @param {function} onPerfEntry - Callback function to handle the performance metrics.
 * If this function is provided, it will be invoked with each metric.
 */
const reportWebVitals = (onPerfEntry) => {
  // Check if the callback function is provided and is a function
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    // Dynamically import the web-vitals library
    import('web-vitals').then(({ 
      getCLS,  // Cumulative Layout Shift
      getFID,  // First Input Delay
      getFCP,  // First Contentful Paint
      getLCP,  // Largest Contentful Paint
      getTTFB   // Time to First Byte
    }) => {
      // Collect and report each of the web vital metrics
      getCLS(onPerfEntry); // Reports Cumulative Layout Shift metric
      getFID(onPerfEntry); // Reports First Input Delay metric
      getFCP(onPerfEntry); // Reports First Contentful Paint metric
      getLCP(onPerfEntry); // Reports Largest Contentful Paint metric
      getTTFB(onPerfEntry); // Reports Time to First Byte metric
    }).catch(error => {
      // Handle errors that might occur during the dynamic import
      console.error('Error importing web-vitals:', error);
    });
  } else {
    // Provide feedback if the callback is not provided or is not a function
    console.warn('No valid callback function provided to reportWebVitals.');
  }
};

export default reportWebVitals;
