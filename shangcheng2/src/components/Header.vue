<!--  -->
<template>
  <div class="header wrap">
    <h1><img src="@/assets/img/indexLogo.6f8ac4f0.png" alt="" /></h1>
    <ul class="nav">
      <li
        :class="$route.path == '/home' ? 'active' : ''"
        @click="$router.push('/home')"
      >
        首页
      </li>
      <li
        :class="$route.path == '/goods' ? 'active' : ''"
        @click="$router.push('/goods')"
      >
        全部商品
      </li>
      <li
        :class="$route.path == '/user' ? 'active' : ''"
        @click="$router.push('/user')"
      >
        个人中心
      </li>
      <li
        :class="$route.path == '/order' ? 'active' : ''"
        @click="$router.push('/order')"
      >
        我的订单
      </li>
      <li
        :class="$route.path == '/free' ? 'active' : ''"
        @click="$router.push('/free')"
      >
        专属福利
      </li>
    </ul>
    <div class="search">
      <input type="text" placeholder="请输入想要搜索的内容" />
      <span
        ><img width="20" height="20" src="@/assets/img/search.png" alt=""
      /></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang = "less"  scoped>
.header {
  height: 118px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .nav {
    display: flex;
    width: 500px;
    justify-content: space-between;
    li {
      cursor: pointer;
      &.active {
        color: #0a328e;
        //字体加粗
        font-weight: bold;
      }
    }
  }
  .search {
    display: flex;
    input {
      width: 214px;
      height: 38px;
      border: 1px solid #dedede;
      border-radius: 20px 0px 0px 20px;
      //文字缩进
      text-indent: 12px;
    }
    span {
      //如果写成display：block，会掉下来，所以一般就用display：flex，里面的内容还可以居中
      display: flex;
      width: 50px;
      height: 40px;
      background: #0a328e;
      border-radius: 0px 20px 20px 0px;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  }
}
</style>
