<!--  -->
<template>
  <div>
    <div class="img">
      <div class="wrap">
        <div class="title">欢迎来到政策AI计算器</div>
        <div class="text">
          推动惠企利民政策一站统览、智能推荐、智能办、免申办。
        </div>
        <div class="select">
          <select name="" id="">
            <option value=""><div class="span">查政策</div></option>
          </select>
          <span class="sep"></span>
          <input
            type="text"
            placeholder="请输入您想要查询的政策标题"
            v-model="neirong"
          />
          <button @click="clickbtn(neirong)"><span>搜索</span></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      neirong: "",
    };
  },
  computed: {
    ...mapState({
      text: (state) => state.search.text,
    }),
  },
  methods: {
    ...mapMutations({
      clickbtn: "search/clickbtn",
    }),
  },
};
</script>

<style lang = "less"  scoped>
.img {
  background: url(@/assets/img/home/background/img/default.jpg);
  height: 352px;
  min-width: 1200px;
  position: relative;
  .title {
    font-family: PingFangSC-Semibold;
    font-size: 24px;
    color: #ffffff;
    font-weight: 600;
    position: absolute;
    top: 92px;
  }
  .text {
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #ffffff;
    letter-spacing: 0.42px;
    font-weight: 400;
    position: absolute;
    top: 132px;
  }
  .select {
    display: flex;
    position: absolute;
    top: 172px;
    select {
      width: 118px;
      border: none;
      cursor: pointer;
      appearance: none;
      -moz-appearance: none;
      -webkit-appearance: none;
      background: url("@/assets/img/路径.png") 75% 50% no-repeat #ffffff;
      outline: none;
      font-family: PingFangSC-Semibold;
      font-size: 14px;
      color: #333333;
      font-weight: 600;
      line-height: 48px;
      padding-left: 30px;
    }
    .sep {
      height: 48px;
      width: 1px;
      background: #ebebeb;
    }
    input {
      width: 353px;
      height: 48px;
      text-indent: 20px;
      border-width: 0px;
    }
    button {
      width: 68px;
      background-color: #f1393a;
      border: none;
      cursor: pointer;
      span {
        font-family: PingFangSC-Semibold;
        font-size: 14px;
        color: #ffffff;
        letter-spacing: 0.42px;
        font-weight: 600;
      }
    }
  }
}
::-webkit-input-placeholder {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #cccccc;
  font-weight: 400;
}
</style>
