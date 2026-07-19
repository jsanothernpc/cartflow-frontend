import axiosConfig from "../api/axiosConfig";

export const addToCart = async (userId, productId, quantity) => {
  const response = await axiosConfig.post(
    `/cart/add?userId=${userId}&productId=${productId}&quantity=${quantity}`
  );

  return response.data;
};

export const getCart = async (userId) => {
  const response = await axiosConfig.get(`/cart/${userId}`);
  return response.data;
};

export const removeFromCart = async (cartItemId) => {
  return await axiosConfig.delete(`/cart/remove/${cartItemId}`);
};

export const clearCart = async (userId) => {
  return await axiosConfig.delete(`/cart/clear/${userId}`);
};