<!--  -->
<template>
  <div>
    <div class="wrap">
      <ul class="tab">
        <li
          :class="$route.path == '/shouye' ? 'active' : ''"
          @click="$router.push('/shouye')"
        >
          首页
        </li>
        <li>我的免审即享</li>
        <li
          :class="$route.path == '/home' ? 'active' : ''"
          @click="$router.push('/home')"
        >
          免审即享事项清单
          <el-divider></el-divider>
        </li>
      </ul>
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
.tab {
  display: flex;
  li {
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #333333;
    letter-spacing: 0;
    font-weight: 400;
    margin-right: 60px;
    cursor: pointer;
    margin-bottom: 10px;
    &.active {
      color: #017fed;
    }
  }
}
::v-deep .el-divider {
  width: 128px;
  height: 4px;
  background: #017fed;
  margin-bottom: 1px;
}
</style>
