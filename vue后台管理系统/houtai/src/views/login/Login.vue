<!--  -->
<template>
  <div class="login-page">
    <div class="login-box">
      <h1>e店邦O2O平台</h1>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input
            type="text"
            v-model="ruleForm.username"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item :label="'密\xa0\xa0\xa0\xa0码'" prop="password">
          <el-input
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="captchacode">
          <div class="captcha-box">
            <el-input v-model.number="ruleForm.captchacode"></el-input>
            <img
              :src="captchaSrc"
              alt=""
              height="40px"
              @click="getCaptchacode()"
              style="cursor: pointer"
            />
          </div>
        </el-form-item>
        <el-form-item id="login-btn-box">
          <el-button
            class="login-btn"
            type="primary"
            @click="submitForm('ruleForm')"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { validateUsername } from "@/utils/validate";
import { GetCaptchaCodeApi, LoginApi } from "@/request/api";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      ruleForm: {
        username: "qdtest1",
        password: "123456",
        captchacode: "888888",
      },
      rules: {
        username: [
          {
            required: true, //必填项
            message: "账号不能为空", //必填项
            trigger: "blur",
          },
          //自定义校验
          { validator: validateUsername, trigger: "blur" },
        ],
        password: [
          {
            required: true, //必填项
            message: "密码不能为空", //必填项
            trigger: "blur",
          },
        ],
        captchacode: [
          {
            required: true, //必填项
            message: "验证码不能为空", //必填项
            trigger: "blur",
          },
        ],
      },
      //图片验证码路径
      captchaSrc: "",
    };
  },
  created() {
    this.getCaptchacode();
  },
  methods: {
    ...mapActions({
      asyncChangeUserInfo: "userInfo/asyncChangeUserInfo",
    }),
    async getCaptchacode() {
      let res = await GetCaptchaCodeApi();
      if (res == false) return;
      //展示验证码图片
      this.captchaSrc = "data:image/gif;base64," + res.img;
      //保存uuid,给到登录时候作为参数传过去后端
      localStorage.setItem("edb-captcha-uuid", res.uuid);
    },
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          //校验通过，执行这里的代码
          //发起登录请求
          let res = await LoginApi({
            username: this.ruleForm.username,
            password: this.ruleForm.password,
            code: this.ruleForm.captchacode,
            uuid: localStorage.getItem("edb-captcha-uuid"),
          });
          if (res == false) return;
          //提示登录成功
          this.$message({ message: "登录成功！", type: "success" });
          //清除uuid
          localStorage.removeItem("edb-captcha-uuid");
          //保存token
          localStorage.setItem("edb-authorization-token", res.token);
          //跳转到首页
          this.$router.push("/");
          console.log(res);

          this.asyncChangeUserInfo();
        } else {
          //校验没有通过，执行这里的代码
          this.$message({
            message: "请输入正确的信息后再提交",
            type: "warning",
            duration: 2000,
          });
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style lang = "less"  scoped>
.login-page {
  width: 100%;
  height: 100%;
  background: url("@/assets/images/loginBg.jpg") center top no-repeat;
  position: relative;
  .login-box {
    width: 400px;
    background-color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding-top: 20px;
    padding-right: 40px;
    border-radius: 20px;
    h1 {
      text-align: center;
      margin-bottom: 20px;
      padding-left: 40px;
      font-size: 20px;
    }
    .captcha-box {
      display: flex;
      img {
        margin-left: 20px;
      }
    }
    .login-btn {
      width: 100%;
    }
    /*样式覆盖的写法*/
    ::v-deep #login-btn-box .el-form-item__content {
      margin-left: 40px !important;
    }
  }
}
</style>
