<template>
  <div class="app-wraper">
    <!-- 左侧边导航栏 -->
    <side-bar />
    <!-- 右边内容部分 -->
    <div class="main-container">
      <!-- 右边顶部导航栏 -->
      <nav-bar />
      <!-- 右边底部内容栏 -->
      <app-main />
    </div>
  </div>
</template>

<script>
import AppMian from './components/AppMain';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';

export default {
  name: 'Layout',
  components: {
    'app-main': AppMian,
    'nav-bar': NavBar,
    'side-bar': SideBar
  },
  data() {
    return {};
  },
  mounted() {},
  created() {}
};
</script>

<style lang="scss">
html,
body {
  height: 100%;
}
</style>

<style lang="scss" scoped>
.app-wraper {
  position: relative;
  width: 100%;
  height: 100%;
}
.main-container {
  position: relative;
  min-height: 100%;
  margin-left: 210px;
  &::before {
    content: '';
    display: table;
  }
}
</style>
