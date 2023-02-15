<!--  -->
<template>
  <div>
    <van-list :finished="finished" finished-text="没有更多了">
      <van-cell v-for="item in searchTipsListData" :key="item" :title="item" />
    </van-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      finished: true,
    };
  },
  props: {
    searchTipsListData: [],
  },
};
</script>

<style lang = "less"  scoped>
</style>
