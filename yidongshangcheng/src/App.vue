<template>
  <div id="app">
    <router-view />
    <AppTabbar v-show="$route.meta.isShowTabbar"></AppTabbar>
  </div>
</template>


<script>
import AppTabbar from "@/components/AppTabbar";
export default {
  data() {
    return {};
  },
  components: {
    AppTabbar,
  },
};
</script>

<style lang="less">
#app {
  font-size: 0.14rem;
}
html,
body {
  height: 100%;
}
html {
  font-size: 100px !important;
}
</style>
