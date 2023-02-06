<!--  -->
<template>
  <div>
    这是Comp2
    <p>{{ $store.state.num }}</p>
    <p>{{ num }}</p>
    <p>{{ $store.getters.dbnum }}</p>
    <p>{{ dbnum }}</p>
    <button @click="handleClick()">按钮</button>
    <button @click="asyncAddNum">按钮2异步</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  //可以通过计算属性获取store中的值，记得要加上this
  computed: {
    ...mapState(["num"]),
    ...mapGetters(["dbnum"]),
  },
  methods: {
    ...mapMutations(["addNum"]),
    handleClick() {
      // this.$store.commit("addNum", {
      //   name: "Vue",
      //   age: 6,
      // });
      this.addNum(50);
    },
    ...mapActions(["asyncAddNum"]),
    // handleClick2() {
    //   this.$store.dispatch("asyncAddNum", {
    //     name: "Vue",
    //     age: 100,
    //   });
    // },
  },
};
</script>

<style lang = "less"  scoped>
</style>
