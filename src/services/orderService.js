import axiosConfig from "../api/axiosConfig";

export const getUserOrders = async (userId) => {
  const response = await axiosConfig.get(`/orders/user/${userId}`);
  return response.data;
};