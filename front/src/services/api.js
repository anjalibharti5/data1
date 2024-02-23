// src/services/api.js

const BASE_URL = 'http://localhost:4000'; 

const api = {
  async fetchData(filters) {
    try {
      const response = await fetch(`${BASE_URL}/abendData`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(filters),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      return data.data.fetchedData;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Re-throw the error for handling in components
    }
  },
};

export default api;
