<!--表单修饰符 -->
<template>
  <div>
    <input type="text" v-model.trim="txtVal" />
    <button @click="handleClick">按钮</button>

    <input type="number" v-model.number="numVal" />
    <button @click="handleClick2">按钮2</button>

    <br />
    <input type="text" v-model.lazy="txtVal2" />
    <p>{{ txtVal2 }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      txtVal: "",
      numVal: "",
      txtVal2: "",
    };
  },
  methods: {
    handleClick() {
      console.log(this.txtVal);
    },
    handleClick2() {
      console.log(this.numVal, typeof this.numVal);
    },
  },
};
</script>

<style lang = "less"  scoped>
</style>
