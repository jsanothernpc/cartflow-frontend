import axiosConfig from "../api/axiosConfig";

export const registerUser = async (userData) => {
  const response = await axiosConfig.post("/user/register", userData);
  return response.data;
};

export const loginUser = async (userData) => {
  const response = await axiosConfig.post("/user/login", userData);
  return response.data;
};