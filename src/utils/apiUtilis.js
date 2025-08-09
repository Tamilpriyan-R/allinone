import axios from "axios";
import { getItemWithExpiry } from "../services/tokenExpries";



// Base URLs
export const API_URL = "http://soucientinsurancedevbk.athithishala.com/api/";
export const FILE_URL = "http://soucientinsurancedevbk.athithishala.com";

export const LOGIN_API_URL = "http://soucientidentitydevbk.athithishala.com/";
export const REFRESH_URL =
  "http://soucientinsurancedevbk.athithishala.com/users/v1/validate-token/";

// Create main axios instance
const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    // "Content-Type": "application/",
  },
});

// Request interceptor: Attach token to headers
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getItemWithExpiry("auth_token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor: Catch 401 and refresh token
axiosInstance.interceptors.response.use(
  (response) => response, // Just return response if OK
  async (error) => {
    const originalRequest = error.config;

    // Token expired & not already retried
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Get refresh token
        const refreshToken = JSON.parse(localStorage.getItem("refreshtoken"));

        if (!refreshToken) {
          throw new Error("No refresh token available");
        }

        // Validate token / get new access token
        const response = await axios.post(REFRESH_URL, {
          refresh: refreshToken,
        });

        const newAccessToken = response.data.access; // Adjust based on API response shape

        // Save new token to localStorage
        localStorage.setItem("token", JSON.stringify(newAccessToken));

        // Retry original request with new token
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        console.error("Token refresh failed:", refreshError);
        // Optionally logout or redirect to login
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
