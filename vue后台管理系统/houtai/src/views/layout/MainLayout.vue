<!--  -->
<template>
  <div class="layout">
    <NavBar></NavBar>
    <div class="layout-right">
      <HeaderView></HeaderView>
      <ContentView></ContentView>
    </div>
  </div>
</template>

<script>
import NavBar from "./NavBar";
import HeaderView from "./HeaderView";
import ContentView from "./ContentView";

export default {
  data() {
    return {};
  },
  components: {
    NavBar,
    HeaderView,
    ContentView,
  },
};
</script>

<style lang = "less"  scoped>
.layout {
  width: 100%;
  height: 100%;
  display: flex;
  .layout-right {
    flex: 1;
  }
}
</style>
