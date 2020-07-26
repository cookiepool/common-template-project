<template>
  <div class="dashboard-wraper">
    <p>This is dashboard page</p>
    <el-button type="primary" @click="refresh">刷新页面</el-button>
  </div>
</template>

<script>
export default {
  name: 'dashboard',
  data() {
    return {
      msg: ''
    };
  },
  mounted() {},
  methods: {
    refresh() {
      const { fullPath } = this.$route;

      this.$nextTick(() => {
        this.$router.replace({
          path: '/redirect' + fullPath
        });
      });
    }
  }
};
</script>
