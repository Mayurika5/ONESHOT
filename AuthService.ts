import axios from 'axios';

const BASE_URL = 'http://localhost:3000'; // Replace with your backend URL

export const sendOTP = async (email: string) => {
  try {
    const response = await axios.post(`${BASE_URL}/send-otp`, { email });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const verifyOTP = async (email: string, otp: string) => {
  try {
    const response = await axios.post(`${BASE_URL}/verify-otp`, { email, otp });
    return response.data;
  } catch (error) {
    throw error;
  }
};