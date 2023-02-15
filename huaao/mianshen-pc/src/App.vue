<template>
  <div id="app">
    <Topbar></Topbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Topbar from "@/components/Topbar";

export default {
  name: "app",
  components: {
    Topbar,
  },
};
</script>

<style>
</style>
