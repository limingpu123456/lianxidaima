<!--  -->
<template>
  <div id="container">
    <div class="footer">
      <div class="top">
        <div class="topleft">
          <ul class="list">
            <li class="list-text">
              <span>上合惠企政策专区</span>
            </li>
            <li class="list-text">
              <span>企业培育专区</span>
            </li>
            <li class="list-text">
              <span>免申即享专区</span>
            </li>
            <li class="list-text">
              <span>政策匹配器</span>
            </li>
            <li class="list-text">
              <span>企业培育库</span>
            </li>
            <li class="list-text">
              <span>产业地图</span>
            </li>
          </ul>
        </div>
        <div class="topright">
          <img src="@/assets/img/二维码.png" alt="" />
          <div class="toprightright">
            <div class="div3">惠企e家小程序</div>
            <div class="div4">咨询热线: 400-103-311</div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="div1">
          主办单位：胶州市科技和工业信息化局 鲁ICP备2020034601号-1
        </div>
        <img src="@/assets/img/公安图标/状态/默认.png" alt="" />
        <div class="div2">鲁公网安备 37028102001054号</div>
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
html,
body {
  height: 100%;
}
#container {
  position: relative;
  width: 100%;
  min-height: 100%;
  padding-bottom: 205px;
  box-sizing: border-box;
  margin-top: 111px;
  .footer {
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
    .top {
      background: #3463ce;
      width: 100%;
      height: 142px;
      display: flex;
      .topleft {
        width: 820px;
        height: 90px;
        margin-left: 360px;
        .list {
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          height: 100%;
          margin-top: 25px;
          .list-text {
            width: 260px;
            height: 38px;
            background: #f1f2f3;
            margin-right: 20px;
            margin-bottom: 14px;
            cursor: pointer;
            background: rgba(255, 255, 255, 0.08);
            border-radius: 4px;
            justify-content: center;
            flex-direction: column;
            display: flex;
          }
          .list-text:nth-of-type(3n) {
            margin-right: 0;
          }
          span {
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: #ffffff;
            letter-spacing: 0;
            text-align: center;
            font-weight: 400;
          }
        }
      }
      .topright {
        display: flex;
        width: 358px;
        height: 92px;
        background-color: rgba(255, 255, 255, 0.06);
        margin-left: 22px;
        margin-top: 25px;
        border-radius: 2px;
        img {
          margin-left: 20px;
          margin-top: 19px;
          width: 54px;
          height: 54px;
        }
        .toprightright {
          margin-left: 14px;
          margin-top: 26px;
          .div3 {
            margin-bottom: 4px;
            font-family: PingFangSC-Semibold;
            font-size: 14px;
            color: #ffffff;
            letter-spacing: 0;
            font-weight: 600;
          }
          .div4 {
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: #ffffff;
            letter-spacing: 0;
            line-height: 18px;
            font-weight: 400;
          }
        }
      }
    }
    .bottom {
      background: #003284;
      display: flex;
      height: 60px;
      .div1 {
        margin-left: 658px;
        margin-top: 22px;
        width: 346px;
        height: 17px;
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #e9eefa;
        font-weight: 400;
        margin-right: 60px;
      }
      img {
        width: 20px;
        height: 20px;
        margin-top: 20px;
        margin-right: 8px;
      }
      .div2 {
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #e9eefa;
        font-weight: 400;
        margin-top: 22px;
      }
    }
  }
}
</style>
