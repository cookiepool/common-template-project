<template>
  <div class="side-bar-wraper">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="$route.path"
        mode="vertical"
        background-color="#304156"
        text-color="#fff"
        :router="true"
      >
        <el-submenu
          v-for="(item, index) in menu"
          :key="index"
          :index="item.path"
          popper-append-to-body
        >
          <template slot="title">
            <span slot="title">{{ item.name }}</span>
          </template>
          <el-menu-item
            v-for="(it, idx) in item.children"
            :index="it.path"
            :key="idx"
            :path="it.path"
            >{{ it.name }}</el-menu-item
          >
        </el-submenu>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
const constRoutes = [
  {
    name: '数据操作',
    path: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: '控制面板'
      }
    ]
  },
  {
    path: '//pension/index',
    name: '机构养老',
    children: [
      {
        path: '/pension/index',
        name: '首页'
      },
      {
        path: '/pension/activity',
        name: '活动管理'
      },
      {
        path: '/pension/activityDetail',
        name: '活动详情'
      }
    ]
  }
];
export default {
  name: 'SideBar',
  data() {
    return {
      menu: constRoutes
    };
  }
};
</script>

<style lang="scss">
/*** 默认菜单有一个默认的右边框，这里设置为none，否则你会发现你的菜单最下面会多一个像素 ***/
.side-bar-wraper .el-menu {
  border: none;
}
.side-bar-wraper .el-scrollbar {
  height: 100%;
}
/*** el-scrollbar的overflow-x需要设置为hidden，否则会出现默认的滚动条 ***/
.scrollbar-wrapper {
  overflow-x: hidden !important;
}
</style>
<style lang="scss" scoped>
.side-bar-wraper {
  position: fixed;
  left: 0;
  top: 0;
  width: 210px;
  height: 100%;
  font-size: 0px;
  background-color: #304156;
  z-index: 1001;
  overflow: hidden;
}
</style>
