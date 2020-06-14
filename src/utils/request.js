import Axios from 'axios';

const requestService = Axios.create({
  timeout: 5000 // 超时时间
});

requestService.interceptors.request.use(
  config => {
    console.log(config);
    config.headers['x-token'] = 'dafjafjjij';

    return config;
  },
  err => {
    console.log(err);

    return Promise.reject(err);
  }
);

requestService.interceptors.response.use(
  res => {
    console.log(res);

    return res;
  },
  err => {
    console.log(err);

    return Promise.reject(err);
  }
);

export default requestService;
