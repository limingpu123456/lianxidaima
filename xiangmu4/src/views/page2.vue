<!--  -->
<template>
  <div>
    <div class="wrap">
      <div class="title">胶州市财政厅关于做好一次性留工培训补助</div>
      <div class="middle">
        <div class="middletop">
          <div class="sep"></div>
          <div class="title">基本信息</div>
        </div>
        <div class="bottom">
          <div class="bottomtop">
            <img src="@/assets/img/政策原文icon/状态/颁发部门.png" alt="" />
            <div class="div1">颁发部门：</div>
            <div class="div2">国务院办公厅</div>
          </div>
          <div class="bottombottom">
            <img src="@/assets/img/政策原文icon/状态/颁发部门.png" alt="" />
            <div class="div1">咨询电话：</div>
            <div class="div2">400-133-213</div>
          </div>
        </div>
      </div>
    </div>
    <div class="line"></div>
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
  margin: 0 auto;
  width: 335px;
  .title {
    font-family: PingFangSC-Semibold;
    font-size: 22px;
    color: #333333;
    letter-spacing: 0;
    text-align: justify;
    font-weight: 600;
    height: 60px;
    margin: auto;
    margin-top: 11.12px;
    margin-bottom: 20px;
  }
  .middle {
    height: 106px;
    background-color: #f8f9fb;
    margin-bottom: 20px;
    overflow: auto;
    .middletop {
      display: flex;
      justify-content: center;
      .sep {
        background: #1978ff;
        border-radius: 2px;
        width: 3px;
        height: 12px;
        margin-top: 17px;
        margin-left: 10px;
      }
      .title {
        font-family: PingFangSC-Medium;
        font-size: 16px;
        color: #333333;
        letter-spacing: 0;
        text-align: justify;
        font-weight: 500;
        margin-top: 12px;
        margin-left: 23px;
        width: 64px;
        height: 22px;
        margin: 0;
      }
    }
  }
}
.line {
  width: 375px;
  height: 6px;
  background: #f2f2f2;
}
</style>
