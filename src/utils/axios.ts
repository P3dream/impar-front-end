import axios from "axios";

const api = axios.create({
  baseURL:
    "http://localhost:5088/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE3MTMxMDgzMTYsImV4cCI6MTcxMzE5NDcxNiwiaWF0IjoxNzEzMTA4MzE2fQ.YM8DJiTmmR6ut9nGHd7C3G6WmqOKzU2LtvrayZse9XU",
  },
});

export default api;
