import axiosConfig from "../api/axiosConfig";

export const getAllProducts = async () => {
  const response = await axiosConfig.get("/products");
  return response.data;
};

export const getProductById = async (id) => {
  const response = await axiosConfig.get(`/products/${id}`);
  return response.data;
};