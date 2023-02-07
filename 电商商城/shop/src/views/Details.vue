<template>
  <div>
    
    详情页
  </div>
</template>

<script>
export default {
  data () {
    return {

 
    }
  },
  created(){
    // 发送对应的详情页的商品数据的请求
    console.log(this.$route.query.id);
  }
}
</script>
 
<style lang = "less" scoped>
  
</style>