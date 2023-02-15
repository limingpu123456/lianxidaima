<!--  -->
<template>
  <div class="wrap">
    <ul>
      <li
        @click="$router.push('/home')"
        :class="$route.path == '/home' ? 'active' : ''"
      >
        首页
      </li>
      <li
        @click="$router.push('/page2')"
        :class="$route.path == '/page2' ? 'active' : ''"
      >
        政策直达
      </li>
      <li>免审事项</li>
      <li>企业诉求</li>
      <li>产业云脑</li>
    </ul>
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
ul {
  display: flex;
  margin-top: 30px;
  li {
    font-family: PingFangSC-Regular;
    font-size: 22px;
    color: #333333;
    letter-spacing: 0;
    font-weight: 400;
    margin-right: 40px;
    cursor: pointer;
    &.active {
      color: #1978ff;
      border-bottom: 2px solid #1978ff;
      padding-bottom: 10px;
    }
  }
}
</style>
