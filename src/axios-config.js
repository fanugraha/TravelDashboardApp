import axios from "axios";


const axiosConfig = axios.create({
    baseURL : 'https://travel-journal-api-bootcamp.do.dibimbing.id/',
    headers : {
        common : {
            'apiKey' : '24405e01-fbc1-45a5-9f5a-be13afcd757c'
        }
    }
});

const getToken = () => {
    return localStorage.getItem('token');
  };

axiosConfig.interceptors.request.use((config) => {
    const token = getToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
});

export { axiosConfig };