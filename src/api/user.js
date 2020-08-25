import request from '@/utils/request.js';

export function getUserInfo(token) {
  return request({
    url: '/v1/user/info',
    method: 'get',
    params: token
  });
}

export function login(data) {
  return request({
    url: '/v1/user/login',
    method: 'post',
    data
  });
}

export function logout() {
  return request({
    url: '/v1/user/logout',
    method: 'post'
  });
}
