<!--  -->
<template>
  <div>
    <p>找不到页面！正在给您跳转到首页{{ pnts }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pnts: "",
    };
  },
  created() {
    let t = setInterval(() => {
      this.pnts += "..";
      if (this.pnts === "..........") {
        clearInterval(t);
      }
    }, 300);
    setTimeout(() => {
      this.$router.push("/home");
    }, 2000);
  },
};
</script>

<style lang = "less"  scoped>
</style>
