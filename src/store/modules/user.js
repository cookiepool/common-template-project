import { getUserInfo, login, logout } from '@/api/user';
import { getToken, setToken, removeToken } from '@/utils/auth';

const state = {
  token: getToken(),
  name: '',
  avatar: '',
  introduction: '',
  roles: []
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_NAME: (state, name) => {
    state.name = name;
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar;
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction;
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles;
  }
};

const actions = {
  login(context, userInfo) {
    return new Promise((resolve, reject) => {
      login(userInfo)
        .then((res) => {
          const { data } = res;
          context.commit({
            type: 'SET_TOKEN',
            token: data.token
          });
          setToken(data.token);
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  getUserInfo(context) {
    return new Promise((resolve, reject) => {
      getUserInfo(context.state.token)
        .then((res) => {
          const { data } = res;

          if (!data) {
            reject('对不起，未获取到你的用户信息，请重新登录！');
          }

          const { roles, name, avatar, introduction } = data;

          if (!roles || roles.length <= 0) {
            reject('对不起，未识别到你的用户角色，无法分配权限，请重新登录！');
          }

          context.commit({
            type: 'SET_NAME',
            name
          });
          context.commit({
            type: 'SET_ROLES',
            roles
          });
          context.commit({
            type: 'SET_INTRODUCTION',
            introduction
          });
          context.commit({
            type: 'SET_AVATAR',
            avatar
          });
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  logout(context) {
    return new Promise((resolve, reject) => {
      logout()
        .then((res) => {
          context.commit({
            type: 'SET_TOKEN',
            token: ''
          });
          context.commit({
            type: 'SET_ROLES',
            roles: []
          });
          removeToken();
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
