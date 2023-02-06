<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="handleClick">跳转到home</button>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  methods: {
    handleClick() {
      this.$router.push("/");
    },
  },
};
</script>
