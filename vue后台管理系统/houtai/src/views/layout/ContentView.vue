<!--  -->
<template>
  <div class="layout-content">
    <transition name="fade-transform" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang = "less"  scoped>
.layout-content {
  padding: 20px;
}
/* 进场的开始效果  */
.fade-transform-enter,
.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(10px);
}
/* 指定要过度的属性 */
.fade-transform-enter-active,
.fade-transform-leave-active {
  transition: all 0.3s;
}
/* 进场的结束效果 */
.fade-transform-enter-to,
.fade-transform-leave {
  opacity: 1;
  transform: translateX(0px);
}
</style>
