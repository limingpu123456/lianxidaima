<template>
  <div class="topbar">
    <div class="wrap">
      <div class="l">欢迎来到叩丁狼积分商城</div>
      <div class="r">
        <ul>
          <li @click="hdClick">
            <img width="26" :src="userInfo.headImg" alt="" />
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
            <img src="@/assets/img/cart.png" alt="" />
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
import { WeixinLoginAPI } from "@/request/api";
export default {
  data() {
    return {
      // 购物车商品品种数量
      // cartTotal:0
    };
  },
  watch: {
    "$route.path": {
      handler(newVal, oldVal) {
        let mytoken = localStorage.getItem("x-auth-token");

        // if(mytoken){
        //   this.chanIsLogined(true)
        // }else{
        //   this.chanIsLogined(false)
        // }
        // 根据是否有token值来更新用户的登录状态
        this.chanIsLogined(Boolean(mytoken));
        if (mytoken) {
          this.asyncChanUserInfo();
        } else {
          // 没有登录的情况,把用户数据初始化
          this.initUserInfo();
        }
      },
    },
  },
  created() {
    // 有可能在创建的时候还拿不到code,所以等页面所有工作准备完毕之后再去获取这个code
    setTimeout(async () => {
      // 判断地址栏有没有code
      let mycode = this.$route.query.code;
      console.log(mycode);

      if (mycode) {
        // 发起微信扫码登录的请求
        let res = await WeixinLoginAPI({
          code: mycode,
        });

        // 针对这3种情况做不同的处理
        if (res.code == 0) {
          // 微信扫码登录成功
          // 1 提示登录成功
          this.asyncChanIsShowToast({
            msg: "登录成功!",
            type: "success",
          });
          // 3 保存token值
          localStorage.setItem("x-auth-token", res["x-auth-token"]);
          // 4 登录状态的切换 (登录成功之后,要显示昵称,头像, 购物车按钮...)
          this.chanIsLogined(true);

          // 登录成功之后,地址栏上的code
          this.$router.push(this.$route.path);

          // 登录成功,发送获取用户信息的请求
          this.asyncChanUserInfo();
        } else if (res.code == 400) {
          // code 失效的情况

          // 1 提示用户重新扫二维码
          this.asyncChanIsShowToast({
            msg: "code失效,请重新扫码登录",
            type: "warning",
          });
          // 2 把登录框打开
          this.chanIsShowLoginModal(true);
        } else if (res.code == 407) {
          console.log(res);
          // {code: 407, message: '现在申请获取你微信绑定的手机号码', uuid: 'f3f816fc-afc3-435f-aaa0-c9ce849cf4c6'}

          // 这个微信号,在这个网上还没有绑定手机号
          // 绑定手机号. 怎么绑定手机号??
          // 就让用户重新用手机号登录,而我们的登录接口调用的应该是 手机绑定微信 的接口(带上uuid)

          // 1 提示用户手机号绑定微信
          this.asyncChanIsShowToast({
            msg: "请使用手机号绑定登录微信!",
            type: "warning",
          });
          // 2 把登录框打开
          this.chanIsShowLoginModal(true);
          // 3 保存uuid到本地存储
          localStorage.setItem("uuid", res.uuid);
        }
      } else {
        // 没有code的情况是什么情况??
        // 1 用户没有扫码登录的操作   或者 2 在加载这个页面的时候,用户已经是登录的了

        let mytoken = localStorage.getItem("x-auth-token");
        // 根据是否有token值来更新用户的登录状态
        this.chanIsLogined(Boolean(mytoken));

        if (mytoken) {
          this.asyncChanUserInfo();
        } else {
          // 没有登录的情况,把用户数据初始化
          this.initUserInfo();
        }
      }
    }, 100);

    //   }
    // })
  },
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
      initUserInfo: "userInfo/initUserInfo",
    }),
    ...mapActions({
      asyncChanIsShowToast: "toastStatus/asyncChanIsShowToast",
      asyncChanUserInfo: "userInfo/asyncChanUserInfo",
    }),
    hdClick() {
      // 封装思路:
      // 调用者需要什么功能(那些参数)
      // 才去书写组件/函数内部的逻辑
      // 尽可能让调用变得简单

      this.asyncChanIsShowToast({
        msg: "登录成功!!!",
        // 我们封装的提示框组件有3种状态
        // success 成功
        // warning 警告
        // danger 失败
        type: "success",
      });
    },
  },
};
</script>

<style lang = "less" scoped>
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
