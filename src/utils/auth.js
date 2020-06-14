/*
 * 用来操作Cookie，主要是用来设置、获取、移除Token。
 */
import Cookie from 'js-cookie';

const authKey = 'admin';

export function getToken() {
  return Cookie.get(authKey);
}

export function setToken(token) {
  return Cookie.set(authKey, token);
}

export function removeToken() {
  return Cookie.remove(authKey);
}
