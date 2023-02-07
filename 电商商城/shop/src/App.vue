<template>
  <div id="app">
    <Topbar></Topbar>
    <Header></Header>
    <router-view />
    <Footer></Footer>

    <Login v-show="isShowLoginModal"></Login>
  </div>
</template>
<script>
import Topbar from "@/components/Topbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Login from "@/components/Login";
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      isShowLoginModal: (state) => state.showLoginModal.isShowLoginModal,
    }),
  },
  components: {
    Topbar,
    Header,
    Footer,
    Login,
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
</style>
