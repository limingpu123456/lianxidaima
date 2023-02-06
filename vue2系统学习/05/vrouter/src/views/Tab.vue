<!-- Tab -->
<template>
  <div>
    <ul class="tab">
      <router-link tag="li" to="/tab/category">分类</router-link>
      <router-link tag="li" to="/tab/cart">购物车</router-link>
      <router-link tag="li" to="/tab/mine">我的</router-link>
    </ul>
    <router-view />
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
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: pink;
  width: 100%;
  display: flex;
  height: 50px;
  line-height: 50px;
  li {
    flex: 1;
    text-align: center;
  }
}
</style>
