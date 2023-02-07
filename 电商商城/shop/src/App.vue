<template>
  <div id="app">
    <!-- 如何让组件重载?  给它添加key属性,让key属性的值发生变化-->
    <!-- 以前做过一个案例,点击按钮,在列表的第一项添加一个元素 -->
    <Topbar :key="topBarKeyValue"></Topbar>
    <Header></Header>
    <router-view/>
    <Footer></Footer>

    <!-- 登录框组件 -->
    <Login v-show="isShowLoginModal"></Login>
    <!-- 提示框组件 -->
    <transition name="fade">
      <Toast v-show="isShowToast"></Toast>
    </transition>

    
  </div>
</template>
<script>
import Topbar from '@/components/Topbar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Login from '@/components/Login'
import Toast from '@/components/Toast'
import {mapState} from "vuex"
export default {
  data () {
    return {
      topBarKeyValue:1
 
    }
  },
  // watch:{
  //   "$route.path":{
  //     handler(){
  //       // 利用组件的key属性的值发生变化,组件就会重载的这个特点,让 Topbar组件的key值更新导致重载
  //       this.topBarKeyValue++
  //     }
  //   }
  // },
  computed:{
    ...mapState({
      isShowLoginModal:state=>state.showLoginModal.isShowLoginModal,
      isShowToast:state=>state.toastStatus.isShowToast
    })
  },
  components:{
    Topbar,Header,Footer,Login,Toast
  }
}
</script>
 


<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

// 进场时候过渡的开始状态 == 离开时候过渡的结束状态
.fade-enter, .fade-leave-to{
  opacity:0
}
// 指定过渡的属性和时间
.fade-enter-active, .fade-leave-active{
  transition: opacity .8s;
}
// 进场时候过渡的结束状态 == 离开时候过渡的开始状态
.fade-enter-to, .fade-leave{
  opacity:1
}
</style>
