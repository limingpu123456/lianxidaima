<!--  -->
<template>
  <div>
    <van-goods-action>
      <van-goods-action-icon
        :icon="!isCollected ? 'star-o' : 'star'"
        text="未收藏"
        :color="!isCollected ? '#333' : 'darkred'"
        @click="isCollected = !isCollected"
      />
      <van-goods-action-icon icon="cart-o" text="购物车" :badge="goodsCount" />
      <van-goods-action-button
        type="danger"
        text="立即购买"
        @click="handleClick"
      />
      <van-goods-action-button
        type="warning"
        text="加入购物车"
        @click="goToCart"
      />
    </van-goods-action>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollected: false,
    };
  },
  props: {
    goodsCount: Number,
  },
  methods: {
    handleClick() {
      this.$toast("功能未开放");
    },
    goToCart() {
      this.$emit("goToCart");
    },
  },
};
</script>

<style lang = "less"  scoped>
::v-deep .van-goods-action {
  z-index: 99999;
}
</style>
