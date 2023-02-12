<!-- Topbar组件：顶部直通车 -->
<template>
  <div class="topbar">
    <div class="wrap">
      <div class="l">欢迎来到叩丁狼积分商城</div>
      <div class="r">
        <ul>
          <li>
            <img
              width="26"
              src="@/assets/img/userImg.f8bbec5e.png"
              alt="头像未加载"
            />
            用户名：游客
          </li>
          <li>我的积分：--</li>
          <li>获取积分</li>
          <li>叩丁狼官网</li>
          <li class="login-btn" @click="chanIsShowLoginModal(true)">登录</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapMutations({
      chanIsShowLoginModal: "showLoginModal/chanIsShowLoginModal",
    }),
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

        &.login-btn {
          width: 124px;
          height: 40px;
          background: @base-color;
          justify-content: center;
        }
      }
    }
  }
}
</style>
