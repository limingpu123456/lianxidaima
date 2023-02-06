<!-- ref和refs -->
<template>
  <div>
    <p ref="con">这是p标签</p>
    <button @click="handleClick">按钮</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleClick() {
      console.log(this.$refs.con.innerHTML);
    },
  },
};
</script>

<style lang = "less"  scoped>
</style>
