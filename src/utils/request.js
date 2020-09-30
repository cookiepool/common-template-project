import axios from 'axios';

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_URL // api 的 VUE_APP_URL
});

// request拦截器,在请求之前做一些处理
service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// response 拦截器,数据返回后进行一些处理
service.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
    return error;
  }
);

export default service;
