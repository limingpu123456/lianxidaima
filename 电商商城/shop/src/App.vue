<template>
  <div id="app">
    <Topbar></Topbar>
    <Header></Header>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import Topbar from "@/components/Topbar.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  data() {
    return {};
  },
  components: {
    Topbar,
    Header,
    Footer,
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.topbar {
  height: 50px;
  background-color: pink;
}
</style>
