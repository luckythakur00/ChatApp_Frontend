import axios from 'axios';

export const axiosInstance = axios.create({
    // baseURL: import.meta.env.MODE === "development" ? "http://localhost:3000/api" : "/api",
    baseURL: import.meta.env.MODE === "development" ? "http://localhost:3000/api" : "https://chatappbackend-production-cd45.up.railway.app/api",
    withCredentials: true,
})