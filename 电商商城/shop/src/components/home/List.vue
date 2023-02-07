<template>
  <ul class="list">
    <li v-for="item,index in arr" :key="item.id" v-show="index<maxLength" @click="goToDetails(item.id)">
      <section>
        <img :src="'http://sc.wolfcode.cn'+item.coverImg" alt="" />
        <div class="bottom-box">
          <h3>{{item.name}}</h3>
          <p>{{item.coin}} 积分</p>
          <div class="btn">立即兑换</div>
        </div>
        <img
          class="flag"
          src="../../assets/img/section_new.png"
          alt=""
          v-show="item.isHotSale"
        />
        <img
          class="flag"
          src="../../assets/img/section_hot.png"
          alt=""
          v-show="item.isLatest"
        />
      </section>
    </li>
  </ul>
</template>

<script>
export default {
  props:["arr", "maxLength"],
  data() {
    return {};
  },
  methods: {
    goToDetails(id){
      // 跳转到对应的详情页
      this.$router.push(`/details?id=${id}`)
    }
  },
};
</script>
 
<style lang = "less" scoped>
.list {
  /* width: 1220px; */
  /* overflow: hidden; */
  display: flex;
  /* 自动换行 */
  flex-wrap: wrap;

  li {
    &:nth-of-type(4n) {
      margin-right: 0px;
    }
    width: 285px;
    float: left;
    margin-bottom: 20px;
    margin-right: 20px;
    position: relative;
    section {
      width: 285px;
      height: 492px;
      position: relative;
      transition: all 0.5s linear;
    }

    .bottom-box {
      width: 285px;
      height: 162px;
      background-color: #fff;
      text-align: center;
      h3 {
        font-size: 18px;
        font-family: SourceHanSansSC;
        font-weight: 300;
        color: #333333;
        height: 56px;
        line-height: 56px;
        /* background-color: #ffc; */
      }
      p {
        font-size: 18px;
        font-family: SourceHanSansSC;
        font-weight: bold;
        color: #fd604d;
      }
      .btn {
        width: 100px;
        height: 36px;
        line-height: 36px;
        border: 1px solid #0a328e;
        margin: 20px auto 0;
        font-size: 18px;
        font-family: SourceHanSansSC;
        font-weight: 300;
        color: #0a328e;
      }
    }

    .flag {
      position: absolute;
      left: 0;
      top: 0;
    }

    &:hover {
      cursor: pointer;
      section {
        margin-top: -15px;
        box-shadow: 0 0 10px #ccc;
        .btn {
          background-color: #0a328e;
          color: #fff;
        }
      }
    }
  }
}
</style>