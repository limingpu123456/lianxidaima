<!--  -->
<template>
  <div class="wrap">
    <div class="topbar">
      <div class="l">
        <img class="longhua-png" src="@/assets/img/龙华logo/状态/longhua.png" />
        <span class="longhua-sep">|</span>
        <span class="longhua-text">龙华区免申即享服务专厅</span>
      </div>
      <div class="r">
        <img class="denglu-png" src="@/assets/img/登陆.png" />
        <span class="denglu-text">登陆</span>
      </div>
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
.topbar {
  display: flex;
  justify-content: space-between;
  .l {
    display: flex;
    justify-content: center;
    align-items: center;
    .longhua-png {
      width: 145px;
      height: 66px;
      margin: 8px 20px 11px 0px;
    }
    .longhua-sep {
      width: 1px;
      height: 19px;
      color: rgba(197, 200, 202, 1);
      margin-right: 19px;
    }
    .longhua-text {
      font-family: PingFangSC-Semibold;
      font-size: 16px;
      color: #333333;
      letter-spacing: 0;
      font-weight: 600;
    }
  }
  .r {
    display: flex;
    align-items: center;
    justify-content: center;
    .denglu-png {
      width: 20px;
      height: 20px;
      text-align: center;
      justify-content: center;
      vertical-align: middle;
    }
    .denglu-text {
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #333333;
      letter-spacing: 0;
      text-align: right;
      font-weight: 400;
      width: 32px;
      margin-left: 8px;
    }
  }
}
</style>
