import axios from 'axios';

const api = axios.create({
  headers: {
    'Authorization': `bearer ${localStorage.getItem('token')}`,
  },
});

export default api;