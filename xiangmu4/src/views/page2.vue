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
            <img src="@/assets/img/政策原文icon/状态/电话.png" alt="" />
            <div class="div1">咨询电话：</div>
            <div class="div2">400-133-213</div>
          </div>
        </div>
      </div>
    </div>
    <div class="line"></div>
    <div class="list">
      <!--用Collapse折叠面板做-->
      <van-collapse
        v-model="activeNames"
        v-for="(item, key) in list"
        :key="key"
      >
        <van-collapse-item :name="key">
          <template slot="title">
            <div class="title-box">
              <div class="sep"></div>
              <span>{{ item.name }}</span>
            </div>
          </template>
          内容
        </van-collapse-item>
      </van-collapse>
    </div>
    <div class="bottombar">
      <div class="l">
        <img src="@/assets/img/事项办理icon/状态/海报黑.png" alt="" />
        <div>生成海报</div>
      </div>
      <div class="m">
        <div>政策原文</div>
      </div>
      <div class="r">
        <div>匹配评估</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNames: [""],
      list: [
        { name: "申报时限" },
        { name: "申报条件" },
        { name: "申报内容" },
        { name: "申报材料" },
        { name: "申报流程" },
        { name: "项目来源" },
        { name: "申报渠道" },
      ],
    };
  },
};
</script>

<style lang = "less"  scoped>
.sep {
  background: #1978ff;
  border-radius: 2px;
  width: 3px;
  height: 12px;
  margin-right: 10px;
}
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
      align-items: center;
      margin-top: 12px;
      margin-left: 10px;

      .title {
        font-family: PingFangSC-Medium;
        font-size: 16px;
        color: #333333;
        letter-spacing: 0;
        font-weight: 600;
        width: 64px;
        height: 22px;
        margin: 0;
        line-height: 22px;
        text-align: center;
      }
    }
    .bottom {
      margin-top: 10px;
      margin-left: 10px;
      .bottomtop {
        display: flex;
        margin-bottom: 10px;
        img {
          margin-right: 4px;
          margin-top: 1px;
          width: 13px;
          height: 13px;
        }
        .div1 {
          font-family: PingFangSC-Regular;
          font-size: 14px;
          color: #999999;
          letter-spacing: 0;
          font-weight: 400;
          width: 70px;
          height: 20px;
        }
        .div2 {
          font-family: PingFangSC-Regular;
          font-size: 14px;
          color: #333333;
          letter-spacing: 0;
          font-weight: 400;
        }
      }
      .bottombottom {
        display: flex;
        img {
          margin-right: 4px;
          margin-top: 1px;
          width: 13px;
          height: 13px;
        }
        .div1 {
          font-family: PingFangSC-Regular;
          font-size: 14px;
          color: #999999;
          letter-spacing: 0;
          font-weight: 400;
          width: 70px;
          height: 20px;
        }
        .div2 {
          font-family: PingFangSC-Regular;
          font-size: 14px;
          color: #333333;
          letter-spacing: 0;
          font-weight: 400;
        }
      }
    }
  }
}
.line {
  width: 100%;
  height: 6px;
  background: #f2f2f2;
}
.list {
  margin: 20px auto 0;
  width: 335px;
  margin-bottom: 127px;
  ::v-deep .van-cell {
    padding: 0;
    height: 45px;
    margin-top: 20px;
    border-bottom: 1px solid #ebebeb;
  }
  ::v-deep [class*="van-hairline"]::after {
    border: 0;
  }
  ::v-deep .van-collapse-item--border::after {
    border-top: 0;
  }
  .title-box {
    display: flex;
    align-items: top;
    height: 44.2px;
    .sep {
      margin-top: 6.5px;
    }
    span {
      display: block;
      font-family: PingFangSC-Semibold;
      font-size: 16px;
      color: #333;
      letter-spacing: 0;
      font-weight: 600;
    }
  }
}
.bottombar {
  width: 100%;
  height: 49px;
  display: flex;
  // margin-top: 82px;
  .l {
    width: 127px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    img {
      display: block;
      width: 18px;
      height: 18px;
      margin-right: 8px;
      div {
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: #333333;
        letter-spacing: 0;
        text-align: justify;
        font-weight: 400;
      }
    }
  }
  .m {
    width: 124px;
    background: #e5f3fe;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;

    div {
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #1978ff;
      letter-spacing: 0;
      text-align: center;
      font-weight: 400;
    }
  }
  .r {
    width: 124px;
    background: #1978ff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;

    div {
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #ffffff;
      letter-spacing: 0;
      text-align: center;
      font-weight: 400;
    }
  }
}
</style>
