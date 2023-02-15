<template>
  <div class="home">
    <van-search
      v-model="SearchVal"
      placeholder="请输入搜索关键词"
      shape="round"
      disabled
      @click="$router.push('/home/searchPopup')"
    />
    <!--轮播图-->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in banner" :key="item.id">
        <img :src="item.image_url" alt="" width="100%" />
      </van-swipe-item>
    </van-swipe>
    <transition name="van-fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { GetHomeList } from "@/request/api";
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      SearchVal: "",
      banner: [],
    };
  },
  async created() {
    GetHomeList().then((res) => {
      this.banner = res.data.banner;
    });
  },
};
</script>

<style lang = "less"  scoped>
// .slide-enter,
// .slide-leave-to {
//   right: -100%;
// }
// .slide-enter-active,
// .slide-leave-active {
//   transition: right 0.5s;
// }
// .slide-enter-to,
// .slide-leave {
//   right: 0;
// }
</style>
