<template>
  <div id="app">
    <Topbar></Topbar>
    <Tab></Tab>
    <router-view></router-view>
  </div>
</template>

<script>
import Topbar from "@/components/Topbar";
import Tab from "@/components/Tab";
export default {
  name: "app",
  components: {
    Topbar,
    Tab,
  },
};
</script>

<style>
</style>
