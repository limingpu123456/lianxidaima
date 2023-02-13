<template>
  <div id="app">
    <Topbar></Topbar>
    <Header></Header>
    <router-view />
    <Footer></Footer>
    <Login v-show="isShowLoginModal"></Login>
    <transition name="fade">
      <Toast v-show="isShowToast"></Toast>
    </transition>
  </div>
</template>

<script>
import Topbar from "@/components/Topbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Login from "@/components/Login";
import Toast from "@/components/Toast";
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
    Toast,
  },
  computed: {
    ...mapState({
      isShowLoginModal: (state) => state.showLoginModal.isShowLoginModal,
      isShowToast: (state) => state.toastStatus.isShowToast,
    }),
  },
};
</script>

<style lang="less" scoped>
//进场时候过度的开始状态
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
//指定过度的属性和时间
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s;
}
//进场时过度的结束状态
.fade-enter-to,
.fade-leave {
  opacity: 1;
}
</style>
