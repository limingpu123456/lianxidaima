<!--  -->
<template>
  <div>
    <p>{{ num }}</p>
    <button @click="num++">按钮</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 20,
    };
  },
  //监听某一个属性或者数据发生变化
  //根据不同的字符串，获取不同的数据库的模糊查询
  watch: {
    num(newVal, oldVal) {
      console.log(newVal, oldVal);
    },
  },
};
</script>

<style lang = "less"  scoped>
</style>
