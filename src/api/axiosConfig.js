import axios from "axios";

const axiosConfig = axios.create({
  baseURL: "https://cartflow-backend-hr70.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosConfig;