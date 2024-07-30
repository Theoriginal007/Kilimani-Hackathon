const BASE_URL = 'http://example.com/api'; // Replace with your actual API base URL

export const getData = async (endpoint) => {
  const response = await fetch(`${BASE_URL}${endpoint}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};
