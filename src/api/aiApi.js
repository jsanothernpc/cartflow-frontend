import axios from "axios";

const API_URL = "/api/ai/chat/completions";

export const sendMessage = async (message) => {
  const response = await axios.post(API_URL, {
    message,
  });

  return response.data.reply;
};