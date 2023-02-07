<!--  -->
<template>
  <div class="wrap">
    <span>{{ title }}</span>
    <el-divider></el-divider>
  </div>
</template>

<script>
export default {
  props: ["title"],
  data() {
    return {};
  },
};
</script>

<style lang = "less"  scoped>
span {
  font-family: PingFangSC-Semibold;
  font-size: 18px;
  color: #333333;
  letter-spacing: 0;
  font-weight: 600;
  width: 72px;
  height: 25px;
}
.el-divider {
  margin-top: 10px;
  margin-bottom: 20px;
  background: #000000;
}
</style>
