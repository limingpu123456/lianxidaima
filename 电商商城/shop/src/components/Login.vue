<template>
  <div class="login-modal">
    <div class="mask" @click="chanIsShowLoginModal(false)"></div>
    <div class="login-box">
      <img
        class="close"
        @click="chanIsShowLoginModal(false)"
        src="@/assets/img/close.png"
        alt=""
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
            <input
              v-model="phoneNumber"
              type="text"
              placeholder="请输入手机号"
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
            <input type="text" placeholder="请输入验证码" />
            <div class="btn get-code">
              <span v-show="!isShowCount" @click="getSMScode">获取验证码</span>
              <span v-show="isShowCount">{{ count }}s</span>
            </div>
          </div>
          <div class="btn" @click="submitLogin">登录</div>
        </div>
        <div class="qrcode" v-show="!isShowForm">微信二维码</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { SendSMSAPI } from "@/request/api";
export default {
  data() {
    return {
      // 是否展示表单
      isShowForm: true,
      // 滑块验证码的提示文本
      msg: "向右滑动",
      //倒计时数字
      count: 30,
      maxCount: 30,
      //控制显示和隐藏倒计时数字的变量
      isShowCount: false,
      //定时器变量,是一个组件的属性
      timer: null,
      phoneNumber: "",
    };
  },
  methods: {
    ...mapMutations({
      chanIsShowLoginModal: "showLoginModal/chanIsShowLoginModal",
    }),
    countDown() {
      //倒计时的方法
      //setInterval方法，每个一段时间做同一件事
      this.timer = setInterval(() => {
        this.count--;
        //判断为0之后怎么处理:清除定时器
        if (this.count == 0) {
          clearInterval(this.timer);
          this.count = this.maxCount;
          this.isShowCount = false;
        }
      }, 1000);
    },
    async getSMScode() {
      if (this.msg == "再试一次" || this.msg == "向右滑动") {
        // 就说明用户没有拖拽验证或者验证失败了
        alert("请移动滑块至正确位置");
        return;
      }
      let res = await SendSMSAPI({
        phone: this.phoneNumber,
      });
      console.log(res);
      //倒计时 显示”获取验证码“倒计时
      this.isShowCount = true;
      this.countDown();
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
    submitLogin() {
      // 点击登录按钮执行这里的代码
      // 1 手机号码的验证
      // 2 拼图滑块的验证
      // if(msg的值是 再试一次  或者 向右滑动){
      if (this.msg == "再试一次" || this.msg == "向右滑动") {
        // 就说明用户没有拖拽验证或者验证失败了
        alert("请移动滑块至正确位置");
        return;
      }

      // 3 手机验证码的验证

      // 做登录功能
      alert("通过验证可以做登录功能了!");
    },
  },
};
</script>

<style lang = "less" scoped>
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
    background-color: rgba(0, 0, 0, 0.5);
  }

  .login-box {
    width: 555px;
    height: 423px;
    background: url("../assets/img/login-box-bg.png");
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    .close {
      position: absolute;
      right: 60px;
      top: 18px;
      cursor: pointer;
    }

    .title {
      display: flex;
      justify-content: center;
      padding-top: 40px;
      font-size: 18px;
      color: #ccc;
      li {
        cursor: pointer;
      }
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
          line-height: 50px;
          color: #fff;
          text-align: center;
          font-size: 18px;
          cursor: pointer;
        }
      }
    }
  }
}
#slideVerify {
  margin-top: -15px;
}
/* 在一些插件和框架中,没有办法直接修改到插件里面的样式,通过/deep/可以直接修改到 */
/deep/.slide-verify-slider {
  box-sizing: border-box;
}
/deep/.slide-box {
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
