import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
});

API.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const token = localStorage.getItem("token");
    config.headers.token = `Bearer ${token ? token : ""}`;
    config.headers["Access-Control-Allow-Origin"] = "*";
    config.headers["Content-Type"] = "multipart/form-data";
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export const fileUpload = (formData) => API.post("/files/upload", formData);
