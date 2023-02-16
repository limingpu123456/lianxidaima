<!--  -->
<template>
  <div>
    <div class="img"></div>
    <div class="list">
      <div class="title">通知列表</div>
      <div class="box">
        <input type="text" placeholder="请输入关键字" class="input" />
        <div class="img"></div>
      </div>
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
      </van-dropdown-menu>
      <van-list>
        <van-cell v-for="item in list" :key="item">
          <div class="div1">
            <div class="zhiding" v-show="item.iszhiding">
              <div>置顶</div>
            </div>
            <div>{{ item.name }}</div>
          </div>
          <div class="div2">{{ item.text }}</div>
        </van-cell>
      </van-list>
    </div>
    <div class="icon1">
      <div src="@/assets/img/形状.png" alt="" />
    </div>
    <div class="icon2">
      <div src="@/assets/img/形状.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 0,
      value2: "a",
      option1: [
        { text: "日期排序", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 },
      ],
      option2: [
        { text: "倒序", value: "a" },
        { text: "正序", value: "b" },
      ],
      list: [
        {
          iszhiding: true,
          name: "关于组织参加2022年专精特新企业“借力扬帆”融通创新技术对接活动通知",
          text: "2022-07-08 ｜ 胶州市民营经济发展局",
        },
        {
          iszhiding: true,
          name: "关于组织推荐2022年度山东省中小企业公共服务示范平台的通知",
          text: "2022-07-08 ｜ 胶州市民营经济发展局",
        },
        {
          iszhiding: false,
          name: "关于组织推荐2022年度山东省中小企业公共服务示范平台的通知",
          text: "2022-05-08 ｜ 胶州市科技和工业信息化局",
        },
        {
          iszhiding: false,
          name: "关于组织参加2022年青岛市小微企业创新转型项目申报工作的通知",
          text: "2022-04-08 ｜ 胶州市科技和工业信息化局",
        },
        {
          iszhiding: false,
          name: "关于征集第二批2022青岛中小企业国际采购洽谈会参会企业的通知",
          text: "2022-07-08 ｜ 胶州市民营经济发展局",
        },
        {
          iszhiding: false,
          name: "关于组织参加2022年专精特新企业“借力扬帆”融通创新技术对接活动通知",
          text: "2022-03-08 ｜ 胶州市科技和工业信息化局",
        },
        {
          iszhiding: false,
          name: "关于组织参加2022年专精特新企业“借力扬帆”融通创新技术对接活动通知",
          text: "2022-07-08 ｜ 胶州市民营经济发展局",
        },
      ],
    };
  },
};
</script>

<style lang = "less"  scoped>
.img {
  background: url(@/assets/img/活动页背景/状态/申报通知.png);
  width: 375px;
  height: 347px;
}
.list {
  width: 347px;
  height: 1000px;
  background-color: #fff;
  margin: -226px auto 0;
  overflow: auto;
  .title {
    width: 80px;
    height: 28px;
    font-family: PingFangSC-Semibold;
    font-size: 20px;
    color: #333333;
    letter-spacing: 0;
    font-weight: 600;
    margin-top: 20px;
    margin-left: 14px;
    margin-bottom: 10px;
  }
  .box {
    width: 319px;
    height: 40px;
    background: rgb(245, 245, 245);
    border-radius: 6px;
    margin: auto;
    display: flex;
    .input {
      background: rgb(245, 245, 245);
      outline: none;
      border: none;
      height: 40px;
      width: 284.4px;
      padding: 0;
      text-indent: 10px;
      border-radius: 6px;
    }
    .img {
      width: 14px;
      height: 14px;
      margin-top: 11px;
      background: url(@/assets/img/首页icon/状态/搜索.png);
      margin-left: 10px;
    }
  }
  .van-list {
    .van-cell {
      height: 111px;
    }
    .div1 {
      font-family: PingFangSC-Semibold;
      font-size: 16px;
      color: #333333;
      letter-spacing: 0;
      font-weight: 600;
      margin-bottom: 10px;
      .zhiding {
        width: 32px;
        height: 16px;
        background: #63c324;
        border-radius: 1px;
        float: left;
        margin-top: 5px;
        margin-right: 3px;
        div {
          font-family: PingFangSC-Regular;
          font-size: 12px;
          color: #ffffff;
          letter-spacing: 0;
          line-height: 12px;
          font-weight: 400;
          width: 24px;
          height: 12px;
          line-height: 16px;
          text-align: center;
          margin: auto;
        }
      }
    }
    .div2 {
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #999999;
      letter-spacing: 0;
      font-weight: 400;
    }
  }
}
.icon1 {
  position: fixed;
  bottom: 10px;
  left: 10px;
  width: 40px;
  height: 40px;
  opacity: 0.6;
  background: #000000;
  border-radius: 20px;
  div {
    background: url(@/assets/img/形状.png);
    width: 22px;
    height: 22px;
    margin: auto;
    margin-top: 9px;
  }
}
.icon2 {
  position: fixed;
  bottom: 10px;
  left: 64px;
  width: 40px;
  height: 40px;
  opacity: 0.6;
  background: #000000;
  border-radius: 20px;
  div {
    background: url(@/assets/img/形状.png);
    width: 22px;
    height: 22px;
    margin: auto;
    margin-top: 9px;
  }
}
::v-deep .van-dropdown-menu__bar {
  box-shadow: none;
}
::v-deep .van-popup {
  width: 347px;
  margin-left: 14px;
}
</style>
