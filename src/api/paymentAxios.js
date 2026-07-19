import axios from "axios";

const paymentAxios = axios.create({
  baseURL: "https://cartflow-payment.onrender.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default paymentAxios;