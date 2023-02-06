<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/contact">contact</router-link>
    </nav>
    <!--home缓存，about不缓存-->
    <!--如果现在要展示home，$route.meta.keepAlive-->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <!--router-view用来展示某个组件，是一个占位符-->
    <router-view v-if="!$route.meta.keepAlive" />
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
