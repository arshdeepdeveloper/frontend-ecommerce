 
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://dummyjson.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add interceptors here if needed (auth, logging, etc.)

export const apiRequest = async ({ method = 'get', url, data = {}, params = {} }) => {
  try {
    const response = await apiClient({
      method,
      url,
      data,
      params,
    });
    return response.data;
  } catch (error) {
    console.error('API error:', error);
    throw error;
  }
};
