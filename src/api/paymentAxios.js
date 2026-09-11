import axios from "axios";

const paymentAxios = axios.create({
  baseURL: "/payment-api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default paymentAxios;