<template>
  <div class="toast">

    <!-- 
// success 成功  icon-toast_chenggong
// warning 警告 icon-toast-jinggao
// danger 失败 icon-toast-shibai_huaban

     -->
      <i :class="type=='success'?'icon-toast_chenggong':(type=='warning'?'icon-toast-jinggao':'icon-toast-shibai_huaban')" class="iconfont"></i>
      <span>{{msg}}</span>   
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {
  data () {
    return {

 
    }
  },
  computed:{
    ...mapState({
      msg:state=>state.toastStatus.msg,
      type:state=>state.toastStatus.type,
    })
  }
}
</script>
 
<style lang = "less" scoped>
    .toast{
      position: fixed;
      left: 50%;
      top: 0;
      transform: translate(-50%);
      background-color: #fff;
      padding: 10px 20px;
      border-radius: 5px;
      box-shadow: 0  0 10px #fff;
      i{margin-right: 5px;}
    }
    .icon-toast-shibai_huaban{
      color:red;
    }
    .icon-toast_chenggong{
      color:green;
    }
    .icon-toast-jinggao{
      color:orange;
    }
</style>