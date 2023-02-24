<template>
  <div class="home">
    <van-search
      v-model="SearchVal"
      placeholder="请输入搜索关键词"
      shape="round"
      disabled
      @click="handleClickSearch"
    />
    <!--轮播图-->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in banner" :key="item.id">
        <img :src="item.image_url" alt="" width="100%" />
      </van-swipe-item>
    </van-swipe>
    <transition name="van-fade">
      <div class="popup-shadow" v-show="$store.state.isShowPopupShadow"></div>
    </transition>

    <transition name="van-slide-right">
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
  created() {
    GetHomeList().then((res) => {
      // console.log(res);
      this.banner = res.data.data.banner;
    });
  },
  methods: {
    handleClickSearch() {
      this.$router.push("/home/searchPopup");
      //修改vuex中的变量的值未true
      this.$store.commit("changeisShowPopupShadow", true);
    },
  },
};
</script>

<style lang = "less"  scoped>
.popup-shadow {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
