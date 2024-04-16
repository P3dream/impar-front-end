import axios from "axios";

const api = axios.create({
  baseURL:
    "http://localhost:5088/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE3MTMyMjE3OTUsImV4cCI6MTcxMzMwODE5NSwiaWF0IjoxNzEzMjIxNzk1fQ.2dwDrOfjDUiND_hVnFVBKFWbr1vypcLL3CFtz5Drb4c",
  },
});

export default api;
