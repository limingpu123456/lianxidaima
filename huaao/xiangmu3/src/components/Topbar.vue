<!--  -->
<template>
  <div class="wrap" id="top">
    <img src="@/assets/img/logo栏/颜色/黑.png" alt="" />
    <div class="btns">
      <div class="btn btn1">
        <img src="@/assets/img/icon/首页/定位.png" alt="" />
        <span>免费注册</span>
      </div>
      <div class="btn">
        <img src="@/assets/img/icon/首页/登录.png" alt="" />
        <span>立即登录</span>
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
.wrap {
  display: flex;
  img {
    margin-top: 13px;
    margin-right: 582px;
  }
  .btns {
    display: flex;
    .btn {
      width: 102px;
      height: 27.46px;
      border: 1px solid rgba(51, 51, 51, 0.17);
      border-radius: 14px;
      margin-top: 34px;
      position: relative;
      cursor: pointer;
      img {
        position: absolute;
        margin-top: 0;
        left: 14px;
        top: 6.46px;
      }
      span {
        position: absolute;
        left: 32px;
        top: 6.46px;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #151414;
        letter-spacing: 0;
        text-align: center;
        line-height: 14px;
        font-weight: 400;
      }
    }
    .btn1 {
      margin-right: 10px;
    }
  }
}
</style>
