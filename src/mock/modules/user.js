const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
};

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar:
      'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar:
      'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
};

module.exports = {
  'POST /v1/user/login': (req, res) => {
    const { username } = req.body;
    const token = tokens[username];
    if (token) {
      res.json({
        code: '200',
        data: token
      });
    } else {
      res.json({
        code: '403',
        data: '用户名或密码不正确'
      });
    }
  },
  'GET /v1/user/info': (req, res) => {
    // 注意这个地方的区别，如果你的参数是在接口上，比如接口是这样
    // GET /api/user/list/:id/:type，那你的参数需要使用req.params来取id和type，const { id, type } = req.params
    // 如果你的参数是按查询字符串拼接的，类似这样/v1/user/info?token=admin-token，那你获取到token只能借助req.query
    const { token } = req.query;
    const info = users[token];

    if (info) {
      res.json({
        code: '200',
        data: info
      });
    } else {
      res.json({
        code: '403',
        data: '未找到用户信息'
      });
    }
  }
};
