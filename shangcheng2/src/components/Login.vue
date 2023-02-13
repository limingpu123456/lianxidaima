<!--  -->
<template>
  <div class="login-modal">
    <!--布局上避免事件冒泡-->
    <div class="mask" @click="chanIsShowLoginModal(false)"></div>
    <div class="login-box">
      <img
        class="close"
        src="@/assets/img/close.png"
        @click="chanIsShowLoginModal(false)"
      />
      <ul class="title">
        <li
          :class="isShowForm == true ? 'active' : ''"
          @click="isShowForm = true"
        >
          手机号码登录
        </li>
        <li style="margin: -2px 10px 0; cursor: auto">|</li>
        <li :class="isShowForm == false ? 'active' : ''" @click="weixinClick">
          微信扫码登录
        </li>
      </ul>
      <div class="body">
        <div class="form" v-show="isShowForm">
          <div class="input-group">
            <input
              type="text"
              placeholder="请输入手机号"
              v-model="phoneNumber"
            />
          </div>
          <div class="input-group">
            <slide-verify
              :l="42"
              :r="20"
              :w="360"
              :h="140"
              @success="onSuccess"
              @fail="onFail"
              @refresh="onRefresh"
              :style="{ width: '100%' }"
              class="slide-box"
              ref="slideBlock"
              :slider-text="msg"
            ></slide-verify>
          </div>
          <div class="input-group">
            <input type="text" placeholder="请输入验证码" v-model="SMScode" />
            <div class="btn get-code">
              <span v-show="!isShowCount" @click="getSMScode">获取验证码</span>
              <span v-show="isShowCount">{{ count }}s</span>
            </div>
          </div>
          <div class="btn" @click="submitLogin">登录</div>
        </div>
        <div class="qrcode" v-show="!isShowForm" id="weixin">
          微信二维码盒子
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import { SendSMSAPI, PhoneLoginAPI, UserProfilesAPI } from "@/request/api";
import { validatePhoneNumber } from "@/utils";
export default {
  data() {
    return {
      //用户输入的手机号
      phoneNumber: "",
      //用户输入的验证码
      SMScode: "",
      //是否展示表单
      isShowForm: true,
      //滑块验证码的提示文本
      msg: "向右滑动",
      //倒计时的数字
      count: 60,
      //控制显示和隐藏倒计时数组的变量
      isShowCount: false,
      //timer表示倒计时的定时器
      timer: null,
    };
  },
  methods: {
    ...mapMutations({
      chanIsShowLoginModal: "showLoginModal/chanIsShowLoginModal",
      chanIsLogined: "loginStatus/chanIsLogined",
    }),
    ...mapActions({
      asyncChanIsShowToast: "toastStatus/asyncChanIsShowToast",
    }),
    weixinClick() {
      this.isShowForm = false;
      //申请二维码
      let _this = this;
      new WxLogin({
        id: "weixin",
        appid: "wx67cfaf9e3ad31a0d", // 这个appid要填死
        scope: "snsapi_login",
        // 扫码成功后重定向的接口
        redirect_uri: "https://sc.wolfcode.cn/cms/wechatUsers/shop/PC",
        // state填写编码后的url
        state: encodeURIComponent(
          window.btoa("http://127.0.0.1:8080" + _this.$route.path)
        ),
        // 调用样式文件
        href: "",
      });
    },
    //倒计时的方法
    countDown() {
      //每秒钟做一件事情，注意定时器的叠加问题(要把点击事件放在别的地方)
      this.timer = setInterval(() => {
        this.count--;
        if (this.count == 0) {
          clearInterval(this.timer);
          this.count = 60;
          this.isShowCount = false;
        }
      }, 1000);
    },
    verifyFn() {
      //1.手机号码的验证
      if (!validatePhoneNumber(this.phoneNumber)) {
        this.asyncChanIsShowToast({
          msg: "请输入正确的手机号",
          type: "warning",
        });
        return false;
      }
      //2.拼图滑块的验证
      if (this.msg == "再试一次" || this.msg == "向右滑动") {
        this.asyncChanIsShowToast({
          msg: "拼图滑块验证码验证失败",
          type: "warning",
        });
        return false;
      }
      return true;
    },
    async getSMScode() {
      //点击获取验证码按钮
      //手机号和拼图滑块的验证
      if (!this.verifyFn()) {
        return;
      }
      let res = await SendSMSAPI({
        phone: this.phoneNumber,
      });
      console.log(res);
      if (!res) {
        return;
      }
      this.isShowCount = true;
      this.countDown();
      //验证通过就可以获取验证码，向后端发起验证码
      // if (res.code == 0) {
      //   this.isShowCount = true;
      //   this.countDown();
      // } else {
      //   alert(res.message);
      // }
    },
    // 拼图成功
    onSuccess(times) {
      let ms = (times / 1000).toFixed(1);
      this.msg = "login success, 耗时 " + ms + "s";
    },
    // 拼图失败
    onFail() {
      this.onRefresh(); // 重新刷新拼图
    },
    // 拼图刷新
    onRefresh() {
      this.msg = "再试一次";
    },
    //点击登录按钮执行这里的代码
    async submitLogin() {
      //手机号和拼图滑块的验证
      if (!this.verifyFn()) {
        return;
      }
      //3、手机验证码的验证
      if (!this.SMScode.trim()) {
        this.asyncChanIsShowToast({
          msg: "请输入手机验证码",
          type: "warning",
        });
        return;
      }
      //做登录功能
      let res = await PhoneLoginAPI({
        verifyCode: this.SMScode,
        phone: this.phoneNumber,
      });
      if (!res) return;
      this.asyncChanIsShowToast({
        msg: "登录成功",
        type: "success",
      });
      this.chanIsShowLoginModal(false);
      localStorage.setItem("x-auth-token", res["x-auth-token"]);
      this.chanIsLogined(true);
      console.log(res);

      //登录成功，发送用户信息的请求
      let res2 = await UserProfilesAPI();
      console.log(res2);
    },
  },
};
</script>

<style lang = "less"  scoped>
@import "../assets/css/global.less";
.login-modal {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  .mask {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
  .login-box {
    width: 555px;
    height: 423px;
    background: url(../assets/img/login-box-bg.png);
    //这种居中的方式，没有设置宽高的时候不能用
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    .close {
      position: absolute;
      right: 60px;
      top: 20px;
      cursor: pointer;
    }
    .title {
      display: flex;
      justify-content: center;
      padding-top: 40px;
      font-size: 18px;
      color: #ccc;
      cursor: pointer;
      .active {
        color: #333;
      }
    }
    .body {
      width: 360px;
      margin: 25px auto 0;
      .form {
        .input-group {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
          input {
            flex: 1;
            height: 48px;
            text-indent: 10px;
            border: 1px solid #ccc;
          }
          .get-code {
            margin-left: 10px;
            padding: 0 10px;
            font-size: 16px;
            width: 80px;
          }
        }
        .btn {
          background-color: @base-color;
          height: 50px;
          text-align: center;
          line-height: 50px;
          font-size: 18px;
          color: #fff;
          cursor: pointer;
        }
      }
    }
  }
}
#slideVerify {
  margin-top: -15px;
}
// 在一些插件和框架中，没办法通过类名修改插件里面的样式，通过::v-deep可以直接修改到
::v-deep .slide-verify-slider {
  box-sizing: border-box;
}
::v-deep .slide-box {
  width: 100%;
  position: relative;
  box-sizing: border-box;
  canvas {
    position: absolute;
    left: 0;
    top: -120px;
    display: none;
    width: 100%;
    box-sizing: border-box;
  }
  .slide-verify-block {
    width: 85px;
    height: 136px;
  }
  .slide-verify-refresh-icon {
    top: -120px;
    display: none;
  }
  &:hover {
    canvas {
      display: block;
    }
    .slide-verify-refresh-icon {
      display: block;
    }
  }
}
</style>
