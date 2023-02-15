<!-- 搜索弹出框 -->
<template>
  <div class="search-popop">
    <van-search
      v-model="searchVal"
      show-action
      :placeholder="placeholderVal"
      @search="onSearch"
      @cancel="onCancel"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchVal: "",
      placeholderVal: "",
    };
  },
  methods: {
    onSearch(val) {
      console.log("onSearch" + val);
    },
    onCancel() {
      //返回上一级路由
      this.$router.go(-1);
    },
  },
};
</script>

<style lang = "less"  scoped>
.search-popop {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
