<!-- Topbar组件：顶部直通车 -->
<template>
  <div class="topbar">
    <div class="wrap">
      <div class="l">欢迎来到叩丁狼积分商城</div>
      <div class="r">
        <ul>
          <li @click="hdClick">
            <img width="26" :src="userInfo.headImg" alt="头像未加载" />
            用户名：{{ userInfo.nickName }}
          </li>
          <li>我的积分：{{ userInfo.coin }}</li>
          <li>获取积分</li>
          <li>叩丁狼官网</li>
          <li
            class="btn"
            @click="chanIsShowLoginModal(true)"
            v-show="!isLogined"
          >
            登录
          </li>
          <li class="btn cart-btn" v-show="isLogined">
            <img src="@/assets/img/cart.png" />
            <span>购物车</span>
            <b>{{ cartTotal }}</b>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      //购物车商品品种数量
      // cartTotal: 0,
    };
  },
  watch: {
    //监听路由的变化$route.path
    "$route.path": {
      handler(newVal, oldVal) {
        console.log(newVal, oldVal);
        let mytoken = localStorage.getItem("x-auth-token");
        // if (mytoken) {
        //   this.chanIsLogined(true);
        // } else {
        //   this.chanIsLogined(false);
        // }
        this.chanIsLogined(Boolean(mytoken));
      },
    },
  },
  created() {},
  computed: {
    ...mapState({
      isLogined: (state) => state.loginStatus.isLogined,
      cartTotal: (state) => state.userInfo.cartTotal,
      userInfo: (state) => state.userInfo.userInfo,
    }),
  },
  methods: {
    ...mapMutations({
      chanIsShowLoginModal: "showLoginModal/chanIsShowLoginModal",
      chanIsShowToast: "toastStatus/chanIsShowToast",
      chanIsLogined: "loginStatus/chanIsLogined",
    }),
    ...mapActions({
      asyncChanIsShowToast: "toastStatus/asyncChanIsShowToast",
    }),
    hdClick() {
      //封装思路：
      //调用者需要什么样的功能(哪些参数)
      //才去书写组件函数内部逻辑
      //尽可能让调用变得简单
      if (this.isLogined == false) {
        this.asyncChanIsShowToast({
          msg: "请登录",
          //success 成功
          //warning 警告
          //danger 失败
          type: "danger",
        });
      } else {
        this.asyncChanIsShowToast({
          msg: "登录成功",
          //success 成功
          //warning 警告
          //danger 失败
          type: "success",
        });
      }
    },
  },
};
</script>

<style lang = "less"  scoped>
@import "../assets/css/global.less";
.topbar {
  height: 40px;
  background: #242b39;
  /* 字体样式 */
  font-size: 14px;
  font-family: SourceHanSansSC;
  font-weight: 300;
  color: #fffefe;
  line-height: 40px;
  .wrap {
    height: 40px;
    display: flex;
    justify-content: space-between;

    .r ul {
      display: flex;
      li {
        display: flex;
        align-items: center;
        margin-left: 20px;
        cursor: pointer;
        img {
          border-radius: 50%;
          margin-right: 6px;
        }

        &.btn {
          width: 124px;
          height: 40px;
          background: @base-color;
          justify-content: center;
        }

        &.cart-btn {
          b {
            width: 22px;
            height: 22px;
            background: #fd604d;
            border-radius: 11px;
            line-height: 22px;
            text-align: center;
            margin-left: 5px;
          }
        }
      }
    }
  }
}
</style>
