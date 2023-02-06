<!--  -->
<template>
  <div>这是Comp7的子组件</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  //会执行清除一些还没有关闭的定时器，清除全局事件
  beforeDestroy() {
    console.log("4.1----beforeDestroy");
  },
  destroyed() {
    console.log("4.2----destroyed");
  },
};
</script>

<style lang = "less"  scoped>
</style>
