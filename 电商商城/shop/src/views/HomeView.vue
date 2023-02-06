<template>
  <div class="home">这是首页</div>
</template>

<script>
import { JingpinAPI } from "@/request/api.js";
export default {
  name: "HomeView",
  components: {},
  async created() {
    //await后面放Promise对象  await new Promise(),await就是写在后面的执行完毕，之后再执行括号里的，括号里写的肯定是异步的，异步的意思就是两个并行，然后其中有一个要等待，等回调函数通知再继续执行，另一个正常走，如果不用await的话，就会出现不必要的麻烦，settimeout()定时器就是异步的
    //promise对象就是后面可以.then，所以.then的前面就是promise对象，因此API就是promise对象
    //写了await之后，create函数前面一定要加async才行
    // JingpinAPI().then((res) => {
    //   console.log(res.data);
    // });
    //这样就不会出现回调地狱了，回调地狱就是套圈回调
    let res = await JingpinAPI();
    //如果还有api请求，就直接写 let res2 = await JinpinAPI()
  },
};
</script>
