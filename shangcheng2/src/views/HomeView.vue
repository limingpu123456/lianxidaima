<template>
  <div class="home">这是首页</div>
</template>

<script>
//如果有default，就不需要加大括号，没有default再加大括号
import { JingpinAPI } from "@/request/api";
export default {
  name: "HomeView",
  components: {},
  async created() {
    //await后面一般放Promise对象，await就是等Promise对象执行完毕之后，再执行下面的东西
    //Promise对象之后可以点then，所以.then的前面就是Promise对象，因此JingpinAPI就是Promise对象,加完await之后，就可以不用写后面的then了，然后用一个变量接收promise对象
    //写了await之后，函数前面要加async
    let res = await JingpinAPI();
    console.log(res);
  },
};
</script>
