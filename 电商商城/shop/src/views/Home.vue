<template>
  <div class="home">
    <div class="banner wrap">
      <img src="../assets/img/banner.f559b49d.png" alt="" />
    </div>
    <div class="content">
      <div class="wrap">
        <JfTitle title1="精品推荐" :imgSrc="titImg1"></JfTitle>
        <List :arr="jingpinArr" maxLength="4"></List>
        <JfTitle title1="热门兑换" :imgSrc="titImg2"></JfTitle>
        <img
          style="margin: 10px 0 30px 0"
          src="../assets/img/ad.4c6b6225.png"
          alt=""
        />
        <List :arr="remenArr" maxLength="6"></List>
      </div>
    </div>
    <div class="wrap">
      <JfTitle title1="积分攻略" :imgSrc="titImg3"></JfTitle>
      <ul class="jifen">
        <li :style="{ backgroundImage: `url(${jifenImg1})` }">
          <h3>签到得鸡腿</h3>
          <div>去签到</div>
        </li>
        <li :style="{ backgroundImage: `url(${jifenImg2})` }">
          <h3>购课得鸡腿</h3>
          <div>去购课</div>
        </li>
        <li :style="{ backgroundImage: `url(${jifenImg3})` }">
          <h3>推荐得鸡腿</h3>
          <div>去推荐</div>
        </li>
        <li :style="{ backgroundImage: `url(${jifenImg4})` }">
          <h3>做任务得鸡腿</h3>
          <div>做任务</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import JfTitle from "@/components/home/JfTitle";
import List from "@/components/home/List";
import {JinpinAPI,ReMenAPI} from '@/request/api'
export default {
  name: "Home",
  components: { JfTitle, List },
  data() {
    return {
      titImg1: require("../assets/img/jingpin.png"),
      titImg2: require("../assets/img/hot.png"),
      titImg3: require("../assets/img/score.png"),
      jifenImg1: require("../assets/img/integral-01.9386d4bf.png"),
      jifenImg2: require("../assets/img/integral-02.150d92a1.png"),
      jifenImg3: require("../assets/img/integral-03.9870f3f1.png"),
      jifenImg4: require("../assets/img/integral-04.afadcbdf.png"),
      jingpinArr: [],
      remenArr: [1,2,3,4,5,6],
    };
  },
  async created() {
    let res = await JinpinAPI();

    this.jingpinArr = res.data.data.records;

    let res2 = await ReMenAPI()
    this.remenArr = res2.data.data.records;
  },
};
</script>

<style lang="less" scoped>
.banner {
  padding-bottom: 30px;
}
.content {
  background-color: #f5f5f5;
  padding-bottom: 30px;
}
.jifen {
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;
  li {
    width: 285px;
    height: 168px;
    color: #fff;
    padding: 20px 10px;
    box-sizing: border-box;
    cursor: pointer;
    transition: background-size 0.4s linear;
    background-size: 100% 100%;
    &:hover {
      background-size: 105% 105%;
    }
    h3 {
      font-size: 24px;
      margin-bottom: 19px;
    }
    div {
      width: 96px;
      height: 27px;
      border: 1px solid #ffffff;
      text-align: center;
      line-height: 27px;
    }
  }
}
</style>


