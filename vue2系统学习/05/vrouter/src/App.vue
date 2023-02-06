<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <!-- <button @click="handleClick">按钮点击跳转到about</button> -->
    <router-view />
  </div>
</template>
<script>
export default {
  methods: {
    handleClick() {
      //一直就用query传参就可以了
      this.$router.push({ name: "about", query: { page: 1, size: 10 } });
    },
  },
};
</script>
<style lang="less" >
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
