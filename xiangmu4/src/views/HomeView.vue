<template>
  <div class="home">
    <div class="img">
      <div class="div1">工赋上合惠企e家云平台</div>
      <div class="div2">搭平台 · 创模式 · 聚产业 · 强主体</div>
    </div>
    <div class="box">
      <div class="itemsicon">
        <div class="div1">
          <img
            class="img1"
            src="@/assets/img/首页主icon/状态/最新资讯.png"
            alt=""
          />
        </div>
        <div class="div2">
          <img
            class="img2"
            src="@/assets/img/首页主icon/状态/免申即享.png"
            alt=""
          />
        </div>
        <div class="div3">
          <img
            class="img3"
            src="@/assets/img/首页主icon/状态/诉求.png"
            alt=""
          />
        </div>
        <div class="div4">
          <img
            class="img4"
            src="@/assets/img/首页主icon/状态/云脑.png"
            alt=""
          />
        </div>
      </div>
      <div class="texts">
        <div>政策直达</div>
        <div>免审事项</div>
        <div>企业诉求</div>
        <div>产业云脑</div>
      </div>
    </div>
    <div class="list">
      <div class="top">
        <div class="div1">通知公告</div>
        <div class="div2">更多</div>
        <img src="@/assets/img/箭头_列表向右_o.png" alt="" />
      </div>
      <van-list>
        <van-cell v-for="item in list" :key="item">
          <div class="div1">{{ item.name }}</div>
          <div class="div2">{{ item.text }}</div>
        </van-cell>
      </van-list>
    </div>
    <div class="tabbar">
      <div class="div1">
        <img src="@/assets/img/首页 (1).png" alt="" />
        <div>首页</div>
      </div>
      <div class="div2">
        <img src="@/assets/img/首页 (1).png" alt="" />
        <div>首页</div>
      </div>
      <div class="div3">
        <img src="@/assets/img/首页 (1).png" alt="" />
        <div>首页</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      list: [
        {
          name: "关于组织参加2022年专精特新企业“借力扬帆”融通创新技术对接活动的预备通知",
          text: "2022-07-08 ｜ 胶州市民营经济发展局",
        },
        {
          name: "关于转发《关于组织开展山东省“众创空间-孵化器-加速器”科技企业孵化链条试点申…",
          text: "2022-06-08 ｜ 胶州市科技和工业信息化局",
        },
        {
          name: "关于组织推荐2022年度山东省中小企业公共服务示范平台的通知",
          text: "2022-07-08 ｜ 胶州市民营经济发展局",
        },
        {
          name: "关于征集第二批2022青岛中小企业国际采购洽谈会参会企业的通知",
          text: "2022-03-08 ｜ 胶州市科技和工业信息化局",
        },
      ],
    };
  },
};
</script>
<style lang = "less"  scoped>
.home {
  background-color: rgba(244, 244, 247);
  .img {
    background: url("@/assets/img/首页背景/状态/默认.jpg");
    background-size: cover;
    width: 100%;
    height: 2rem;
    padding-top: 0.26rem;
    .div1 {
      font-family: PingFangSC-Semibold;
      font-size: 23px;
      color: #ffffff;
      letter-spacing: 0;
      text-align: center;
      font-weight: 600;
      margin: 0 auto;
      width: 3rem;
      height: 0.32rem;
    }
    .div2 {
      opacity: 0.69;
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #ffffff;
      letter-spacing: 0.18px;
      text-align: center;
      font-weight: 400;
      margin: 0.02rem auto;
    }
  }
  .box {
    width: 3.47rem;
    // height: 0.94rem;
    background-color: #fff;
    border-radius: 10px;
    margin: auto;
    margin-top: -0.47rem;
    padding-top: 0.14rem;
    margin-bottom: 0.11rem;
    overflow: auto;
    .itemsicon {
      height: 0.4rem;
      margin-left: 0.24rem;
      margin-right: 0.26rem;
      display: flex;
      justify-content: space-between;
      .div1 {
        width: 0.4rem;
        height: 0.4rem;
        border-radius: 50%;
        background-image: linear-gradient(180deg, #ff985a 0%, #ff702f 98%);
        position: relative;
        .img1 {
          position: absolute;
          top: 7px;
          left: 7px;
        }
      }
      .div2 {
        width: 0.4rem;
        height: 0.4rem;
        border-radius: 50%;
        background-image: linear-gradient(180deg, #33c26d 0%, #33c2c0 100%);
        position: relative;
        .img2 {
          position: absolute;
          top: 7px;
          left: 7px;
        }
      }
      .div3 {
        width: 0.4rem;
        height: 0.4rem;
        border-radius: 50%;
        background-image: linear-gradient(180deg, #57c6fd 0%, #489ffa 100%);
        position: relative;
        .img3 {
          position: absolute;
          top: 7px;
          left: 7px;
        }
      }
      .div4 {
        width: 0.4rem;
        height: 0.4rem;
        border-radius: 50%;
        background-image: linear-gradient(180deg, #ffc442 0%, #fba201 100%);
        position: relative;
        .img4 {
          position: absolute;
          top: 7px;
          left: 7px;
        }
      }
    }
    .texts {
      height: 0.2rem;
      margin-top: 0.06rem;
      margin-left: 0.16rem;
      margin-right: 0.16rem;
      margin-bottom: 0.14rem;
      display: flex;
      justify-content: space-between;
      div {
        font-family: PingFangSC-Semibold;
        font-size: 14px;
        color: #333333;
        letter-spacing: 0;
        text-align: center;
        font-weight: 600;
      }
    }
  }
  .list {
    width: 3.47rem;
    height: 5.09rem;
    background-color: #fff;
    margin: 0 auto 0.21rem;
    .top {
      display: flex;
      background-color: #fff;
      height: 0.6rem;
      border-bottom: 1px solid #ecebeb;
      width: 317px;
      margin: auto;
      justify-content: center;
      align-items: center;
      .div1 {
        font-family: PingFangSC-Semibold;
        font-size: 20px;
        color: #333333;
        letter-spacing: 0;
        line-height: 20px;
        font-weight: 600;
        margin-right: 1.92rem;
      }
      .div2 {
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #999999;
        letter-spacing: 0;
        text-align: right;
        line-height: 14px;
        font-weight: 400;
        margin-right: 0.1rem;
      }
      img {
        width: 0.07rem;
        height: 12px;
      }
    }
    .van-list {
      .van-cell {
        height: 111px;
        .div1 {
          font-family: PingFangSC-Semibold;
          font-size: 16px;
          color: #333333;
          letter-spacing: 0;
          font-weight: 600;
          margin-bottom: 10px;
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
  }
  .tabbar {
    background-color: #fff;
    width: 100%;
    height: 0.6rem;
    padding-top: 0.0643rem;
    display: flex;
    .div1 {
      width: 0.56rem;
      height: 0.4821rem;
      margin-left: 0.43rem;
      margin-top: 5px;
      img {
        margin-left: 13px;
      }
      div {
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #999999;
        letter-spacing: 0.18px;
        text-align: center;
        font-weight: 400;
      }
    }
    .div2 {
      width: 0.56rem;
      height: 0.4821rem;
      margin-left: 0.6rem;
      margin-top: 5px;

      div {
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #999999;
        letter-spacing: 0.18px;
        text-align: center;
        font-weight: 400;
      }
      img {
        margin-left: 13px;
      }
    }
    .div3 {
      width: 0.56rem;
      height: 0.4821rem;
      margin-left: 0.6rem;
      margin-top: 5px;

      div {
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #999999;
        letter-spacing: 0.18px;
        text-align: center;
        font-weight: 400;
      }
      img {
        margin-left: 13px;
      }
    }
  }
}
</style>
