/*
 * 用于模拟REST API
 */

const proxy = {
  'GET /api/user': {
    id: 10001,
    name: 'lee',
    sex: 'female'
  },
  'GET /api/user/list': [
    {
      id: 100010,
      name: 'kaka',
      sex: 'male'
    },
    {
      id: 100011,
      name: 'chacha',
      sex: 'female'
    }
  ]
};

module.exports = proxy;
