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
  components: {
    Topbar,
    Header,
    Footer,
    Login,
  },
  computed: {
    ...mapState({
      isShowLoginModal: (state) => state.showLoginModal.isShowLoginModal,
    }),
  },
};
</script>

<style lang="less" scoped>
</style>
