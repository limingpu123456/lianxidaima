<!--  -->
<template>
  <div>
    <p>{{ obj.age }}</p>
    <button @click="obj.age++">按钮</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 20,
      obj: {
        name: "vue",
        age: 6,
      },
    };
  },
  watch: {
    "obj.age": {
      handler(newVal, oldVal) {
        //当obj里面的属性发生改变的时候
        console.log(newVal, oldVal);
      },
      // deep: true,
    },
  },
};
</script>

<style lang = "less"  scoped>
</style>
