<!--  -->
<template>
  <div>
    <p>{{ num }}</p>
    <button @click="num++">按钮1</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 20,
    };
  },
};
</script>

<style lang = "less"  scoped>
</style>
