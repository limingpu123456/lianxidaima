<!--  -->
<template>
  <div class="topbar">
    <div class="wrap">
      <div class="topbar-top">
        <img class="logo" src="@/assets/img/华傲logo-黑.png" />
        <span class="sep"></span>
        <span class="text">政策AI计算器</span>
      </div>
      <div class="topbar-bottom">
        <ul>
          <li
            :class="$route.path == '/home' ? 'active' : ''"
            @click="$router.push('/home')"
          >
            首页
          </li>
          <li>免审即享</li>
          <li
            :class="$route.path == '/data' ? 'active' : ''"
            @click="$router.push('/data')"
          >
            企业数据导办
          </li>
          <li>补贴事项导办</li>
          <li>补贴事项导办</li>
          <li>政策文件导办</li>
          <li>办件查询</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang = "less"  scoped>
.topbar {
  background: #214db0;
  width: 100%;
  min-width: 1200px;
  height: 117px;
  overflow: hidden;
  .wrap {
    .topbar-top {
      margin-top: 9px;
      display: flex;
      align-items: center;
      height: 52px;
      margin-bottom: 20px;
      .sep {
        margin-left: 20px;
        margin-right: 20px;
        opacity: 0.4;
        background: #ebebeb;
        width: 1px;
        height: 20px;
      }
      .text {
        font-family: PingFangSC-Medium;
        font-size: 14px;
        color: #ffffff;
        letter-spacing: 0;
        font-weight: 500;
      }
    }
    .topbar-bottom {
      ul li {
        display: inline-flex;
        margin-right: 40px;
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: #ffffff;
        letter-spacing: 0;
        font-weight: 400;
        cursor: pointer;
        &.active {
          font-family: PingFangSC-Semibold;
          font-size: 16px;
          color: #ffffff;
          letter-spacing: 0;
          font-weight: 600;
          border-bottom: 4px solid #ffffff;
          padding-bottom: 16px;
        }
      }
    }
  }
}
</style>
