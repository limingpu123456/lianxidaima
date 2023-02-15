<template>
  <div id="app">
    <Topbar></Topbar>
    <Header></Header>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import Topbar from "@/components/Topbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "app",
  components: {
    Topbar,
    Header,
    Footer,
  },
};
</script>

<style lang="less" scoped>
</style>
