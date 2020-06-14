import request from '@/utils/request.js';

export function getData() {
  return request({
    url: '/api/user/list',
    method: 'get'
  });
}
