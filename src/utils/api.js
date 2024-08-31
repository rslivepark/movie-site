import axios from 'axios';

// const API_KEY = process.env.REACT_APP_API_KEY;

const API_KEY = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNmQxZmNiNWIwNTc2Yzk4ZDZiN2ZlZWQ5NjZmZGZkNCIsIm5iZiI6MTcyNTA3NTE2MC40NTM5NzMsInN1YiI6IjY2M2FjZDMyZGNkNGFlNDc4Y2Q3NjU2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.e0SgANLblrYEHNOsyuk8QEh0g4-RgqV2DcAj7Pau2gs`;

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
});

axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 응답 인터셉터 추가하기
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default api;
