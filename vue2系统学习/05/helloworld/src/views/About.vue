<!--  -->
<template>
  <div>
    <p>{{ num }}</p>
    <button @click="num--">按钮1</button>
    <p>{{ $store.state.num }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 2000,
    };
  },
};
</script>

<style lang = "less"  scoped>
</style>
