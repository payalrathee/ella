import axios from 'axios';

const token = localStorage.getItem('token');

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    'Authorization': token ? `Bearer ${token}` : '', 
  }
});

export default axiosInstance;
