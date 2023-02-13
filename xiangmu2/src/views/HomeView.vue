<template>
  <div id="container">
    <div class="wrap">
      <div>首页</div>
    </div>
    <Footer class="footer"></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Footer,
  },
  methods: {},

  data() {
    return {};
  },
};
</script>

<style lang = "less"  scoped>
html,
body {
  height: 100%;
}
#container {
  position: relative;
  width: 100%;
  min-height: 100%;
  padding-bottom: 400px;
  box-sizing: border-box;
  .footer {
    position: absolute;
    bottom: 0px;
    left: 0px;
  }
}
</style>
