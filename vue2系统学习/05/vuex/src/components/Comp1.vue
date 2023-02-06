<!--  -->
<template>
  <div>
    这是Comp1
    <p>{{ $store.state.num }}</p>
    <p>{{ num }}</p>
    <p>{{ $store.getters.dbnum }}</p>
    <p>{{ dbnum }}</p>
    <button @click="handleClick">按钮</button>
    <button @click="handleClick2">按钮2异步</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  //可以通过计算属性获取store中的值，记得要加上this
  computed: {
    num() {
      return this.$store.state.num;
    },
    dbnum() {
      return this.$store.getters.dbnum;
    },
  },
  methods: {
    handleClick() {
      this.$store.commit("addNum", {
        name: "Vue",
        age: 6,
      });
    },
    handleClick2() {
      this.$store.dispatch("asyncAddNum", {
        name: "Vue",
        age: 100,
      });
    },
  },
};
</script>

<style lang = "less"  scoped>
</style>
