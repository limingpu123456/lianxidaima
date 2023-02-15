<!--  -->
<template>
  <div>
    <div class="tongguo">
      <img class="img1" src="@/assets/img/形状.png" />
      <span class="tl">经企业数据导办!</span>
      <span class="tr"
        >您可能有
        <div class="num">2</div>
        项符合申办条件的事项</span
      >
      <span class="bottom"
        >请逐项核对确认是否满足申办条件，如满足，申办期内可申办。</span
      >
      <img class="yinzhang" src="@/assets/img/印章 (1).png" />
      <button><span>重新导办</span></button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang = "less"  scoped>
.tongguo {
  background-color: #f2faff;
  height: 130px;
  margin-top: 20px;
  position: relative;
  margin-bottom: 30px;
  .img1 {
    position: absolute;
    top: 44px;
    bottom: 43px;
    left: 25px;
  }
  .tl {
    font-family: PingFangSC-Semibold;
    font-size: 20px;
    color: #3e9505;
    letter-spacing: 0;
    font-weight: 600;
    position: absolute;
    top: 38px;
    bottom: 64px;
    left: 78px;
  }
  .bottom {
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #333333;
    letter-spacing: 0;
    font-weight: 400;
    position: absolute;
    top: 71px;
    left: 78px;
  }
  .tr {
    font-family: PingFangSC-Semibold;
    font-size: 18px;
    color: #333333;
    letter-spacing: 0;
    font-weight: 600;
    display: flex;
    position: absolute;
    top: 40px;
    left: 238px;
    .num {
      color: #ff8113;
      display: inline-block;
      width: 18.79px;
      height: 23.3px;
      line-height: 23.3px;
      font-size: 30px;
      margin-left: 5.63px;
      margin-right: 5.58px;
      vertical-align: baseline;
      margin-top: -5px;
    }
  }
  .yinzhang {
    position: absolute;
    top: 24px;
    left: 529.5px;
  }
  button {
    position: absolute;
    right: 15px;
    top: 47px;
    background: #2f7dd6;
    border-radius: 5px;
    border: none;
    width: 107px;
    height: 34px;
    cursor: pointer;
    span {
      font-family: PingFangSC-Semibold;
      font-size: 14px;
      color: #ffffff;
      letter-spacing: 0.42px;
      text-align: center;
      font-weight: 600;
    }
  }
}
</style>
