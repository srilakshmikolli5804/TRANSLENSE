import axios from 'axios';

const api = axios.create({
  baseURL: 'https://your-api-endpoint.com/api',
  timeout: 5000,
});

export const sendOTP = (email: string) => api.post('/send-otp', { email });
export const verifyOTP = (otp: string) => api.post('/verify-otp', { otp });
export const uploadImage = (file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  return api.post('/upload', formData);
};
