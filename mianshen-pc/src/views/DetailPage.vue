<!--  -->
<template>
  <div class="wrap">
    <div class="header">
      <div class="l">
        <img class="icon" src="@/assets/img/icon/首页/蓝色.png" />
        <div class="header-text">
          <span style="cursor: pointer" @click="$router.push('/shouye')"
            >免申首页</span
          >
          > 惠企清单 > 政策详情
        </div>
      </div>
      <div class="r">
        <button class="button" @click="$router.push('/home')">
          <span class="span">返回列表</span>
        </button>
      </div>
    </div>
    <div class="title">{{ listtitle }}</div>
    <div class="buttons">
      <button class="button1">
        <div class="dengluicon">
          <img src="@/assets/img/icon/登陆/白色.png" alt="" />
          <span class="span1">我要登陆</span>
        </div>
      </button>
      <button class="button2">
        <span class="span2">上一个项目</span>
      </button>
      <button class="button2">
        <span class="span2">下一个项目</span>
      </button>
    </div>
    <Dividingline title="资助信息"></Dividingline>
  </div>
</template>

<script>
import Dividingline from "@/components/Dividingline.vue";
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  components: {
    Dividingline,
  },
  computed: {
    ...mapState({
      listtitle: (state) => state.list.listtitle,
    }),
  },
};
</script>

<style lang = "less"  scoped>
.header {
  display: flex;
  align-items: center;
  width: 1200px;
  height: 45px;
  justify-content: space-between;
  border-bottom: 1px solid rgba(204, 204, 204, 0.08);
  margin-bottom: 30px;
  .l {
    display: flex;
    margin-top: 7px;
    margin-bottom: 22px;
    .icon {
      margin-right: 6px;
    }
    .header-text {
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #333333;
      letter-spacing: 0;
      font-weight: 400;
    }
  }
  .r {
    .button {
      border: 1px solid rgba(204, 204, 204, 1);
      border-radius: 3px;
      width: 68px;
      height: 30px;
      text-align: center;
      cursor: pointer;
      background-color: #fff;
      margin-top: 0;
      margin-bottom: 15px;
      .span {
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #333333;
        letter-spacing: 0;
        font-weight: 400;
      }
    }
  }
}
.title {
  font-family: PingFangSC-Semibold;
  font-size: 30px;
  color: #333333;
  letter-spacing: 0;
  font-weight: 600;
  margin-bottom: 20px;
}
.buttons {
  margin-bottom: 20px;
  button {
    width: 150px;
    height: 48px;
    margin-right: 10px;
    border: none;
    cursor: pointer;
  }
  .button1 {
    background-color: #4394f4;
    .dengluicon {
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        margin-right: 6px;
      }
      .span1 {
        font-family: PingFangSC-Semibold;
        font-size: 16px;
        color: #ffffff;
        letter-spacing: 0;
        font-weight: 600;
      }
    }
  }
  .button2 {
    background-color: #ebf4fb;
    .span2 {
      font-family: PingFangSC-Semibold;
      font-size: 16px;
      color: #4394f4;
      letter-spacing: 0;
      text-align: center;
      font-weight: 600;
    }
  }
}
</style>
