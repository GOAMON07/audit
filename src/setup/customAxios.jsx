// customAxios.js
import axios from 'axios';


const token = localStorage.getItem("token");
const API_URL = process.env.REACT_APP_API_DEV_URL ?? "api";


// Create a custom Axios instance
const customAxios = axios.create({
  
  baseURL: API_URL, // Your API base URL
  timeout: 5000, // Request timeout in milliseconds
  headers: {
    'Content-Type': 'application/json', // Default content type
    Authorization: `Bearer ${token}`, // Default authorization header
  },
});

// Add request interceptor for custom headers, error handling, etc.
customAxios.interceptors.request.use(
  config => {
    // You can modify the request config here
    // For example, add headers or authentication tokens
    // config.headers['X-Custom-Header'] = 'custom-header-value';
    return config;
  },
  error => {
    // Handle request errors here
    return Promise.reject(error);
  }
);

// Add response interceptor for custom response handling
customAxios.interceptors.response.use(
  response => {
    // You can handle successful responses here
    // For example, transform response data
    // response.data = modifyData(response.data);
    return response;
  },
  error => {
    // Handle response errors here
    return Promise.reject(error);
  }
);

export default customAxios;
