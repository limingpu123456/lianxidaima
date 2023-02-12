<template>
  <div id="app">
    <Topbar></Topbar>
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Topbar from "@/components/Topbar.vue";
import Header from "@/components/Header.vue";

export default {
  name: "app",
  components: {
    Topbar,
    Header,
  },
};
</script>

<style lang="less" scoped>
</style>
