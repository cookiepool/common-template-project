<template>
  <div class="all-wraper">
    <section class="login-box">
      <el-input
        v-model="formData.username"
        placeholder="用户名"
        style="margin-bottom: 50px"
      ></el-input>

      <el-input
        v-model="formData.password"
        placeholder="密码"
        style="margin-bottom: 30px"
      ></el-input>

      <el-button @click="login" type="primary">登录</el-button>
    </section>
  </div>
</template>

<script>
import * as user from '@/api/user.js';

export default {
  name: 'Login',
  data() {
    return {
      formData: {
        username: '',
        password: ''
      }
    };
  },
  mounted() {},
  methods: {
    login() {
      user.login(this.formData).then((res) => {
        console.log(res);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.login-box {
  width: 500px;
  height: 600px;
  margin: auto;
}
</style>
