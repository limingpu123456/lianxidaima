<!--  -->
<template>
  <div>
    <p>组件8</p>
  </div>
</template>

<script>
import { mixins } from "@/mixins";
export default {
  data() {
    return {};
  },
  mixins: [mixins],
  created() {
    console.log("自己的");
  },
};
</script>

<style lang = "less"  scoped>
</style>
