<!--  -->
<template>
  <div class="crumb">
    <!-- {{ nav[0].name }}/{{ nav[1].name }} -->
    <span
      v-for="(item, index) in nav"
      :key="index"
      :style="{ color: index != nav.length - 1 ? '#999' : '#333' }"
      >{{ item.name }}
      <i v-show="index != nav.length - 1">/</i>
    </span>
  </div>
</template>

<script>
export default {
  props: ["nav"],
  data() {
    return {};
  },
};
</script>

<style lang = "less"  scoped>
.crumb {
  margin-bottom: 10px;
  color: #c999;
  i {
    margin: 0 6px;
  }
}
</style>
