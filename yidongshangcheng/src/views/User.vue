<template>
  <div>
    <van-row @click="openmodal">
      <van-col span="6">
        <img :src="avatarSrc" alt />
      </van-col>
      <van-col span="15">{{ nickname }}</van-col>
      <van-col span="3">
        <van-icon name="arrow" />
      </van-col>
    </van-row>
    <van-grid :column-num="3" square>
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
    </van-grid>
    <transition name="van-fade">
      <div class="loginmodal" v-show="isShowModal">
        <div class="close-modal" @click="isShowModal = !isShowModal"></div>
        <van-form @submit="onSubmit" class="login-form">
          <van-field
            v-model="username"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
          <div style="margin: 16px">
            <van-button round block type="info" native-type="submit"
              >提交</van-button
            >
          </div>
        </van-form>
      </div>
    </transition>
  </div>
</template>

<script>
import { GoLogin } from "@/request/api";
export default {
  data() {
    return {
      avatarSrc: require("../assets/avatar.png"),
      username: "",
      password: "",
      isShowModal: false,
      nickname: "默认用户",
    };
  },
  created() {
    //组件刚创建的时候，需要判断用户有没有登录，获取localStorage有没有token值
    //如果有，就表示登录，就应该填上用户信息
    let token = localStorage.getItem("token");
    if (token) {
      //表示已经登录
      //如果是字符串，需要拿JSON进行字符串转换
      let userInfo = JSON.parse(localStorage.getItem("userInfo"));
      this.nickname = userInfo.nickname;
      this.avatarSrc = userInfo.avatar;
    }
  },
  methods: {
    onSubmit(values) {
      let username = values["用户名"];
      let pwd = values["密码"];
      GoLogin({
        username,
        pwd,
      }).then((res) => {
        console.log(res.data.data);
        //首先提示框提示用户登录成功
        this.$toast.success("成功登录");
        // //把token保存到本地存储
        localStorage.setItem("token", res.data.data.token);
        localStorage.setItem(
          "userInfo",
          JSON.stringify(res.data.data.userInfo)
        );
        // //关闭模态窗口(1秒后)
        setTimeout(() => {
          this.isShowModal = !this.isShowModal;
          ``;
          // //把拿到的userinfo的用户信息，填写到页面上
          this.nickname = res.data.data.userInfo.nickname;
          this.avatarSrc = res.data.data.userInfo.avatar;
        }, 1000);
      });
    },
    openmodal() {
      //判断用户是否登录，如果登录直接就return，如果没有登录，就取反
      let token = localStorage.getItem("token");
      if (token) {
        return;
      } else {
        this.isShowModal = !this.isShowModal;
      }
    },
  },
};
</script>
<style lang = "less"  scoped>
.loginmodal {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 99;
  .login-form {
    width: 90%;
    background-color: #fff;
    padding-bottom: 0.2rem;
    position: absolute;
    left: 50%;
    top: 35%;
    margin-left: -45%;
  }
  .close-modal {
    width: 100%;
    height: 100%;
    background-color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
  }
}
.van-row {
  padding: 0.2rem 4%;
  background: #333;
  color: #fff;
  .van-col {
    line-height: 0.7rem;
    font-size: 0.16rem;
    img {
      width: 0.7rem;
      border-radius: 50%;
      display: block;
    }
    &:last-child {
      text-align: right;
    }
  }
}
</style>
