<template>
  <div id="app">
    <h1>Vue-router</h1>
    <router-link to="/main">首页</router-link>
    <router-link to="/content">内容页</router-link>
    <router-link to="/kuang">Kuang</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style>

</style>
