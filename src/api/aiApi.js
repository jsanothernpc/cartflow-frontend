import axios from "axios";

const API_URL =
  "https://cartflow-backend-hr70.onrender.com/api/ai/chat/completions";

export const sendMessage = async (message) => {
  const response = await axios.post(API_URL, {
    message,
  });

  return response.data.reply;
};