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
        <li
          :class="isShowForm == false ? 'active' : ''"
          @click="isShowForm = false"
        >
          微信扫码登录
        </li>
      </ul>
      <div class="body">
        <div class="form" v-show="isShowForm">
          <div class="input-group">
            <input type="text" placeholder="请输入手机号" />
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
            <input type="text" placeholder="请输入验证码" />
            <div class="btn get-code" @click="getSMScode">
              <span>获取验证码</span>
              <span>{{ count }}s</span>
            </div>
          </div>
          <div class="btn" @click="submitLogin">登录</div>
        </div>
        <div class="qrcode" v-show="!isShowForm">微信二维码盒子</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      //是否展示表单
      isShowForm: true,
      //滑块验证码的提示文本
      msg: "向右滑动",
      //倒计时的数字
      count: 60,
    };
  },
  methods: {
    ...mapMutations({
      chanIsShowLoginModal: "showLoginModal/chanIsShowLoginModal",
    }),
    getSMScode() {
      //点击获取验证码按钮
      //1.手机号码的验证
      //2.拼图滑块的验证
      if (this.msg == "再试一次" || this.msg == "向右滑动") {
        alert("拼图滑块验证码验证失败");
        return;
      }
      //验证通过就可以获取验证码，向后端发起验证码
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
    submitLogin() {
      //1.手机号码的验证
      //2.拼图滑块的验证
      if (this.msg == "再试一次" || this.msg == "向右滑动") {
        alert("拼图滑块验证码验证失败");
        return;
      }
      //3、手机验证码的验证
      //做登录功能
      alert("可以通过验证");
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
