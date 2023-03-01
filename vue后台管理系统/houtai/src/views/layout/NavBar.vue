<!--  -->
<template>
  <div class="navbar" :class="{ isColl: isCollapse }">
    <h1 class="main-logo">
      <img src="@/assets/images/logo.png" alt="" width="32px" />
      <span v-show="!isCollapse">通用后台管理系统</span>
    </h1>
    <!-- default-active和下面的index是关联的 -->
    <el-menu
      class="el-menu-vertical-demo"
      :unique-opened="true"
      background-color="#304156"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="isCollapse"
      :collapse-transition="false"
      :router="true"
      :default-active="$route.path"
    >
      <div v-for="(item, idx) in menuData" :key="idx">
        <el-submenu :index="item.path" v-if="item.children">
          <template slot="title">
            <svg-icon
              icon-file-name="people"
              style="margin: 0 10px 0 4px"
            ></svg-icon>
            <span>{{ item.title }}</span>
          </template>
          <el-menu-item
            :index="sitem.path"
            v-for="(sitem, sidx) in item.children"
            :key="sidx"
            >{{ sitem.title }}
          </el-menu-item>
          <!-- <el-menu-item index="1-2">选项2</el-menu-item> -->
        </el-submenu>
        <el-menu-item :index="item.path" v-else>
          <i class="el-icon-menu"></i>
          <span slot="title">{{ item.title }}</span>
        </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      menuData: [
        {
          title: "首页",
          path: "/",
        },
        {
          title: "客户管理",
          path: "/customer",
          children: [
            { title: "客户档案", path: "/customer/customer" },
            { title: "拜访记录", path: "/customer/visit" },
          ],
        },
        {
          title: "修养预约",
          path: "/business",
          children: [
            { title: "预约信息", path: "/business/appointment" },
            { title: "服务项", path: "/business/service" },
            { title: "结算单", path: "/business/statement" },
          ],
        },
        {
          title: "流程管理",
          path: "/flow",
          children: [{ title: "审核流程定义", path: "/flow/definition" }],
        },
      ],
    };
  },
  computed: {
    ...mapState({
      isCollapse: (state) => state.navCollapse.isCollapse,
      // menuData: (state) => state.userMenuData.menuData,
    }),
  },
};
</script>

<style lang = "less"  scoped>
.navbar {
  width: 220px;
  height: 100%;
  position: relative;
  background-color: #304156;
  box-shadow: 6px 0 5px #ccc;
  transition: all 0.3s;
  .el-menu {
    border: none;
  }
  &.isColl {
    width: 64px;
  }
  img {
    vertical-align: middle;
  }
  .main-logo {
    padding: 10px 16px;
    position: relative;
    span {
      display: inline-block;
      min-width: 130px;
      color: white;
      font-weight: bold;
      position: absolute;
      left: 62px;
      top: 17px;
    }
  }
}
/* 解决加了div之后的样式显示效果 */
.isColl .el-submenu__title span {
  display: none;
}
::v-deep .el-menu--collapse .el-submenu__title .el-submenu__icon-arrow {
  display: none;
}
/* 处理子菜单的背景，和鼠标移上的背景 */
.el-submenu .el-menu-item {
  /* 写在行内样式中的样式，覆盖只能用！important */
  background-color: rgb(38, 52, 69) !important;
}
.el-menu .el-menu-item:hover,
::v-deep .el-submenu__title:hover {
  background-color: #444 !important;
}
</style>
