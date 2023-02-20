<!--  -->
<template>
  <div>
    <ul>
      <li
        v-for="item in goodsList"
        :key="item.id"
        @click="toProductDetail(item.id)"
      >
        <img
          :src="item.list_pic_url"
          style="display: block"
          width="100%"
          alt=""
        />
        <div class="van-ellipsis">{{ item.name }}</div>
        <div class="price">{{ item.retail_price | RMBformat }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    goodsList: [],
  },
  methods: {
    toProductDetail(id) {
      this.$router.push("/productDetail?id=" + id);
      //页面刷新
      setTimeout(() => {
        this.$router.go(0);
      }, 100);
    },
  },
};
</script>

<style lang = "less"  scoped>
ul {
  padding: 0.1rem 2%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  li {
    width: 49%;
    margin-bottom: 0.1rem;
    background: #fff;
    text-align: center;
    line-height: 0.3rem;
    .price {
      color: darkred;
    }
  }
}
</style>
