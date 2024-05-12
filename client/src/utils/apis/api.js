import axios from 'axios';
import { COOKIE_NAME,MAX_AGE } from '@/app/constants';
import { serialize } from 'cookie';


const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001', 
});

export const createUser = async (postData) => {
    try {
      const response = await axiosInstance.post('/auth/register', postData);
      return response
    } catch (error) {
      console.error('Error posting data:', error);
      throw error; 
    }
  };


  export const loginUser = async (postData) => {
    try {
      const response = await axiosInstance.post('/auth/login', postData);
      // console.log(response.data.token);
      
      return response.data
    } catch (error) {
      console.error('Error posting data:', error);
      throw error; 
    }
  };
