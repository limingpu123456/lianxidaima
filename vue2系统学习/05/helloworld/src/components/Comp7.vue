<!--  -->
<template>
  <div>
    <p ref="op">{{ num }}</p>
    <button @click="num++">按钮</button>
    <Comp v-if="bool1"></Comp>
    <button @click="bool1 = !bool1">按钮2</button>
  </div>
</template>

<script>
import Comp from "@/components/Comp7Child.vue";
export default {
  data() {
    return {
      num: 20,
      bool1: true,
    };
  },
  components: {
    Comp,
  },
  methods: {
    fn() {
      console.log("这是fn函数");
    },
  },
  //组件创建之前啥也没有
  beforeCreate() {
    console.log("1.1----beforeCreate", this.num, this.fn, this.$refs.op);
  },
  //除了标签都获取到了
  created() {
    console.log("1.2----Create", this.num, this.fn, this.$refs.op);
  },
  //除了标签都获取到了
  beforeMount() {
    console.log("2.1----beforeMount", this.num, this.fn, this.$refs.op);
  },
  //都获取到了
  mounted() {
    console.log("2.2----mounted", this.num, this.fn, this.$refs.op);
  },
  beforeUpdate() {
    console.log("3.1----beforeUpdate", this.num, this.fn, this.$refs.op);
  },
  updated() {
    console.log("3.2----updated", this.num, this.fn, this.$refs.op);
  },
};
</script>

<style lang = "less"  scoped>
</style>
