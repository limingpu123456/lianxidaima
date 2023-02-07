<template>
  <div class="login-modal">
    <div class="mask" @click="chanIsShowLoginModal(false)"></div>
    <div class="login-box">
      <img class="close" @click="chanIsShowLoginModal(false)" src="@/assets/img/close.png" alt="">
      <ul class="title">
        <li :class="isShowForm==true?'active':''" @click="isShowForm=true">手机号码登录</li>
        <li style="margin:-2px 10px 0;cursor:auto;">|</li>
        <li :class="isShowForm==false?'active':''" @click="weixinClick">微信扫码登录</li>
      </ul>
      <div class="body">
        <div class="form" v-show="isShowForm">
          <div class="input-group">
            <input type="text" placeholder="请输入手机号" v-model="phoneNumber">
          </div>
          <div class="input-group">
            <slide-verify :l="42" :r="20" :w="360" :h="140" @success="onSuccess" @fail="onFail" @refresh="onRefresh" :style="{ width: '100%' }" class="slide-box" ref="slideBlock" :slider-text="msg"></slide-verify>
          </div>
          <div class="input-group">
            <input type="text" placeholder="请输入验证码" v-model="SMScode">
            <div class="btn get-code">
              <span v-show="!isShowCount" @click="getSMScode">获取验证码</span>
              <span v-show="isShowCount">{{count}}s</span>
            </div>
          </div>
          <div class="btn" @click="submitLogin">登录</div>
        </div>
        <div class="qrcode" v-show="!isShowForm"  id="weixin">微信二维码</div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations,mapActions} from "vuex"
import {SendSMSAPI,PhoneLoginAPI,BindPhoneAPI} from "@/request/api"
import {validatePhoneNumber} from "@/utils"
export default {
  data () {
    return {
      // 是否展示表单
      isShowForm:true,
      // 滑块验证码的提示文本
      msg: "向右滑动",
      // 用户输入的手机号
      phoneNumber: "",
      // 用户输入的验证码
      SMScode:"",

      // 倒计时的数字
      count:60,
      maxCount:60,
      // 控制显示和隐藏倒计时数字的变量
      isShowCount:false,
      // timer表示倒计时的定时器
      timer:null,
    }
  },
  methods:{
    ...mapMutations({
      chanIsShowLoginModal:"showLoginModal/chanIsShowLoginModal",
      chanIsLogined:"loginStatus/chanIsLogined"
    }),
    ...mapActions({
        asyncChanIsShowToast:"toastStatus/asyncChanIsShowToast",
        asyncChanUserInfo:"userInfo/asyncChanUserInfo"
    }),
    weixinClick(){
      // 切换到二维码这个盒子的显示
      this.isShowForm=false;
      // 申请二维码
      let _this = this;
      new WxLogin({
          id: "weixin",
          appid: "wx67cfaf9e3ad31a0d",  // 这个appid要填死
          scope: "snsapi_login",
          // 扫码成功后重定向的接口
          redirect_uri: "https://sc.wolfcode.cn/cms/wechatUsers/shop/PC",
          // state填写编码后的url
          state: encodeURIComponent(window.btoa("http://127.0.0.1:8080" + _this.$route.path)),
          // 调用样式文件
          href: "data:text/css;base64,Lyogd3hsb2dpbi5jc3MgKi8NCi5pbXBvd2VyQm94IC50aXRsZSwgLmltcG93ZXJCb3ggLmluZm97DQogIGRpc3BsYXk6IG5vbmU7DQp9DQoNCi8qIC5pbXBvd2VyQm94IC5xcmNvZGV7DQogIG1hcmdpbi10b3A6IDIwcHg7DQp9ICov",
      });
    },
    countDown(){
      
        // 倒计时的方法
        this.timer = setInterval(()=>{
          this.count--;
          // 如果this.count为0了,就不能再减了,就关闭/清除定时器
          if(this.count==0){
            clearInterval(this.timer);
            this.count=this.maxCount;
            this.isShowCount=false;
          }
        },1000)
    },
    verifyFn(){
      // 1 手机号码的验证 (11位数字,考虑运营商)
      // if(!正则对象.test(用户输入的信息)){
      if(!validatePhoneNumber(this.phoneNumber)){
        
        this.asyncChanIsShowToast({
          msg:"请输入正确的手机号",
          type: "warning"
        });
        return false
      }
      // 2 拼图滑块的验证
      if(this.msg=="再试一次" || this.msg=="向右滑动"){
          // 就说明用户没有拖拽验证或者验证失败了
     
          this.asyncChanIsShowToast({
            msg:"请移动滑块至正确位置",
            type: "warning"
          });
          return false
      }

      return true
    },
    async getSMScode(){
      // 点击获取验证码按钮,执行这里的代码

      // 手机号和拼图滑块的验证
      if(!this.verifyFn())return;

      // alert("验证通过了,可以发送短信了!")
      // 验证通过就可以获取验证--向后端发起请求, 发送成功要变成倒计时
      let res = await SendSMSAPI({
        phone: this.phoneNumber
      });    
      // console.log(res);
      // if(res.code==0){
      //   // 倒计时: 显示"获取验证码"或者倒计时  倒数
      //   this.isShowCount=true;
      //   this.countDown()
      // }else{
      //   alert(res.message)  
      // }
      if(!res)return;
      this.isShowCount=true;
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
    async submitLogin(){
      // 点击登录按钮执行这里的代码
      // 1 手机号码的验证
      // 2 拼图滑块的验证
      // if(!this.verifyFn())return;
      
      // 3 手机验证码的验证
      // if(!this.SMScode.trim()){
      //   this.asyncChanIsShowToast({
      //       msg:"请输入手机验证码!",
      //       type: "warning"
      //     });
      //   return
      // }

      // 登录要根据有没有uuid的情况,发送对应的请求
      let uuid = localStorage.getItem("uuid")
      let res = null;
      if(uuid){
        // 绑定微信的登录的接口请求
        res = await BindPhoneAPI({
          verifyCode:this.SMScode.trim(),
          phone:this.phoneNumber.trim(),
          uuid
        })
      }else{
        // 做普通的手机号登录功能
        res = await PhoneLoginAPI({
          // verifyCode:this.SMScode.trim(),
          // phone:this.phoneNumber.trim()
          verifyCode:456,
          phone:15912345678
        });
  
      }

      
      if(!res)return;
      // 登录成功之后的逻辑
      // 1 提示登录成功
      this.asyncChanIsShowToast({
        msg:"登录成功!",
        type: "success"
      });
      // 2 关闭登录窗口
      this.chanIsShowLoginModal(false)
      // 3 保存token值
      localStorage.setItem("x-auth-token", res["x-auth-token"])
      // 4 登录状态的切换 (登录成功之后,要显示昵称,头像, 购物车按钮...)
      this.chanIsLogined(true);
      // console.log(res);


      // 登录成功之后,删除uuid和地址栏上的code
      if(uuid){
        localStorage.removeItem("uuid");
        this.$router.push(this.$route.path)
      }

      // 登录成功,发送获取用户信息的请求
      this.asyncChanUserInfo()
    }
  }

}
</script>
 
<style lang = "less" scoped>
@import "../assets/css/global.less";
    .login-modal{
      width: 100%;
      height: 100%;
      position: fixed;
      left: 0;
      top: 0;
      

      .mask{
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.5);
      }

      .login-box{
        width: 555px;
        height: 423px;
        background: url("../assets/img/login-box-bg.png");
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        .close{
          position: absolute;
          right: 60px;
          top:18px;
          cursor: pointer;
        }

        .title{
          display: flex;
          justify-content: center;
          padding-top:40px;
          font-size: 18px;
          color: #ccc;
          li{
            cursor: pointer;
          }
          .active{
            color:#333;
            
          }
        }

        .body{
          width: 360px;
          margin: 25px auto 0;
          .form{
            .input-group{
              display: flex;
              justify-content: space-between;
              margin-bottom: 20px;
              input{
                flex:1;
                height: 48px;
                text-indent: 10px;
                border:1px solid #ccc;
              }
              .get-code{
                width: 80px;
                margin-left: 10px;
                padding: 0 10px;
                font-size: 16px;
              }
            }
            .btn{
              background-color: @base-color;
              height: 50px;
              line-height: 50px;
              color:#fff;
              text-align: center;
              font-size: 18px;
              cursor: pointer;
            }
          }
        }
      }
    }
    #slideVerify{
      margin-top:-15px ;  
    }
    /* 在一些插件和框架中,没有办法直接修改到插件里面的样式,通过/deep/可以直接修改到 */
    /deep/.slide-verify-slider{
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
    .slide-verify-block{
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

#weixin{
  display: flex;
  justify-content: center;
  margin-top: -10px;
}
</style>