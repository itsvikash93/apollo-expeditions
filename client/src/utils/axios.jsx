import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:3000",
  baseURL: "https://apollo-expeditions.onrender.com",
});

export default instance;
