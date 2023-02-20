<!--  -->
<template>
  <div class="body">
    <div class="img"></div>
    <div class="list">
      <div class="title">通知列表</div>
      <div class="box">
        <input type="text" placeholder="请输入关键字" class="input" />
        <div class="img"></div>
      </div>
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" @change="sort" />
      </van-dropdown-menu>
      <van-pull-refresh
        success-text="刷新成功"
        v-model="isLoading"
        @refresh="onRefresh"
      >
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
          :immediate-check="false"
        >
          <van-cell v-for="(item, key) in listtext" :key="key">
            <div class="div1">
              <div class="zhiding" v-show="item.iszhiding">
                <div>置顶</div>
              </div>
              <div>{{ item.name }}</div>
            </div>
            <div class="div2">{{ item.text }}</div>
          </van-cell>
        </van-list>
      </van-pull-refresh>
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
      finished: false, //是否加载
      loading: false, //加载状态
      listtext: [
        {
          iszhiding: true,
          name: "关于组织参加2022年专精特新企业“借力扬帆”融通创新技术对接活动通知",
          text: "2022-07-08 ｜ 胶州市民营经济发展局",
          date: "2022-07-08",
        },
        {
          iszhiding: true,
          name: "关于组织推荐2022年度山东省中小企业公共服务示范平台的通知",
          text: "2022-07-08 ｜ 胶州市民营经济发展局",
          date: "2022-07-08",
        },
        {
          iszhiding: false,
          name: "关于组织推荐2022年度山东省中小企业公共服务示范平台的通知",
          text: "2022-05-08 ｜ 胶州市科技和工业信息化局",
          date: "2022-05-08",
        },
        {
          iszhiding: false,
          name: "关于组织参加2022年青岛市小微企业创新转型项目申报工作的通知",
          text: "2022-04-08 ｜ 胶州市科技和工业信息化局",
          date: "2022-04-08",
        },
        {
          iszhiding: false,
          name: "关于征集第二批2022青岛中小企业国际采购洽谈会参会企业的通知",
          text: "2022-07-08 ｜ 胶州市民营经济发展局",
          date: "2022-07-08",
        },
      ],
      //-------------------------------------------------------------------------------
      isLoading: false,
      value1: 0,
      value2: "desc",
      option1: [{ text: "日期排序", value: 0 }],
      option2: [
        //desc是从大到小
        //asc是从小到大

        { text: "倒序", value: "desc" },
        { text: "正序", value: "asc" },
      ],
      list: [
        {
          iszhiding: true,
          name: "关于组织参加2022年专精特新企业“借力扬帆”融通创新技术对接活动通知",
          text: "2022-07-08 ｜ 胶州市民营经济发展局",
          date: "2022-07-08",
        },
        {
          iszhiding: true,
          name: "关于组织推荐2022年度山东省中小企业公共服务示范平台的通知",
          text: "2022-07-08 ｜ 胶州市民营经济发展局",
          date: "2022-07-08",
        },
        {
          iszhiding: false,
          name: "关于组织推荐2022年度山东省中小企业公共服务示范平台的通知",
          text: "2022-05-08 ｜ 胶州市科技和工业信息化局",
          date: "2022-05-08",
        },
        {
          iszhiding: false,
          name: "关于组织参加2022年青岛市小微企业创新转型项目申报工作的通知",
          text: "2022-04-08 ｜ 胶州市科技和工业信息化局",
          date: "2022-04-08",
        },
        {
          iszhiding: false,
          name: "关于征集第二批2022青岛中小企业国际采购洽谈会参会企业的通知",
          text: "2022-07-08 ｜ 胶州市民营经济发展局",
          date: "2022-07-08",
        },
        {
          iszhiding: false,
          name: "关于组织参加2022年专精特新企业“借力扬帆”融通创新技术对接活动通知",
          text: "2022-03-08 ｜ 胶州市科技和工业信息化局",
          date: "2022-03-08",
        },
        {
          iszhiding: false,
          name: "关于组织参加2022年专精特新企业“借力扬帆”融通创新技术对接活动通知",
          text: "2022-07-08 ｜ 胶州市民营经济发展局",
          date: "2022-07-08",
        },
        {
          iszhiding: false,
          name: "关于组织参加2022年专精特新企业“借力扬帆”融通创新技术对接活动通知",
          text: "2022-07-08 ｜ 胶州市民营经济发展局",
          date: "2022-07-08",
        },
        {
          iszhiding: false,
          name: "关于组织参加2022年专精特新企业“借力扬帆”融通创新技术对接活动通知",
          text: "2022-07-08 ｜ 胶州市民营经济发展局",
          date: "2022-07-08",
        },
        {
          iszhiding: false,
          name: "关于组织参加2022年专精特新企业“借力扬帆”融通创新技术对接活动通知",
          text: "2022-07-08 ｜ 胶州市民营经济发展局",
          date: "2022-07-08",
        },
        {
          iszhiding: false,
          name: "关于组织参加2022年专精特新企业“借力扬帆”融通创新技术对接活动通知",
          text: "2022-07-08 ｜ 胶州市民营经济发展局",
          date: "2022-07-08",
        },
        {
          iszhiding: false,
          name: "关于组织参加2022年专精特新企业“借力扬帆”融通创新技术对接活动通知",
          text: "2022-07-08 ｜ 胶州市民营经济发展局",
          date: "2022-07-08",
        },
        {
          iszhiding: false,
          name: "关于组织参加2022年专精特新企业“借力扬帆”融通创新技术对接活动通知",
          text: "2022-07-08 ｜ 胶州市民营经济发展局",
          date: "2022-07-08",
        },
        {
          iszhiding: false,
          name: "关于组织参加2022年专精特新企业“借力扬帆”融通创新技术对接活动通知",
          text: "2022-07-08 ｜ 胶州市民营经济发展局",
          date: "2022-07-08",
        },
        {
          iszhiding: false,
          name: "关于组织参加2022年专精特新企业“借力扬帆”融通创新技术对接活动通知",
          text: "2022-07-08 ｜ 胶州市民营经济发展局",
          date: "2022-07-08",
        },
      ],
    };
  },
  mounted() {
    this.listtext.sort(this.sortByDesc);
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        let length = this.listtext.length;
        if (length >= this.list.length) {
          this.finished = true;
        } else {
          for (let i = length; i < length + 5; i++) {
            this.listtext.push(this.list[i]);
          }
        }
        this.loading = false;
      }, 2000);
    },
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
        this.$router.go(0);
        window.scrollTo(0, 0);
      }, 1000);
    },
    sortByAsc(a, b) {
      if (a.iszhiding == true) {
        return this.list.length;
      }
      if (b.iszhiding == true) {
        return 0;
      }
      return new Date(a.date) - new Date(b.date);
    },
    sortByDesc(a, b) {
      return new Date(b.date) - new Date(a.date);
    },
    sort(sortOrder) {
      if (sortOrder === "asc") {
        this.listtext.sort(this.sortByAsc);
      } else if (sortOrder === "desc") {
        this.listtext.sort(this.sortByDesc);
      } else {
        return;
      }
    },
  },
};
</script>

<style lang = "less"  scoped>
.body {
  background-color: #f2f4f7;
}

.img {
  background: url(@/assets/img/活动页背景/状态/申报通知.png);
  width: 100%;
  height: 347px;
  background-repeat: no-repeat;
  background-size: cover;
}
.list {
  width: 347px;
  background-color: #fff;
  margin: -226px auto 0;
  overflow: hidden;
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
      height: 14px;
      margin-top: 11px;
      background: url(@/assets/img/首页icon/状态/搜索.png);
      margin-left: 113px;
      background-repeat: no-repeat;
    }
  }
  .van-list {
    margin-bottom: 37px;
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
        display: flex;
        justify-content: center;
        align-items: center;
        div {
          font-family: PingFangSC-Regular;
          font-size: 12px;
          color: #ffffff;
          letter-spacing: 0;
          font-weight: 400;
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
  margin: 0 auto;
  left: 0;
  right: 0;
}
::v-deep .van-cell::after {
  border-bottom: 1px solid #e6e6e6;
}
</style>
